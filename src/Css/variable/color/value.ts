import { ColorOpacity, AccentTemplate, ColorTemplate, ColorsTemplate, ColorVariable } from './type';
import {variable} from '../palette';
const dark: ColorOpacity = {
    full: 1,
    largeXXX: 0.87,
    largeXX: 0.54,
    largeX: 0.42,
    large: 0.38,
    medium: 0.26,
    small: 0.12,
    mini: 0.075,
};
const light: ColorOpacity = {
    full: 1,
    largeXXX: 0.87,
    largeXX: 0.7,
    largeX: 0.5,
    large: 0.4,
    medium: 0.3,
    small: 0.12,
    mini: 0.075,
};
const colorLevel: ColorTemplate = {
    light: 300,
    normal: 500,
    dark: 700,
};
const accentLevel: AccentTemplate = {
    light: 'A200',
    normal: 'A400',
    dark: 'A700',
};
const colors: ColorsTemplate = {
    first: 'teal',
    second: 'lime',
    success: 'green',
    info: 'lightBlue',
    warning: 'yellow',
    alert: 'red',
};

export const defaultVariableTheme: ColorVariable = {
    ...variable.variable,
    color: {
        variable: {
            colorLevel,
            accentLevel,
            colors,
            accent: 'pink',
            mono: 'grey',
            opacity: light,
        },
    },
};
export const darkTheme: ColorVariable = {
    ...variable.variable,
    color: {
        variable: {
            colorLevel,
            accentLevel,
            colors,
            accent: 'pink',
            mono: 'grey',
            opacity: dark,
        },
    },
};
