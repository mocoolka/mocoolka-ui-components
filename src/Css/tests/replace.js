import { theme } from '../';
import { of } from '../../Module';
describe('using default css property and selector', () => {
    const outer = theme;
    it('get css property with replace props', () => {
        expect(outer.getterCss({})).toEqual({});
        expect(outer.getterCss({ color: 'red', marginH: 2 })).toEqual(
            { color: 'red', marginLeft: 2, marginRight: 2 });
        expect(outer.getterCss({ focus: { hover: { marginH: '2px' } } }))
            .toEqual({ focus: { hover: { marginLeft: '2px', marginRight: '2px' } } });
    });
});
describe('mix custmer css with property and selector ', () => {
    const theme1 = of<
        'active', {
            bgColor?: string, paddingLeft?: number | string,
            paddingRight?: number | string
        }, { PH?: number }>({
            cssSelector: ['active'],
            cssProperty: [{
                propertyName: 'paddingLeft',
                cssName: 'padding-left',
                unitName: 'px',
            }, {
                propertyName: 'paddingRight',
                cssName: 'padding-right',
                unitName: 'px',
            }, {
                cssName: 'backgound-color',
                propertyName: 'bgColor',
                unitName: 'px',
            }],
            isReplaceProp: (a): a is keyof { PH?: number } => ['PH'].includes(a),
            replaceInputProps: { PH: ['paddingLeft', 'paddingRight'] },
        });
    const outer = theme.merge(theme1);
    it('get css property with replace props', () => {
        expect(outer.getterCss({})).toEqual({});
        expect(outer.getterCss({ bgColor: 'red', PH: 1, marginH: 2 })).toEqual({
            backgroundColor: 'red', paddingLeft: 1, paddingRight: 1, marginLeft: 2, marginRight: 2,
        });
        expect(outer.getterCss({ active: { active: { PH: 1 } } }))
            .toEqual({ active: { active: { paddingLeft: 1, paddingRight: 1 } } });
    });
});
