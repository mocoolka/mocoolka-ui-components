import M from '../';
import * as t from '../type';
import {of as ofICss} from 'mocoolka-css/lib/base/ICss';
import {of as ofVariable} from 'mocoolka-css/lib/base/VProp';
import {of as ofAbbr} from 'mocoolka-css/lib/base/AbbrProp';
import {PVariable,AbbrProp} from 'mocoolka-css/lib/base/type';
const m = M;
export type CssSelector1 = 'active1';
export type CssPropertyType1 = {
    bgColor1?: string,
    PL?: number | string,
};
const mCssvalue = ofICss<CssSelector1, CssPropertyType1>({
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

/* type PV = {
    color?: string | NodeValue,
    backgroundColor?: string | NodeValue,
}; */
type Variable = {
    test: {
        variable: {
            black: string,
            white: string,
        }
    }
};
type Black = {
    'kind': 'black',
};
type White = {
    'kind': 'white',
};
type NodeValue = Black | White;
const getVariableValue = (a: NodeValue) => (v1: Variable) => {
    if (a.kind === 'black') {
        return v1.test.variable.black;
    }
    return v1.test.variable.white;
};
const vVariableValue = ofVariable<NodeValue, Variable>({
    variable: {
        test: {
            variable: {
                black: '#000',
                white: '#fff',
            },
        },
    },
    isNodeValue: (a: any): a is NodeValue => !!(a && a.kind && ['black', 'white'].includes(a.kind)),
    getVariableValue,
});
type VariableProp = PVariable<NodeValue, t.VariableProp, 'color' | 'backgroundColor'>;

type AbbrsProps1 = AbbrProp<'PH', t.TCssProperty, 'marginLeft'>;
const abbrs1 = ofAbbr<t.TCssProperty, AbbrsProps1>({ PH: ['marginLeft', 'marginRight'] });

const outer = M.compose<VariableProp, AbbrsProps1>()({
    variable: vVariableValue,
    css: mCssvalue,
    abbrs: abbrs1,
}
);
describe('mix css in common Css', () => {
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
describe('mix css and variable in common Css', () => {
    it('css property with string', () => {
        expect(outer.toRCss({})).toEqual({});
        expect(outer.toRCss({
            mkstyle: {
                color: {
                    kind: 'black',
                },
            },
        })).toEqual({ color: '#000' });
        expect(outer.toRCss({
            mkstyle: {
                color: { name: 'red', level: 500, kind: 'PaletteColor' },
            },
        })).toEqual({ color: '#f44336' });
    });
});
describe('mix abbrs in common Css', () => {
    it('css property with string', () => {

        expect(outer.toRCss({})).toEqual({});
        expect(outer.toRCss({ mkstyle: {PH: 1, color: 'red'} })).toEqual({
            color: 'red', marginLeft: 1, marginRight: 1,
        });
        expect(outer.toRCss({ hover: { hover: { mkstyle: {PH: 1} } } }))
            .toEqual({ hover: { hover: { marginLeft: 1, marginRight: 1 } } });
    });
});
