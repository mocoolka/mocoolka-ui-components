import { buildTheme, themeComponentMixin } from '../helper';
const theme = buildTheme();
import * as B from '../../Base';
export const A1 = B.extendBase({
    name: 'A1',
    moduleName: 'temp',
    tagName: 'div',
    style: {
        color: 'main',
        mkstyle: {
            paddingH: 16,
        },
    },
});
export const A2 = B.extendBase({
    name: 'A2',
    moduleName: 'temp',
    tagName: 'div',
    style: {
        selector: [{
            name: '& h1',
            value: {
                component: 'temp.A1',
            },
        }],
    },
});
describe('object', () => {
    it('themeComponentMixin', () => {
        expect(themeComponentMixin('temp', 'A1')({ theme })).toEqual(
`color: #009688;
padding-left: 16px;
padding-right: 16px;`
        );
    });
    it('themeComponentMixin with component prop', () => {
        expect(themeComponentMixin('temp', 'A2')({ theme })).toEqual(
`& h1 {
  color: #009688;
  padding-left: 16px;
  padding-right: 16px;
}`
        );
    });
});
