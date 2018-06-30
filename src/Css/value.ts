import M1 from './baseValue';
/* import * as t from './type';
import * as variable from './variable'; */
import { merge } from 'mocoolka-fp/lib/object';
import {
    DefaultBackgroundSetting, BackgroundSetting, DefaultTransformSetting,
    TransformSetting, DefaultTransitionSetting, TransitionSetting,
    GlobalPropFunction, InputProp, GlobalProp, FirstPropFunction,
    BreakPointsValue
} from './type';
import { GlobalVariable } from './variable/global/type'
import ColorF from './variable/color/utils'
import { withDefaultsF } from 'mocoolka-fp/lib/object';
import { variable } from './variable';
const response =
    (name: FirstPropFunction['media']['name'], level: FirstPropFunction['media']['level']) =>
        (value: BreakPointsValue) => {
            return ({
                media: ({
                    level,
                    name,
                    value: {
                        mkstyle: {
                            width: `${(value / 12) * 100}%`,
                        },
                    },
                }),
            });
        };

export const minSM = response('sm', 'min');
export const minMD = response('md', 'min');
export const minLG = response('lg', 'min');
export const minXL = response('xl', 'min');
const responseWidth = (value: FirstPropFunction['sm']) => ({ mkstyle: { width: `${(value / 12) * 100}%` } });
const defaultTransitionSetting: DefaultTransitionSetting = {
    duration: 'shorter',
    ease: 'easeInOut',
    delay: 'none',
};
const inherit = (name: string) => ({ mkstyle: { [name]: 'inherit' } });
export const getForeground = (bgColor: FirstPropFunction['bgAColor']) => (theme) => {

    const value = variable.isNodeValue(bgColor) ? variable.getVariableValue(bgColor)(theme) : bgColor;
    return ColorF.isDark(value) ? ({
        color: variable.getVariableValue({ name: 'light', level: 'full', kind: 'ColorCommon' })(theme),
        backgroundColor: value,
    }) : ({
        color: variable.getVariableValue({ name: 'dark', level: 'largeXXX', kind: 'ColorCommon' })(theme),
        backgroundColor: value,
    })

}
const media = (a: FirstPropFunction['media']) => (v: GlobalVariable) => {
    const value = variable.getVariableValue({
        kind: 'breakpoints',
        level: a.name,
    })(v as any) as number;
    const vValue = a.level === 'max' ? value : value + 1;
    return ({
        selector: [{
            name: `@media screen and (${a.level === 'max' ? 'max' : 'min'}-width: ${vValue}px)`,
            value: a.value,
        }],
    });

};
const M2 = M1.addProps<{}, FirstPropFunction>({

}, {
        bgAColor: getForeground,
        media: media,
        sm: responseWidth,
        md: minSM,
        lg: minMD,
        xl: minLG,
        smSetting: (value: InputProp) => media({ name: 'sm', level: 'max', value }),
        mdSetting: (value: InputProp) => media({ name: 'md', level: 'max', value }),
        xlSetting: (value: InputProp) => media({ name: 'xl', level: 'max', value }),
        lgSetting: (value: InputProp) => media({ name: 'lg', level: 'max', value }),
        smMinSetting: (value: InputProp) => media({ name: 'sm', level: 'min', value }),
        mdMinSetting: (value: InputProp) => media({ name: 'md', level: 'min', value }),
        xlMinSetting: (value: InputProp) => media({ name: 'xl', level: 'min', value }),
        lgMinSetting: (value: InputProp) => media({ name: 'lg', level: 'min', value }),
    });
const paletteColor = (propName: string) => (colorName) => ({ mkstyle: { [propName]: { name: colorName, level: 'normal', kind: 'ColorPaletteType' } } });
const palette = ['red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange'];
type paletteType = any;
const paletteList = (propName: string) => palette.map(paletteColor(propName)).reduce(a => (Object.assign({}, { [propName]: a })), {}) as
    {
        red: paletteType,
        pink: paletteType,
        purple: paletteType,
        deepPurple: paletteType,
        indigo: paletteType,
        blue: paletteType,
        lightBlue: paletteType,
        cyan: paletteType,
        teal: paletteType,
        green: paletteType,
        lightGreen: paletteType,
        lime: paletteType,
        yellow: paletteType,
        amber: paletteType,
        orange: paletteType,
        deepOrange: paletteType
    };
const M = M2.addProps<GlobalProp, GlobalPropFunction>({
    color: {
        main: { mkstyle: { color: { name: 'first', level: 'normal', kind: 'Color' } } },
        success: { mkstyle: { color: { name: 'success', level: 'normal', kind: 'Color' } } },
        warning: { mkstyle: { color: { name: 'warning', level: 'normal', kind: 'Color' } } },
        alert: { mkstyle: { color: { name: 'alert', level: 'normal', kind: 'Color' } } },
        accent: { mkstyle: { color: { level: 'normal', kind: 'ColorAccent' } } },
        alt: { mkstyle: { color: { name: 'light', level: 'full', kind: 'ColorCommon' } } },
        disabled: { mkstyle: { color: { name: 'dark', level: 'large', kind: 'ColorCommon' } } },
        hint: { mkstyle: { color: { name: 'dark', level: 'large', kind: 'ColorCommon' } } },
        primary: { mkstyle: { color: { name: 'dark', level: 'largeXXX', kind: 'ColorCommon' } } },
        secondary: { mkstyle: { color: { name: 'dark', level: 'largeXX', kind: 'ColorCommon' } } },
        inherit: inherit('color'),
        ...paletteList('color'),
    },
    borderColor: {
        main: { mkstyle: { color: { name: 'first', level: 'normal', kind: 'Color' } } },
        success: { mkstyle: { color: { name: 'success', level: 'normal', kind: 'Color' } } },
        warning: { mkstyle: { color: { name: 'warning', level: 'normal', kind: 'Color' } } },
        alert: { mkstyle: { color: { name: 'alert', level: 'normal', kind: 'Color' } } },
        accent: { mkstyle: { color: { level: 'normal', kind: 'ColorAccent' } } },
        alt: { mkstyle: { color: { name: 'light', level: 'full', kind: 'ColorCommon' } } },
        disabled: { mkstyle: { color: { name: 'dark', level: 'large', kind: 'ColorCommon' } } },
        hint: { mkstyle: { color: { name: 'dark', level: 'large', kind: 'ColorCommon' } } },
        primary: { mkstyle: { color: { name: 'dark', level: 'largeXXX', kind: 'ColorCommon' } } },
        secondary: { mkstyle: { color: { name: 'dark', level: 'largeXX', kind: 'ColorCommon' } } },
        inherit: inherit('color'),
        ...paletteList('color'),
    },
    bgColor: {
        transparent: {
            mkstyle: {
                backgroundColor: 'transparent',
            },
        },
        paper: {
            bgAColor: { name: 'light', level: 'full', kind: 'ColorCommon' },
        },
        content: {
            bgAColor: { name: 'grey', level: 50, kind: 'PaletteMonoColor' },
        },
        divider: {
            mkstyle: { backgroundColor: { name: 'dark', level: 'small', kind: 'ColorCommon' } },
        },
        main: {
            bgAColor: { name: 'first', level: 'normal', kind: 'Color' },
        },
        success: {
            bgAColor: { name: 'success', level: 'normal', kind: 'Color' },
        },
        warning: {
            bgAColor: { name: 'warning', level: 'normal', kind: 'Color' },
        },
        alert: {
            bgAColor: { name: 'alert', level: 'normal', kind: 'Color' },
        },
        accent: {
            bgAColor: { level: 'normal', kind: 'ColorAccent' },
        },
        alt: {
            bgAColor: { name: 'light', level: 'full', kind: 'ColorCommon' },
        },
        disabled: {
            bgAColor: { name: 'dark', level: 'large', kind: 'ColorCommon' },

        },
        selected: {
            bgAColor: { name: 'grey', level: 200, kind: 'PaletteMonoColor' },

        },
        focus: {
            bgAColor: { name: 'grey', level: 300, kind: 'PaletteMonoColor' },

        },
        inherit: inherit('backgroundColor'),
        ...paletteList('bgAColor'),
    },

    border: {
        none: {
            mkstyle: { borderWidth: { kind: 'borderWidth', level: 'none' } },
        },
        bordered: {
            mkstyle: {
                borderStyle: 'solid',
                borderWidth: { kind: 'borderWidth', level: 'small' },
                borderColor: { name: 'grey', level: 300, kind: 'PaletteMonoColor' },
            },
        },
        top: {
            mkstyle: {
                borderTopStyle: 'solid',
                borderTopWidth: { kind: 'borderWidth', level: 'small' },
                borderTopColor: { name: 'grey', level: 300, kind: 'PaletteMonoColor' },
            },
        },
        bottom: {
            mkstyle: {
                borderBottomStyle: 'solid',
                borderBottomWidth: { kind: 'borderWidth', level: 'small' },
                borderBottomColor: { name: 'grey', level: 300, kind: 'PaletteMonoColor' },
            },
        },
        left: {
            mkstyle: {
                borderLeftStyle: 'solid',
                borderLeftWidth: { kind: 'borderWidth', level: 'small' },
                borderLeftColor: { name: 'grey', level: 300, kind: 'PaletteMonoColor' },
            },
        },
        right: {
            mkstyle: {
                borderRightStyle: 'solid',
                borderRightWidth: { kind: 'borderWidth', level: 'small' },
                borderRightColor: { name: 'grey', level: 300, kind: 'PaletteMonoColor' },
            },
        },
        topBar: {
            mkstyle: {
                borderTopStyle: 'solid',
                borderTopWidth: { kind: 'borderWidth', level: 'large' },
                borderTopColor: { name: 'first', level: 'normal', kind: 'Color' },
            },
        },
        bottomBar: {
            mkstyle: {
                borderBottomStyle: 'solid',
                borderBottomWidth: { kind: 'borderWidth', level: 'large' },
                borderBottomColor: { name: 'first', level: 'normal', kind: 'Color' },
            },
        },
        leftBar: {
            mkstyle: {
                borderLeftStyle: 'solid',
                borderLeftWidth: { kind: 'borderWidth', level: 'large' },
                borderLeftColor: { name: 'first', level: 'normal', kind: 'Color' },
            },
        },
        rightBar: {
            mkstyle: {
                borderRightStyle: 'solid',
                borderRightWidth: { kind: 'borderWidth', level: 'large' },
                borderRightColor: { name: 'first', level: 'normal', kind: 'Color' },
            },

        },
    },
    typography: {
        h1: {
            mkstyle: {
                fontWeight: { level: 'light', kind: 'fontWeight' },
                letterSpacing: '-.01562em',
                lineHeight: '6rem',
                fontSize: { level: 'h1', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        h2: {
            mkstyle: {
                fontWeight: { level: 'light', kind: 'fontWeight' },
                letterSpacing: '-.00833em',
                lineHeight: '3.75rem',
                fontSize: { level: 'h2', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        h3: {
            mkstyle: {
                fontWeight: { level: 'regular', kind: 'fontWeight' },
                letterSpacing: '0em',
                lineHeight: '3.125rem',
                fontSize: { level: 'h3', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        h4: {
            mkstyle: {
                fontWeight: { level: 'regular', kind: 'fontWeight' },
                letterSpacing: '.00735em',
                lineHeight: '2.5rem',
                fontSize: { level: 'h4', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        h5: {
            mkstyle: {
                fontWeight: { level: 'regular', kind: 'fontWeight' },
                letterSpacing: '0em',
                lineHeight: '2rem',
                fontSize: { level: 'h5', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        h6: {
            mkstyle: {
                fontWeight: { level: 'medium', kind: 'fontWeight' },
                letterSpacing: '.0125em',
                lineHeight: '2rem',
                fontSize: { level: 'h6', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        subtitle1: {
            mkstyle: {
                fontWeight: { level: 'regular', kind: 'fontWeight' },
                letterSpacing: '.00937em',
                lineHeight: '1.75rem',
                fontSize: { level: 'subtitle', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        subtitle2: {
            mkstyle: {
                fontWeight: { level: 'medium', kind: 'fontWeight' },
                letterSpacing: '.00714em',
                lineHeight: '1.375rem',
                fontSize: { level: 'p', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        body1: {
            mkstyle: {
                fontWeight: { level: 'regular', kind: 'fontWeight' },
                letterSpacing: '.03125em',
                lineHeight: '1.5rem',
                fontSize: { level: 'subtitle', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        body2: {
            mkstyle: {
                fontWeight: { level: 'regular', kind: 'fontWeight' },
                letterSpacing: '.01786em',
                lineHeight: '1.25rem',
                fontSize: { level: 'p', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        button: {
            mkstyle: {
                fontWeight: { level: 'medium', kind: 'fontWeight' },
                letterSpacing: '.08929em',
                lineHeight: '2.25rem',
                fontSize: { level: 'p', kind: 'fontSize' },
                textDecoration: 'none',
                textTransform: 'uppercase',
            },
        },
        caption: {
            mkstyle: {
                fontWeight: { level: 'regular', kind: 'fontWeight' },
                letterSpacing: '.03333em',
                lineHeight: '1.25rem',
                fontSize: { level: 'caption', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'inherit',
            },
        },
        overline: {
            mkstyle: {
                fontWeight: { level: 'medium', kind: 'fontWeight' },
                letterSpacing: '.16667em',
                lineHeight: '2rem',
                fontSize: { level: 'overline', kind: 'fontSize' },
                textDecoration: 'inherit',
                textTransform: 'uppercase',
            },
        },
    },
    fontSize: {
        h1: {
            mkstyle: {
                fontSize: { level: 'h1', kind: 'fontSize' },
            },
        },
        h2: {
            mkstyle: {
                fontSize: { level: 'h2', kind: 'fontSize' },
            },
        },
        h3: {
            mkstyle: {
                fontSize: { level: 'h3', kind: 'fontSize' },
            },
        },
        h4: {
            mkstyle: {
                fontSize: { level: 'h4', kind: 'fontSize' },
            },
        },
        h5: {
            mkstyle: {
                fontSize: { level: 'h5', kind: 'fontSize' },
            },
        },
        h6: {
            mkstyle: {
                fontSize: { level: 'h6', kind: 'fontSize' },
            },
        },
        subtitle: {
            mkstyle: {
                fontSize: { level: 'subtitle', kind: 'fontSize' },
            },
        },
        p: {
            mkstyle: {
                fontSize: { level: 'p', kind: 'fontSize' },
            },
        },
        caption: {
            mkstyle: {
                fontSize: { level: 'caption', kind: 'fontSize' },
            },
        },
        overline: {
            mkstyle: {
                fontSize: { level: 'overline', kind: 'fontSize' },
            },
        },
        inherit: inherit('fontSize'),
    },
    layout: {
        center: {
            mkstyle: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        column: {
            mkstyle: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
            },
        },
        row: {
            mkstyle: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            },
        },
        inlineCenter: {
            mkstyle: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        inlineRow: {
            mkstyle: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        inlineColumn: {
            mkstyle: {
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'stretch',
            },
        },
    },
    position: {
        fixedLeftTop: {
            mkstyle: {
                position: 'fixed',
                left: '0',
                top: '0',
            },
        },
        fixedRightTop: {
            mkstyle: {
                position: 'fixed',
                top: '0',
                right: '0',
            },
        },
        fixedTop: {
            mkstyle: {
                position: 'fixed',
                left: '0',
                top: '0',
                right: '0',
            },
        },
    },
    align: {
        childCenterFlex: {
            mkstyle: {
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        childCenter: {

            selector: [{
                name: '& > *',
                value: {
                    mkstyle: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate3d(-50%, -50%, 0)',
                    },
                },
            }],

        },
        imageCenter: {
            mkstyle: {
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            },
        },
        center: {
            mkstyle: {
                margin: 'auto',
            },
        },
    },
    width: {
        full: {
            mkstyle: {
                width: '100%',
                maxWidth: '100%',
            },
        },
        content: {
            mkstyle: { width: { kind: 'width', level: 'content' }},
            lgSetting:{
                mkstyle: { width: { kind: 'width', level: 'contentlg' } },
            },   
            mdSetting:{
                mkstyle: { width: { kind: 'width', level: 'contentmd' } },
            },  
            smSetting:{
                mkstyle: { 
                    width: { kind: 'width', level: 'contentsm' } 
                },
            },
        },
        nav: {
            mkstyle: { width: { kind: 'width', level: 'nav' } },
        },
        gutter: {
            mkstyle: { width: { kind: 'width', level: 'gutter' } },
        },
        third: {
            mkstyle: { width: { kind: 'width', level: 'contentsm' } },
        },
        inherit: inherit('width'),
    },
    box: {
        container: {
            mkstyle: { marginV: { kind: 'bmodule', level: 2 } },
        },
        panel: {
            mkstyle: {
                marginV: { kind: 'bmodule', level: 2 },
                paddingH: { kind: 'bmodule', level: 2 },
            },
        },
        cell: {
            mkstyle: {
                lineHeight: '24px',
                padding: '12px 12px 12px 24px',
            },
        },
    },
    height: {
        full: {
            mkstyle: {
                minHeight: '100vh',
                maxHeight: '100vh',
            },
        },
        inherit: inherit('height'),
    },
    bgSize: {
        none: {
            mkstyle: { backgroundSize: 0 },
        },
        small: {
            mkstyle: { backgroundSize: 18 },
        },
        medium: {
            mkstyle: { backgroundSize: 24 },
        },
        large: {
            mkstyle: { backgroundSize: 36 },
        },
        xlarge: {
            mkstyle: { backgroundSize: 48 },
        },
        inherit: inherit('backgroundSize'),
    },
    squareSize: {
        none: {
            mkstyle: { backgroundSize: 0 },
        },
        small: {
            mkstyle: {
                width: 18,
                height: 18,
            },
        },
        medium: {
            mkstyle: {
                width: 24,
                height: 24,
            },
        },
        large: {
            mkstyle: {
                width: 36,
                height: 36,
            },
        },
        xlarge: {
            mkstyle: {
                width: 48,
                height: 48,
            },
        },
    },
    visibility: {
        hidden: {
            mkstyle: {
                visibility: 'hidden',
            },
        },
        hiddenWidth: {
            mkstyle: {
                width: 0,
            },
        },
        hiddenHeight: {
            mkstyle: {
                height: 0,
            },
        },
        none: {
            mkstyle: {
                display: 'none',
                visibility: 'hidden',
            },
        },
        elementInvisible: {
            mkstyle: {
                position: 'fixed',
                opacity: '0',
                pointerEvents: 'none',
                margin: '0',
                padding: '0',
                width: '0',
                height: '0',
            },
        },
        inherit: inherit('visibility'),
    },
    flip: {
        horizontal: {
            mkstyle: { transform: 'scale(-1, 1)' },
        },
        vertical: {
            mkstyle: { transform: 'scale(1, -1)' },
        },
    },
    scrollBar: {
        none: {
            mkstyle: {
                overflowX: 'hidden',
                overflowY: 'hidden',
            },
        },
        horizontal: {
            mkstyle: {
                overflowX: 'auto',
                overflowY: 'hidden',
            },
        },
        vertical: {
            mkstyle: {
                overflowX: 'hidden',
                overflowY: 'auto',
            },
        },
        both: {
            mkstyle: {
                overflowX: 'auto',
                overflowY: 'auto',
            },
        },
    },
    fontFamily: {
        sansSerif: {
            mkstyle: {
                fontFamily: { kind: 'fontFamily', level: 'sansSerif' },
            },
        },
        serif: {
            mkstyle: {
                fontFamily: { kind: 'fontFamily', level: 'serif' },
            },
        },
        monospace: {
            mkstyle: {
                fontFamily: { kind: 'fontFamily', level: 'monospace' },
            },
        },
        inherit: inherit('fontFamily'),
    },
    fontWeight: {
        thin: {
            mkstyle: {
                fontWeight: { kind: 'fontWeight', level: 'thin' },
            },
        },
        light: {
            mkstyle: {
                fontWeight: { kind: 'fontWeight', level: 'light' },
            },
        },
        regular: {
            mkstyle: {
                fontWeight: { kind: 'fontWeight', level: 'regular' },
            },
        },
        medium: {
            mkstyle: {
                fontWeight: { kind: 'fontWeight', level: 'medium' },
            },
        },
        bold: {
            mkstyle: {
                fontWeight: { kind: 'fontWeight', level: 'bold' },
            },
        },
        black: {
            mkstyle: {
                fontWeight: { kind: 'fontWeight', level: 'black' },
            },
        },
        inherit: inherit('fontWeight'),
    },
    borderRadius: {
        none: {
            mkstyle: {
                borderRadius: { kind: 'borderRadius', level: 'none' },
            },
        },
        small: {
            mkstyle: {
                borderRadius: { kind: 'borderRadius', level: 'small' },
            },
        },
        medium: {
            mkstyle: {
                borderRadius: { kind: 'borderRadius', level: 'medium' },
            },
        },
        large: {
            mkstyle: {
                borderRadius: { kind: 'borderRadius', level: 'large' },
            },
        },
        largeX: {
            mkstyle: {
                borderRadius: { kind: 'borderRadius', level: 'largeX' },
            },
        },
        inherit: inherit('borderRadius'),
    },
    borderWidth: {
        none: {
            mkstyle: {
                borderWidth: { kind: 'borderWidth', level: 'none' },
            },
        },
        small: {
            mkstyle: {
                borderWidth: { kind: 'borderWidth', level: 'small' },
            },
        },
        medium: {
            mkstyle: {
                borderWidth: { kind: 'borderWidth', level: 'medium' },
            },
        },
        large: {
            mkstyle: {
                borderWidth: { kind: 'borderWidth', level: 'large' },
            },
        },
        largeX: {
            mkstyle: {
                borderWidth: { kind: 'borderWidth', level: 'largeX' },
            },
        },
        inherit: inherit('borderWidth'),
    },
    zIndex: {
        moon: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'moon' },
            },
        },
        tooltip: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'tooltip' },
            },
        },
        alertDesktop: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'alertDesktop' },
            },
        },
        popup: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'popup' },
            },
        },
        modal: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'modal' },
            },
        },
        overlay: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'overlay' },
            },
        },
        dropdown: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'dropdown' },
            },
        },
        alertMobile: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'alertMobile' },
            },
        },
        nav: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'nav' },
            },
        },
        bar: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'bar' },
            },
        },
        base: {
            mkstyle: {
                zIndex: { kind: 'zIndex', level: 'base' },
            },
        },
    },
    semantic: {
        em: {
            mkstyle: {
                fontStyle: 'italic',
            },
        },
        strong: {
            mkstyle: {
                fontWeight: { kind: 'fontWeight', level: 'bold' },
            },
        },
    },
    columns3: {
        two: {
            selector: [{
                name: '&>div:nth-child(1)',
                value: {
                    mkstyle: {
                        marginRight: 40,
                        width: 360,
                        verticalAlign: 'top',
                        paddingBottom: 20,
                        display: 'inline-block !important',
                    },
                },
            }, {
                name: '&>div:nth-child(2)',
                value: {
                    mkstyle: {
                        display: 'inline-block !important',
                        width: 760,
                        verticalAlign: 'top !important',
                        paddingBottom: 20,
                    },
                },
            }],
        },
        three: {
            selector: [{
                name: '&>div',
                value: {
                    mkstyle: {
                        marginRight: 40,
                        width: 360,
                        verticalAlign: 'top !important',
                        paddingBottom: 20,
                        display: 'inline-block !important',
                    },
                },
            }, {
                name: '&>div:nth-child(3)',
                value: {
                    mkstyle: {
                        marginRight: '0px !important',
                    },
                },
            }],
        },
    },

}, {
        backgroundImage: withDefaultsF<DefaultBackgroundSetting, BackgroundSetting, any>
            ({ size: 'auto', positionX: 'center', positionY: 'center' })((v): any => ({
                mkstyle: {
                    backgroundImage: `url('${v.url}')`,
                    backgroundPosition: `${v.positionX || 'center'} ${v.positionY || 'center'}`,
                    backgroundSize: `${v.size}`,
                    backgroundRepeat: `no-repeat`,
                },
            })),
        transform: withDefaultsF<DefaultTransformSetting, TransformSetting, any>
            ({ rotate: 0 })((v) => {
                let result = '';
                switch (v.mode) {
                    case 'horizontal':
                        result = 'scale(-1, 1)';
                        break;
                    case 'vertical':
                        result = 'scale(1, -1)';
                        break;
                    case 'rotate':
                        result = `rotate(${v.rotate}deg)`;
                }
                return {
                    mkstyle: { transform: result },
                };
            }),
        transition: withDefaultsF<DefaultTransitionSetting, TransitionSetting, any>
            (defaultTransitionSetting)(v => (v1: GlobalVariable) => {
                const duration = variable.getVariableValue({
                    kind: 'duration',
                    level: v.duration,
                })(v1 as any) as number;
                const ease = variable.getVariableValue({
                    kind: 'ease',
                    level: v.ease,
                })(v1 as any);
                const delay = variable.getVariableValue({
                    kind: 'duration',
                    level: v.delay,
                })(v1 as any) as number;
                return ({
                    mkstyle: {
                        transitionProperty: `${v.property}`,
                        transitionDuration: `${duration}ms`,
                        transitionTimingFunction: `${ease}`,
                        transitionDelay: `${delay}ms`,
                    },
                });
            }),
        boxShadow: (a: GlobalPropFunction['boxShadow']) => (v: GlobalVariable) => {
            const value = variable.getVariableValue({
                kind: 'shadows',
                level: a,
            })(v as any) as number;
            return { mkstyle: { boxShadow: value } };
        },
        rotate: (a: number) => ({ mkstyle: { transform: `rotate(${a}deg)` } }),
        rounded: () => ({ mkstyle: { borderRadius: '50%' } }),
        noWrap: (a: boolean) => a ? ({
            mkstyle: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
        }) : {},
        paragraph: (a: boolean) => a ? ({
            mkstyle: {
                marginBottom: '0.35em',
            },
        }) : {},
        gutterBottom: (a: boolean) => a ? ({
            mkstyle: {
                marginBottom: 20,
            },
        }) : {},
        underlined: (a: boolean) => a ? ({
            mkstyle: {
                borderBottomStyle: 'dotted',
                borderBottomWidth: { kind: 'borderWidth', level: 'small' },
                borderBottomColor: { name: 'grey', level: 300, kind: 'PaletteMonoColor' },
            },
        }) : {},
        after: (a: InputProp) => ({
            selector: [{
                name: '&::after',
                value: merge({}, a, {
                    mkstyle: {
                        content: '\'\'',
                    },
                }),
            }],
        }),
        lineHeight: (a: number) => ({
            mkstyle: {
                lineHeight: a * 20,
            },
        }),


        textTransform: (a: GlobalPropFunction['textTransform']) => ({
            mkstyle: {
                textTransform: a,
            },
        }),
        textAlign: (a: GlobalPropFunction['textAlign']) => ({
            mkstyle: {
                textAlign: a,
            },
        }),
        direction: (a: GlobalPropFunction['direction']) => ({
            mkstyle: {
                direction: a,
            },
        }),
        textDecoration: (a: GlobalPropFunction['textDecoration']) => ({
            mkstyle: {
                textDecoration: a,
            },
        }),
        flexDirection: (a: GlobalPropFunction['flexDirection']) => ({
            mkstyle: {
                flexDirection: a,
            },
        }),
        flexWrap: (a: GlobalPropFunction['flexWrap']) => ({
            mkstyle: {
                flexWrap: a,
            },
        }),
        justifyContent: (a: GlobalPropFunction['justifyContent']) => ({
            mkstyle: {
                justifyContent: a,
            },
        }),
        alignItems: (a: GlobalPropFunction['alignItems']) => ({
            mkstyle: {
                alignItems: a,
            },
        }),
        order: (a: GlobalPropFunction['order']) => ({
            mkstyle: {
                order: a,
            },
        }),
    }

);

export default M;

/* const boxShadow = (elevation: number = 0): any => {
    const color = 'rgba(0, 0, 0, 0.1)';
    const blur1 = 2;
    const offset1 = 0;
    const x1 = 0;
    const y1 = blur1 / 2;

    const blur2 = (blur1 + 1) * Math.abs(elevation);
    const offset2 = (offset1 + 0.25) * Math.abs(elevation);
    const x2 = 0;
    const y2 = (y1 + 0.5) * elevation;

    const blur3 = blur2 + 1;
    const offset3 = offset2 + 0.25;
    const x3 = 0;
    const y3 = y2 + 0.5;

    const shadow1 = `${x1}px ${y1}px ${blur1}px ${offset1}px ${color}`;
    const shadow2 = `${x2}px ${y2}px ${blur2}px ${offset2}px ${color}`;
    const shadow3 = `${x3}px ${y3}px ${blur3}px ${offset3}px ${color}`;

    return { mkstyle: { boxShadow: `${shadow1}, ${shadow2}, ${shadow3}` } };
}; */
