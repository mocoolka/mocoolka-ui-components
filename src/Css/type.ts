/**
 *
 * The is a special global definition which includes some property which all elements used.
 * Every property in global has css style. 
 * @header A global property  is a set of global property that define the basic css for all UI elements.
 * @title Global Properties
 * @module
 */
export interface GlobalProperties {

}
import { PVariable, AbbrProp, TRProp } from 'mocoolka-css/lib/base/type';
import { TCssProperty } from 'mocoolka-css/lib/css';
import { VariableMixed } from './variable';
import { PaletteNodeValue } from './variable/palette/type';
import { ColorNodeValue } from './variable/color/type';
import {
    BorderRadiusType, BorderWidthType, FontWeightType, FontSizeType, FontFamilyType, ZIndexType,
    BModuleType, UnitType, WidthType, GlobalVariableSetting
} from './variable/global/type';
export {
    TCssProperty
}
export type Mixed = VariableMixed;
export type TCssSelector = 'focus' | 'hover' | 'active' | 'disabledS' | 'empty' | 'enabled' | 'invalid';
export type ColorVariableProps =
    PVariable<PaletteNodeValue |
    ColorNodeValue, TCssProperty, 'color' | 'backgroundColor'
    | 'borderColor' | 'borderLeftColor' | 'borderRightColor' | 'borderTopColor' | 'borderBottomColor'>;
export type GlobalVariableProps =
    PVariable<BorderRadiusType, TCssProperty, 'borderRadius'>
    & PVariable<BorderWidthType, TCssProperty, 'borderWidth'
    | 'borderTopWidth' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderRightWidth'>
    & PVariable<FontWeightType, TCssProperty, 'fontWeight'>
    & PVariable<FontSizeType, TCssProperty, 'fontSize'>
    & PVariable<FontFamilyType, TCssProperty, 'fontFamily'>
    & PVariable<ZIndexType, TCssProperty, 'zIndex'>
    & PVariable<BModuleType | UnitType
    | WidthType, TCssProperty, 'width'>
    & PVariable<BModuleType | UnitType, TCssProperty,
    'lineHeight' | 'height'
    | 'padding' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingBottom'
    | 'margin' | 'marginLeft' | 'marginRight' | 'marginTop' | 'marginBottom'>
    ;
export type VariableProp = ColorVariableProps & GlobalVariableProps;
export type AbbrProps = AbbrProp<'bgColor', VariableProp, 'backgroundColor'>
    & AbbrProp<'marginV', VariableProp, 'marginLeft'>
    & AbbrProp<'marginH', VariableProp, 'marginLeft'>
    & AbbrProp<'paddingV', VariableProp, 'paddingLeft'>
    & AbbrProp<'paddingH', VariableProp, 'paddingLeft'>
    ;

import { ObjectOmit, ObjectDiff } from 'mocoolka-fp/lib/TypeLevel';
export type TransformSetting = {
    mode: 'horizontal' | 'vertical' | 'rotate',
    rotate: number,
};
export type DefaultTransformSetting = ObjectOmit<TransformSetting, 'mode'>;
export type BackgroundSetting = {
    url: string,
    size: string,
    positionX: string | number,
    positionY: string | number,
};
export type DefaultBackgroundSetting = ObjectOmit<BackgroundSetting, 'url'>;
export type TransitionSetting = {
    property: string,
    duration: keyof GlobalVariableSetting['effects']['duration'],
    ease: keyof GlobalVariableSetting['effects']['ease'],
    delay: keyof GlobalVariableSetting['effects']['duration']
};
export type DefaultTransitionSetting = ObjectOmit<TransitionSetting, 'property'>;

export type PaletteColor = 'red' |
    'pink' |
    'purple' |
    'deepPurple' |
    'indigo' |
    'blue' |
    'lightBlue' |
    'cyan' |
    'teal' |
    'green' |
    'lightGreen' |
    'lime' |
    'yellow' |
    'amber' |
    'orange' |
    'deepOrange'

/**
 * The 'color' value may modify on theme.
 * @header  The color Properties can be used to color any element
 * @title Color Properties
 * @propertyinterface
 */
export interface ColorProp {
    /**
     * text color are specified using predefined color names
     */
    color: 'accent' | 'alert' | 'alt' | 'disabled'
    | 'main' | 'primary' | 'secondary' | 'success' | 'warning' | 'hint' | 'inherit' | PaletteColor
    ,
    /**
 * text color are specified using predefined color names
 */
    borderColor: 'accent' | 'alert' | 'alt' | 'disabled'
    | 'main' | 'primary' | 'secondary' | 'success' | 'warning' | 'hint' | 'inherit' | PaletteColor,
    /**
     * background color are specified using predefined color names
     */
    bgColor: 'paper' | 'content' | 'divider' | 'accent' | 'alert' | 'alt' | 'disabled'
    | 'main' | 'selected' | 'focus' | 'success' | 'warning' | 'transparent' | 'inherit' | PaletteColor,
}


export interface BorderProp {

    border: 'none' | 'bordered' | 'top' | 'bottom' | 'left' | 'right' | 'topBar'
    | 'bottomBar' | 'leftBar' | 'rightBar',
    borderRadius: 'none' | 'small' | 'medium' | 'large' | 'largeX' | 'inherit',
    borderWidth: 'none' | 'small' | 'medium' | 'large' | 'largeX' | 'inherit',
}
export interface AppearPropF {
    boxShadow: keyof GlobalVariableSetting['effects']['shadows'],
    rounded: boolean,
    backgroundImage: ObjectDiff<BackgroundSetting, DefaultBackgroundSetting>,
}
export interface BoxProp {
    width: 'full' | 'content' | 'nav' | 'gutter' | 'third' | 'inherit',
    box: 'container' | 'panel' | 'cell',
    height: 'full' | 'inherit',
    scrollBar: 'horizontal' | 'vertical' | 'both' | 'none';
    bgSize: StandLevel | 'inherit',
    squareSize: StandLevel,
}
export interface BoxPropF {
    gutterBottom: boolean,
    lineHeight: number,
    paragraph: boolean,
}
export interface TextProp {
    typography: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
    fontWeight: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black' | 'inherit',
    fontFamily: 'sansSerif' | 'serif' | 'monospace' | 'inherit',
    fontSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
    'subtitle' | 'p' | 'caption' | 'overline' | 'inherit',
    semantic: 'em' | 'strong',
}
export interface TextPropF {
    textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'inherit',
    textAlign: 'left' | 'right' | 'center' | 'justify' | 'inherit',
    direction: 'ltr' | 'rtl' | 'inherit',
    textDecoration: 'none' | 'underline' | 'overline' | 'line-through' | 'inherit',
    underlined: boolean,
    noWrap: boolean,
}
export interface EffortProp {
    /**
     * 
     */
    flip: 'horizontal' | 'vertical',
}
export interface EffortPropF {
    rotate: number,
    transform: ObjectDiff<TransformSetting, DefaultTransformSetting>,
    transition: ObjectDiff<TransitionSetting, DefaultTransitionSetting>,
}
export type Media = {
    columns3: 'two' | 'three',
}
/**
 * The sizes defines column number in a 12-column responsive grid.
 * @header  The Media  Properties can be used to reponsive ** css media ** for all element
 * @title Media 
 * @propertyinterface
 */
export interface MediaF {
    /**
     * Responsive sizes for small screens
     */
    sm: BreakPointsValue,
    /**
    * TResponsive sizes for middle screens
    */
    md: BreakPointsValue,
    /**
    * TResponsive sizes for large screens
    */
    lg: BreakPointsValue,
    /**
    * TResponsive sizes for xLarge screens
    */
    xl: BreakPointsValue,
    /**
     * Responsive style When screens smaller than sm setting
     */
    smSetting: InputProp,
    /**
     * Responsive style When screens smaller than md setting
     */
    mdSetting: InputProp,
    /**
     * Responsive style When screens smaller than lg setting
     */
    lgSetting: InputProp,
    /**
     * Responsive style When screens smaller than xl setting
     */
    xlSetting: InputProp,
    /**
     * Responsive style When screens bigger than sm setting
     */
    smMinSetting: InputProp,
    /**
     * Responsive style When screens bigger than md setting
     */
    mdMinSetting: InputProp,
    /**
     * Responsive style When screens bigger than lg setting
     */
    lgMinSetting: InputProp,
    /**
     * Responsive style When screens bigger than xl setting
     */
    xlMinSetting: InputProp,

}
export interface FlexF {
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit',
    flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit',
    justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'inherit',
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'inherit',
    order: number,
}
export interface ChildProp {
    align: 'childCenterFlex' | 'childCenter' | 'imageCenter' | 'center',
}
export interface PositoinProp {
    layout: 'center' | 'column' | 'row' | 'inlineColumn' | 'inlineRow' | 'inlineCenter',
    position: 'fixedLeftTop' | 'fixedRightTop' | 'fixedTop',
    visibility: 'hidden' | 'none' | 'elementInvisible' | 'inherit' | 'hiddenWidth' | 'hiddenHeight',
    zIndex: 'moon' | 'tooltip' | 'alertDesktop' | 'popup' | 'modal' | 'overlay'
    | 'dropdown' | 'alertMobile' | 'nav' | 'bar' | 'base',
}
export type OtherPropF = {
    after: InputProp,
}
export type GlobalProp = ColorProp & BorderProp & BoxProp & TextProp & ChildProp & PositoinProp & EffortProp & Media & {};
export type BreakPointsValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GlobalPropFunction = AppearPropF & TextPropF & EffortPropF & BoxPropF & FlexF & OtherPropF;
export type FirstPropFunction = {
    bgAColor: VariableProp['backgroundColor'],
    media: {
        name: keyof GlobalVariableSetting['breakpoints'],
        level: 'max' | 'min',
        value: InputProp,
    },
} & MediaF
export type StandLevel = 'none' | 'small' | 'medium' | 'large' | 'xlarge';
export type BaseCss = TRProp<TCssSelector, TCssProperty, VariableProp, AbbrProps, GlobalPropFunction>;
export type InputProp = TRProp<TCssSelector, TCssProperty, VariableProp, AbbrProps,
    GlobalPropFunction & GlobalProp & FirstPropFunction & { component?: string }>;
