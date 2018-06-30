import { of, ofAbbr, ofICss,CssModule } from 'mocoolka-css';
export {
    CssModule
}
import { TCssProperty } from 'mocoolka-css/lib/css/PropType'
import { cssProperties } from 'mocoolka-css/lib/css/';
import { variable } from './variable'
import {
    AbbrProps, VariableProp, Mixed, TCssSelector,
} from './type';


export const css = ofICss<TCssSelector, TCssProperty>({
    cssSelector: ['focus', 'hover', 'active', 'empty', 'enabled', 'invalid'],
    cssProperty: cssProperties,
});
const abbrs = ofAbbr<TCssProperty, AbbrProps>({
    bgColor: ['backgroundColor'],
    marginV: ['marginTop', 'marginBottom'],
    marginH: ['marginLeft', 'marginRight'],
    paddingV: ['paddingTop', 'paddingBottom'],
    paddingH: ['paddingLeft', 'paddingRight'],
});

const M = of<VariableProp, AbbrProps, {}, {}, {}, Mixed>()({
    variable,
    abbrs,
    css,
});
export default M;





