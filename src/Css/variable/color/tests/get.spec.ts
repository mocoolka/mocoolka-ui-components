import {
    getVariableValue, isNodeValue
} from '../get';
import { merge } from 'mocoolka-fp/lib/object';
import { defaultVariableTheme } from '../value';
import { defaultColorPaletteVariable as paletteTheme } from '../../palette/value';
const theme = merge({}, defaultVariableTheme, paletteTheme);
describe('get palette theme variable value', () => {
    it('Color', () => {
        expect(getVariableValue({ name: 'first', level: 'normal', kind: 'Color' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.teal['500']);
        expect(getVariableValue({ name: 'first', kind: 'Color' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.teal['500']);
        expect(getVariableValue({ name: 'first', level: 'dark', kind: 'Color' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.teal['700']);
        expect(getVariableValue({ name: 'first', level: 'light', kind: 'Color' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.teal['300']);
    });
    it('ColorAccent', () => {
        expect(getVariableValue({ level: 'normal', kind: 'ColorAccent' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.pink.A400);
        expect(getVariableValue({ kind: 'ColorAccent' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.pink.A400);
        expect(getVariableValue({ level: 'dark', kind: 'ColorAccent' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.pink.A700);
        expect(getVariableValue({ level: 'light', kind: 'ColorAccent' })(theme)).toEqual(
            paletteTheme.palette.variable.colorPalette.pink.A200);
    });
    it('PaletteCommonColor', () => {
        expect(getVariableValue({ level: 500, kind: 'ColorMono' })(theme)).toEqual(
            paletteTheme.palette.variable.monoPalette.grey['500']);
        expect(getVariableValue({ kind: 'ColorMono' })(theme)).toEqual(
            paletteTheme.palette.variable.monoPalette.grey['500']);
        expect(getVariableValue({ level: 700, kind: 'ColorMono' })(theme)).toEqual(
            paletteTheme.palette.variable.monoPalette.grey['700']);
        expect(getVariableValue({ level: 900, kind: 'ColorMono' })(theme)).toEqual(
            paletteTheme.palette.variable.monoPalette.grey['900']);
    });
    it('PaletteCommonColor', () => {
        expect(getVariableValue({ name: 'dark', level: 'largeXXX', kind: 'ColorCommon' })(theme)).toEqual(
            'rgba(0, 0, 0, 0.87)');
        expect(getVariableValue({ name: 'dark', kind: 'ColorCommon' })(theme)).toEqual(
            '#000');
        expect(getVariableValue({ name: 'dark', level: 'large', kind: 'ColorCommon' })(theme)).toEqual(
            'rgba(0, 0, 0, 0.4)');
    });
});
describe('valid palette theme node', () => {
    it('correct', () => {
        expect(isNodeValue({ name: 'dark', level: 'largeXXX', kind: 'ColorCommon' })).toEqual(true);
        expect(isNodeValue({ level: '500', kind: 'ColorMono' })).toEqual(true);
        expect(isNodeValue({ level: 'normal', kind: 'ColorAccent' })).toEqual(true);
        expect(isNodeValue({ name: 'first', level: 'normal', kind: 'Color' })).toEqual(true);
    });
    it('failure', () => {
        expect(isNodeValue({ name: 'first', level: 'normal', kind: 'Color1' })).toEqual(false);
        expect(isNodeValue(null)).toEqual(false);
        expect(isNodeValue(1)).toEqual(false);
    });
});
