// import { isFunction, isObject, isUndefined } from 'mocoolka-fp/lib/predicate';
import { Mixed, InputProp } from '../Css/type';
import Css from '../Css';
import { TInputProp,TInputPropF,InputPropBase,InputPropFunctionBase} from 'mocoolka-css/lib/base/type'
import { AllHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import { HTMLAttributes, ClassAttributes } from 'react';
import { ObjectOmit } from 'mocoolka-fp/lib/TypeLevel';
export {InputPropBase,InputPropFunctionBase}
export {
    StyledComponentClass,
    HTMLAttributes,
    ClassAttributes,
    AllHTMLAttributes,
};

export type CommonDomProps = Pick<AllHTMLAttributes<{}>, 'onClick' | 'tabIndex' | 'href' | 'id'
    | 'rowSpan' | 'colSpan' | 'controls' | 'dangerouslySetInnerHTML' |'children'>;
export type WithOptionalTheme<P extends { theme?: T; }, T> = ObjectOmit<P, 'theme'> & { theme?: T; };

export type TComponentThemeSetting<D extends InputPropBase, DF extends InputPropFunctionBase
    > = {
        name: string,
        moduleName: string,
        extends?: string[],
        style?: CommonInputProp
        propertySetting?: TInputProp<CommonInputProp, D>,
        propertyFSetting?: TInputPropF<CommonInputProp, DF>,
        defaultPropValue?: D & DF,
        tagName?: keyof JSX.IntrinsicElements
    };
export type TComponentTheme = {
    [modulename: string]: {
        variable?: any;
        [componentName: string]: TComponentThemeSetting<any, any>
    }
};
export type TModuleComponentThemeSetting = CommonInputProp & { tagName?: keyof JSX.IntrinsicElements };
export type TModuleComponentTheme = {
    [modulename: string]: {
        variable?: any;
        [componentName: string]: TModuleComponentThemeSetting
    }
};
export type CommonMixed = Mixed;
export type ThemeMixed=CommonMixed;
export type StandInputProp =InputProp;
  /*   base.TRProp<TCssSelector, TCssProperty, VariableProp,
    AbbrProps, GlobalPropFunction & GlobalProp & { component?: string }>; */
export type CommonInputProp = StandInputProp & { As?: keyof JSX.IntrinsicElements } & CommonDomProps;
/**
 * The is a input theme
 * It contain variable and property
 */
export type TTheme = {
    components: TComponentTheme,
   // moduleComponents: TModuleComponentTheme,
    props: any,
    css: typeof Css,
};
/**
 * The is a output theme
 * The properties contain key is Property name and Property value. value is css value
 */
export type TOutTheme = {
    properties: { [key: string]: any },
};
export interface MKStyledComponentClass<P, O = P> extends StyledComponentClass<P, TTheme, O> {
    extendM: MThemedStyledFunction<P, O>;
}
export type MThemedStyledFunction<P, O> = <D extends InputPropBase, DF extends InputPropFunctionBase>
(a: TComponentThemeSetting<D, DF>) => StyledComponentClass<P, O & D & DF>;
export interface MThemedBaseStyledInterface {
    <P, TTag extends keyof JSX.IntrinsicElements>(tag: TTag): MThemedStyledFunction<P, P & JSX.IntrinsicElements[TTag]>;
    <P, O>(component: StyledComponentClass<P, TTheme, O>): MThemedStyledFunction<P, O>;
    <P extends { [prop: string]: any; theme?: TTheme }>(component: React.ComponentType<P>):
        MThemedStyledFunction<P, WithOptionalTheme<P, TTheme>>;
}

export type MStyledInterface = MThemedBaseStyledInterface;
