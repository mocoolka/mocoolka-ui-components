import {
    getVariableValue, isNodeValue
} from '../get';
import { defaultColorPaletteVariable as  defaultTheme } from '../value';
describe('get palette theme variable value', () => {
    it('PaletteColor', () => {
        expect(getVariableValue({ name: 'red', level: '500', kind: 'PaletteColor' })(defaultTheme)).toEqual(
            defaultTheme.palette.variable.colorPalette.red['500']);
        expect(getVariableValue({ name: 'red', level: '800', kind: 'PaletteColor' })(defaultTheme)).toEqual(
            defaultTheme.palette.variable.colorPalette.red['800']);
    });
    it('PaletteAccentColor', () => {
        expect(getVariableValue({ name: 'red', level: 'A400', kind: 'PaletteAccentColor' })(defaultTheme)).toEqual(
            defaultTheme.palette.variable.colorPalette.red.A400);
    });
    it('PaletteCommonColor', () => {
        expect(getVariableValue({ name: 'dark', kind: 'PaletteCommonColor' })(defaultTheme)).toEqual(
            defaultTheme.palette.variable.commonPalette.dark);
    });
    it('PaletteMonoColor', () => {
        expect(getVariableValue({ name: 'grey', level: '800', kind: 'PaletteMonoColor' })(defaultTheme)).toEqual(
            defaultTheme.palette.variable.monoPalette.grey['800']);
    });
});
describe('valid palette theme node', () => {
    it('correct', () => {
        expect(isNodeValue({ name: 'red', level: '500', kind: 'PaletteColor' })).toEqual(true);
        expect(isNodeValue({ name: 'red', level: 'A400', kind: 'PaletteAccentColor' })).toEqual(true);
        expect(isNodeValue({ name: 'dark', kind: 'PaletteCommonColor' })).toEqual(true);
        expect(isNodeValue({ name: 'grey', level: '800', kind: 'PaletteMonoColor' })).toEqual(true);
    });
    it('failure', () => {
        expect(isNodeValue({ name: 'red', level: '1500', kind: 'PaletteColor1' })).toEqual(false);
        expect(isNodeValue(null)).toEqual(false);
        expect(isNodeValue(1)).toEqual(false);
    });
});
