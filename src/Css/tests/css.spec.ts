import M from '../';
import {ofICss} from 'mocoolka-css'
const m = M;
describe('build custmer css with property and selector', () => {
    it('css property with string', () => {
        expect(m.toCss({})).toEqual('');
        expect(m.toCss({ color: 'red' })).toEqual('color: red;');
        expect(m.toCss({ focus: { hover: { color: 'red' } } }))
            .toEqual(`:focus {\n  :hover {\n    color: red;\n  }\n}`);
    });
    it('css property with number and unitName', () => {
        expect(m.toCss({ marginLeft: 1 })).toEqual('margin-left: 1px;');
        expect(m.toCss({ marginLeft: 0 })).toEqual('margin-left: 0px;');
        expect(m.toCss({ marginLeft: '1' })).toEqual('margin-left: 1;');
        expect(m.toCss({ focus: { hover: { marginLeft: 2 } } }))
            .toEqual(`:focus {\n  :hover {\n    margin-left: 2px;\n  }\n}`);
    });
});
export type CssSelector1 = 'active1';
export type CssPropertyType1 = {
    bgColor1?: string,
    PL?: number | string,
};
const mValue = ofICss<CssSelector1, CssPropertyType1>({
    cssSelector: ['active1'],
    cssProperty: [{
        propertyName: 'bgColor1',
        cssName: 'background-color',
    }, {
        propertyName: 'PL',
        cssName: 'padding-left',
        unitName: 'px',
    }],
});
describe('mix custmer css with property and selector ', () => {
    const outer = m.compose()({ css: mValue });
    it('css property with string', () => {
        expect(outer.toCss({})).toEqual('');
        expect(outer.toCss({ bgColor1: 'red' })).toEqual('background-color: red;');
        expect(outer.toCss({ active1: { active1: { bgColor1: 'red' } } }))
            .toEqual(`:active1 {\n  :active1 {\n    background-color: red;\n  }\n}`);
    });
    it('css property with number and unitName', () => {
        expect(outer.toCss({ PL: 1 })).toEqual('padding-left: 1px;');
        expect(outer.toCss({ PL: 0 })).toEqual('padding-left: 0px;');
        expect(outer.toCss({ PL: '1' })).toEqual('padding-left: 1;');
        expect(outer.toCss({ active1: { hover: { paddingLeft: 2 } } }))
            .toEqual(`:active1 {\n  :hover {\n    padding-left: 2px;\n  }\n}`);
    });
});
