import { buildTheme, buildThemeWithVariable, sort, TTheme, getPropertyValue, isPropertyValue } from '../theme';
const a = { colorT: { color: { name: 'red', level: 'normal', kind: 'PaletteColor' } } };
import { success, failure } from 'mocoolka-fp/lib/Validation';
import {
    TColorInputTheme, ColorTTheme, TBGColorTheme, defaultColorTheme

} from '../color1';
export const defaultColorTheme1 = {
    properties: [{
        colorT: {
            main: { color: { name: 'first', level: 'normal', kind: 'StandColor' } },
            success: { color: { name: 'success', level: 'normal', kind: 'StandColor' } },
            warning: { color: { name: 'warning', level: 'normal', kind: 'StandColor' } },
            alert: { color: { name: 'alert', level: 'normal', kind: 'StandColor' } },
            accent: { color: { level: 'normal', kind: 'StandAccentColor' } },
            alt: { color: { name: 'light', level: 'full', kind: 'CommonColor' } },
            disabled: { color: { name: 'dark', level: 'large', kind: 'CommonColor' } },
            primary: { color: { name: 'dark', level: 'largeXXX', kind: 'CommonColor' } },
            secondary: { color: { name: 'dark', level: 'largeXX', kind: 'CommonColor' } },
        },
    }],
};

const colorT: ColorTTheme = {
    main: { color: { name: 'first', level: 'normal', kind: 'StandColor' } },
    success: { color: { name: 'success', level: 'normal', kind: 'StandColor' } },
    warning: { color: { name: 'warning', level: 'normal', kind: 'StandColor' } },
    alert: { color: { name: 'alert', level: 'normal', kind: 'StandColor' } },
    accent: { color: { level: 'normal', kind: 'StandAccentColor' } },
    alt: { color: { name: 'light', level: 'full', kind: 'CommonColor' } },
    disabled: { color: { name: 'dark', level: 'large', kind: 'CommonColor' } },
    primary: { color: { name: 'dark', level: 'largeXXX', kind: 'CommonColor' } },
    secondary: { color: { name: 'dark', level: 'largeXX', kind: 'CommonColor' } },
};
const bgColorT: TBGColorTheme = {
    main: {
        colorT: 'primary',
        backgroundColor: { name: 'first', level: 'normal', kind: 'StandColor' },
    },
    success: {
        colorT: 'primary',
        backgroundColor: { name: 'success', level: 'normal', kind: 'StandColor' },
    },
    warning: {
        colorT: 'primary',
        backgroundColor: { name: 'warning', level: 'normal', kind: 'StandColor' },
    },
    alert: {
        colorT: 'primary',
        backgroundColor: { name: 'alert', level: 'normal', kind: 'StandColor' },
    },
    accent: {
        colorT: 'primary',
        backgroundColor: { level: 'normal', kind: 'StandAccentColor' },
    },
    alt: {
        colorT: 'primary',
        backgroundColor: { name: 'light', level: 'full', kind: 'CommonColor' },
    },
    disabled: {
        colorT: 'primary',
        backgroundColor: { name: 'dark', level: 'large', kind: 'CommonColor' },
    },
    primary: {
        colorT: 'primary',
        backgroundColor: { name: 'dark', level: 'largeXXX', kind: 'CommonColor' },
    },
    secondary: {
        colorT: 'primary',
        backgroundColor: { name: 'dark', level: 'largeXX', kind: 'CommonColor' },
    },
};
export const defaultColorInputTheme: TColorInputTheme = {
    colorT,
    bgColorT,
};
const defaultTheme: TTheme = Object.assign({}, defaultColorTheme,
     { properties: defaultColorInputTheme , components: {}});
describe('theme', () => {
    it('isPropertyValue', () => {
        expect(isPropertyValue('colorT', 'main')(buildTheme())).toEqual(true);
        expect(isPropertyValue('colorT', 'q')(buildTheme())).toEqual(false);
        expect(isPropertyValue('a', 'q')(buildTheme())).toEqual(false);
    });
    it('getPropertyValue', () => {
        expect(getPropertyValue('colorT', 'main')(buildTheme())).toEqual({ color: '#009688' });
    });
    it('sort success', () => {
        const r = sort({ a: { b: 1, c: { s: { c: 'b' } } }, c: { b: 3 }, d: { a: 1, b: { a: 'b' } } });
        expect(r).toEqual(
            success([{ a__b: 1 }, { c__b: 3 }, { a__c: { s: { c: 'b' } } }, { d__a: 1 }, { d__b: { a: 'b' } }]));
    });
    it('sort failure simply', () => {
        const r = sort({ a: { b: 1, c: { c: 'b', a: 'c' } } });
        expect(r).toEqual(
            failure('recursions :a__c'));
    });
    it('sort failure both', () => {
        const r = sort({ a: { b: 1, c: { c: 'b' } }, c: { b: { s: { a: 'c' } } } });
        expect(r).toEqual(
            failure('recursions :c__b a__c'));
    });
    it('buildPropertyTheme with simply', () => {
        expect(buildThemeWithVariable(a, defaultTheme, {})).toEqual(
            { colorT: { color: '#f44336' } });
    });
    it('buildPropertyTheme with array', () => {
        expect(buildThemeWithVariable(defaultColorTheme1, defaultTheme, {})).toEqual(
            {
                properties: [{
                    colorT: {
                        accent: { color: '#f50057' },
                        alert: { color: '#f44336' },
                        alt: { color: 'rgb(255, 255, 255)' },
                        disabled: { color: 'rgba(0, 0, 0, 0.38)' },
                        main: { color: '#009688' },
                        primary: { color: 'rgba(0, 0, 0, 0.87)' },
                        secondary: { color: 'rgba(0, 0, 0, 0.54)' },
                        success: { color: '#4caf50' },
                        warning: { color: '#ffeb3b' },
                    },
                }],
            });
    });
    it('buildTheme with defaultTheme', () => {
        expect(buildTheme(defaultTheme).properties).toEqual(
            {
                bgColorT__accent: { backgroundColor: '#f50057', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__alert: { backgroundColor: '#f44336', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__alt: { backgroundColor: 'rgb(255, 255, 255)', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__disabled: { backgroundColor: 'rgba(0, 0, 0, 0.38)', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__main: { backgroundColor: '#009688', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__primary: { backgroundColor: 'rgba(0, 0, 0, 0.87)', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__secondary: { backgroundColor: 'rgba(0, 0, 0, 0.54)', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__success: { backgroundColor: '#4caf50', color: 'rgba(0, 0, 0, 0.87)' },
                bgColorT__warning: { backgroundColor: '#ffeb3b', color: 'rgba(0, 0, 0, 0.87)' },
                colorT__accent: { color: '#f50057' }, colorT__alert: { color: '#f44336' },
                colorT__alt: { color: 'rgb(255, 255, 255)' },
                colorT__disabled: { color: 'rgba(0, 0, 0, 0.38)' },
                colorT__main: { color: '#009688' },
                colorT__primary: { color: 'rgba(0, 0, 0, 0.87)' },
                colorT__secondary: { color: 'rgba(0, 0, 0, 0.54)' },
                colorT__success: { color: '#4caf50' },
                colorT__warning: { color: '#ffeb3b' },
            });
    });
});
