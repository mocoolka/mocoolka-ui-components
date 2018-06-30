// import { success, failure, Validation } from 'mocoolka-fp/lib/Validation';
import { isArray, isString, isObject } from 'mocoolka-fp/lib/predicate';
import { identity, compose } from 'mocoolka-fp/lib/function';
import { Either, left, right } from 'mocoolka-fp/lib/Either';
import { lefts, rights, flatten } from 'mocoolka-fp/lib/Array';
import { isNil } from 'mocoolka-fp/lib/predicate';
import { get, has, merge } from 'mocoolka-fp/lib/object';
import * as t from './type';
export const isNotFound = (x: ParseError): x is NotFound => {
    return x._tag === 'NotFound';
};

export class NotFound {
    _tag: 'NotFound' = 'NotFound';
}

export class DataMissingThemeName {
    _tag: 'DataMissingThemeName' = 'DataMissingThemeName';
    constructor(readonly module: string, readonly name: string) { }
}
export class DataErrorComponentName {
    _tag: 'DataErrorComponentName' = 'DataErrorComponentName';
    constructor(readonly name: string) { }
}
export class DataMissingComponentNameInTheme {
    _tag: 'DataMissingComponentNameInTheme' = 'DataMissingComponentNameInTheme';
    constructor(readonly module: string, readonly name: string) { }
}

export type ParseError = DataMissingThemeName | DataMissingComponentNameInTheme | DataErrorComponentName | NotFound;

export type ParseErrors = Array<ParseError>;

export const ok = <A>(a: A): Either<ParseErrors, A> => {
    return right(a);
};

export const kos = (errors: ParseErrors): Either<ParseErrors, never> => {
    return left(errors);
};

export const ko = (error: ParseError): Either<ParseErrors, never> => {
    return kos([error]);
};

export const notFound: Either<ParseErrors, never> = ko(new NotFound());
export const printError = (error: ParseError | ParseError[]): string => {
    if (isArray(error)) {
        return error.map(printError).join('\n');
    }
    switch (error._tag) {
        case 'DataMissingThemeName':
            return `Missing theme property on component "${error.name}" in module "${error.module}"`;
        case 'DataMissingComponentNameInTheme':
            return `Missing component "${error.module}.${error.name}" in theme property`;
        case 'DataErrorComponentName':
            return `Missing component "${error.name}" in theme property`;

        case 'NotFound':
            return '';
    }
};
const throwError = (a: string) => { throw new Error(a); };
export const throwParseError = <A>(v: Either<ParseErrors, A>) => v.fold(compose(throwError, printError), identity);
export const toString = (v: Either<ParseErrors, string>) => v.fold(printError, identity);

const getComponentSetting = (modulename: string, componentName: string, theme: t.TTheme):
    Either<ParseErrors, t.TComponentThemeSetting<any, any>> => {
    if (has(theme, ['components', modulename, componentName])) {
        return ok(get(theme, ['components', modulename, componentName]));
    } else {
        return ko(new DataMissingComponentNameInTheme(modulename, componentName));
    }

};
const parseComponentName = (a: string):
    Either<ParseErrors, { moduleName: string, name: string }> => {
    const names = a.split('.');
    if (names.length !== 2) {
        return ko(new DataErrorComponentName(a));
    }
    return ok({ moduleName: names[0], name: names[1] });
};
const parseComponentSetting = (theme: t.TTheme) => (a: string):
    Either<ParseErrors, t.TComponentThemeSetting<any, any>> => {
    const result = parseComponentName(a);
    if (result.isLeft) {
        return result;
    }
    const b = result.getOrElse({ moduleName: '', name: '' });
    return getComponentSetting(b.moduleName, b.name, theme);
};

const parseFromExtends = (theme: t.TTheme) => (a: t.TComponentThemeSetting<any, any>):
    Either<ParseErrors, t.TComponentThemeSetting<any, any>[]> => {
    let r: t.TComponentThemeSetting<any, any>[] = [];
    let l: ParseErrors = [];
    if (a.extends) {
        const result = a.extends.map(parseComponentSetting(theme));
        l = l.concat(flatten(lefts(result)));
        const resultRight = rights(result);
        const maps = resultRight.map(parseFromExtends(theme));
        l = l.concat(flatten(lefts(maps)));
        r = r.concat(flatten(rights(maps)));
    }
    if (l.length > 0) {
        return left(l);
    } else {
        r = r.concat(a);
        return right(r);
    }
};
export const parseComponent = (theme: t.TTheme) => (a: any) => {
    let result: any = {};
    Object.entries(a).map(([k, v]) => {
        if (k === 'component') {
            if (isString(v)) {
                result = merge({}, result, parseThemeWithName(v, theme).style);
            } else if (isObject(v) && v.displayName) {
                result = merge({}, result, parseThemeWithName(v.displayName, theme).style);
            }
        } else if (isArray(v)) {
            result[k] = v.map(vValue => parseComponent(theme)(vValue));
        } else if (isObject(v)) {
            result[k] = parseComponent(theme)(v);
        } else {
            result[k] = v;
        }
    });
    return result;
};

export const parseThemeWithName = (name: string, theme?: t.TTheme) => {
    const result = throwParseError(parseComponentName(name));
    const settings = parseTheme(result.moduleName, result.name, theme);
    return settings.reduce((a, b) => merge(a, b), {}) as t.TComponentThemeSetting<any, any>;
};
export const parseTheme = (modulename: string, componentName: string, theme?: t.TTheme) => {
    if (isNil(theme)) {
        return throwParseError(ko(new DataMissingThemeName(modulename, componentName)));
    }
    const result = throwParseError(getComponentSetting(modulename, componentName, theme));
    return throwParseError(parseFromExtends(theme)(result));
};
