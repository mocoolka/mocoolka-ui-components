import * as React from 'react';
import {
    TTheme, TComponentTheme, CommonInputProp, CommonMixed, InputPropBase, InputPropFunctionBase
    , TComponentThemeSetting
} from './type';
import Css from '../Css';
import styled, { StyledComponentClass } from 'styled-components';
export { ThemeProvider } from 'styled-components';
import { merge } from 'mocoolka-fp/lib/object';
import { parseTheme, parseComponent } from './valid';
import { As } from './utils';
export {
    StyledComponentClass,
};

export let defaultComponentTheme: TComponentTheme = {};
// export let defaultModuleComponentTheme: t.TModuleComponentTheme = {};
export const themeBaseMixin = <P extends { [k: string]: any }>() =>
    (props: CommonInputProp & P & { theme?: TTheme } & { children?: any }): string => {
        const { theme, children, ...otherProp } = props as any;
        if (theme) {
            return theme.css.toTCss(otherProp);
        }
        return '';

    };
export type themeFunctionType = (outerTheme: TTheme) => TTheme;
export const buildTheme = (mixin: CommonMixed = {}): TTheme => (
    {
        components: defaultComponentTheme,
        /*  moduleComponents: defaultModuleComponentTheme, */
        props: Css.value.props,
        css: Css.mixed(mixin),
    });

const defaultComponent = styled(As<CommonInputProp>())``;

export function asTag<TTag extends keyof JSX.IntrinsicElements>(component: TTag) {
    const f = <D extends InputPropBase= {}, DF extends InputPropFunctionBase= {},
        Addtion= CommonInputProp>
        (a: TComponentThemeSetting<D, DF>) => {
        defaultComponentTheme = merge(defaultComponentTheme, { [a.moduleName]: { [a.name]: a } });
        const result1 = styled(As<Addtion & D & DF>())`
        ${themeComponentMixin<Addtion>(a.moduleName, a.name)}
        `;
        const result = result1.withComponent(component);
        result.displayName = `${a.moduleName}.${a.name}`;

        return result;
    };
    return f;
}
export const asComponent = <P>(component: React.ComponentType<P>) => {
    const result = styled(component)``;
    return extend(result);
};
export const extend = <P, T, O>
    (a: StyledComponentClass<P, T, O>) =>
    <D extends InputPropBase= {}, DF extends InputPropFunctionBase= {}, Addtion= CommonInputProp>
        (b: TComponentThemeSetting<D, DF>): StyledComponentClass<P & Partial<D & DF> & Addtion & {
            theme?: TTheme | undefined;
        }, T, O & Partial<D & DF> & Addtion & {
            theme?: TTheme | undefined;
        }> => {
        defaultComponentTheme = merge(defaultComponentTheme, { [b.moduleName]: { [b.name]: b } });
        const result = a.extend
            `${themeComponentMixin<Partial<D & DF> & Addtion>(b.moduleName, b.name)}`;
        result.displayName = `${b.moduleName}.${b.name}`;
        result.defaultProps = merge({}, result.defaultProps, { As: b.tagName });
        /*         if (b.tagName) {
                    return result.withComponent(b.tagName) as any as  StyledComponentClass<P, T, O &D & DF & Addtion>;
                } */
        return result;
    };
export const as = extend(defaultComponent);
export const themeComponentMixin = <P>
    (modulename: string, componentName: string) =>
    (props: P & { theme?: TTheme }): string => {

        const { theme, children, ...otherProp } = props as any;
        const settings = parseTheme(modulename, componentName, theme);
        const setting = settings.reduce((a, b) => merge(a, b), {}) as TComponentThemeSetting<any, any>;
        const _value = merge({}, setting.style, setting.defaultPropValue ? setting.defaultPropValue : {}, otherProp);
        const value = parseComponent(theme)(_value);
        if (setting.propertySetting || setting.propertyFSetting) {
            const propertySetting = setting.propertySetting ? setting.propertySetting : {};
            const propertyFSetting = setting.propertyFSetting ? setting.propertyFSetting : {};
            const m = theme.css.addProps(propertySetting, propertyFSetting);

            // console.log(m.toRCss(value).selector);
            return m.toTCss(value);
        } else {
            return theme.css.toTCss(value);
        }
    };
export const withProps = <T>(WrappedComponent: React.StatelessComponent<T>) => {
    return styled(WrappedComponent)`
            ${themeBaseMixin<T>()}
        `;
};
