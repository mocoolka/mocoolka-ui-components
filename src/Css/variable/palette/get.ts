import {
    ColorPaletteVariable,  PaletteNodeValue, PaletteColorType,
     PaletteAccentColorType, PaletteMonoColorType, PaletteCommonColorType
} from './type';
export const nodeKinds = ['PaletteColor', 'PaletteAccentColor', 'PaletteMonoColor', 'PaletteCommonColor'];
export const isNodeValue = (a: any): a is PaletteNodeValue => !!(a && a.kind && nodeKinds.indexOf(a.kind) >= 0);
export const getVariableValue = (node: PaletteNodeValue) =>
    (theme: ColorPaletteVariable): string | number => {
        switch (node.kind) {
            case 'PaletteColor':
                return getPaletteColor(node)(theme);
            case 'PaletteAccentColor':
                return getPaletteAccentColor(node)(theme);
            case 'PaletteMonoColor':
                return getStandMonoColor(node)(theme);
            case 'PaletteCommonColor':
                return getCommonColor(node)(theme);
        }
    };

const getPaletteColor = (a: PaletteColorType) =>
    ({ palette: { variable: { colorPalette: theme } } }: ColorPaletteVariable): string | number =>
        theme[a.name][a.level];
const getPaletteAccentColor = (a: PaletteAccentColorType) =>
    ({ palette: { variable: { colorPalette: theme } } }: ColorPaletteVariable): string | number =>
        theme[a.name][a.level];
const getStandMonoColor = (a: PaletteMonoColorType) =>
    ({ palette: { variable: { monoPalette: theme } } }: ColorPaletteVariable): string | number =>
        theme[a.name][a.level];
const getCommonColor = (a: PaletteCommonColorType) =>
    ({ palette: { variable: { commonPalette: theme } } }: ColorPaletteVariable): string | number =>
        theme[a.name];
