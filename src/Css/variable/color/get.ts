import {
    ColorVariable, ColorNodeValue,
    ColorType, ColorMonoType, ColorAccentType, ColorCommonType, ColorPaletteType
} from './type';

import { getVariableValue as paletteGetVariableValue } from '../palette/get';
import { isString } from 'mocoolka-fp/lib/predicate';
import { alpha } from './utils';

export const nodeKinds = ['Color', 'ColorAccent', 'ColorMono', 'ColorCommon'];
export const isNodeValue = (a: any): a is ColorNodeValue => !!(a && a.kind && nodeKinds.includes(a.kind));
export const getVariableValue = (node: ColorNodeValue) =>
    (theme: ColorVariable): string | number => {
        switch (node.kind) {
            case 'Color':
                return getColor(node)(theme);
            case 'ColorAccent':
                return getAccentColor(node)(theme);
            case 'ColorMono':
                return getColorMono(node)(theme);
            case 'ColorCommon':
                return getColorCommon(node)(theme);
            case 'ColorPaletteType':
                return getColorPalette(node)(theme);
        }
    };
const getColor = (a: ColorType) =>
    (theme: ColorVariable): string | number =>
        paletteGetVariableValue({
            name: theme.color.variable.colors[a.name],
            level: theme.color.variable.colorLevel[a.level ? a.level : 'normal'],
            kind: 'PaletteColor',
        })(theme);
const getColorPalette = (a: ColorPaletteType) =>
    (theme: ColorVariable): string | number =>
        paletteGetVariableValue({
            name: a.name,
            level: theme.color.variable.colorLevel[a.level ? a.level : 'normal'],
            kind: 'PaletteColor',
        })(theme);
const getAccentColor = (a: ColorAccentType) =>
    (theme: ColorVariable): string | number =>
        paletteGetVariableValue({
            name: theme.color.variable.accent,
            level: theme.color.variable.accentLevel[a.level ? a.level : 'normal'],
            kind: 'PaletteAccentColor',
        })(theme);
const getColorMono = (a: ColorMonoType) =>
    (theme: ColorVariable): string | number =>
        paletteGetVariableValue({
            name: theme.color.variable.mono,
            level: a.level ? a.level : 500,
            kind: 'PaletteMonoColor',
        })(theme);

const getColorCommon = (a: ColorCommonType) =>
    (theme: ColorVariable): string | number => {
        const result = paletteGetVariableValue({
            name: a.name,
            kind: 'PaletteCommonColor',
        })(theme);
        const level = a.level ? a.level : 'full';
        if (a.name === 'transparent' || level === 'full') {
            return result;
        }
        const opacity = theme.color.variable.opacity[level];
        return isString(result) ? alpha(opacity)(result) : result;
    };
