import M from '../';
const c = M;
describe('build responsive css with property', () => {
    it('s m l', () => {
        expect(c.toRCss({ sm: 12, md: 8, lg: 5, xl: 3 })).toEqual(
            {
                "selector": [
                    { "name": "@media screen and (min-width: 801px)", "value": { "width": "66.66666666666666%" } },
                    { "name": "@media screen and (min-width: 1281px)", "value": { "width": "41.66666666666667%" } },
                    { "name": "@media screen and (min-width: 1481px)", "value": { "width": "25%" } }],
                "width": "100%"
            }
        );
        expect(c.toCss(c.toRCss({ sm: 12, md: 8, lg: 5, xl: 3 }))).toEqual(
`width: 100%;
@media screen and (min-width: 801px) {
  width: 66.66666666666666%;
}
@media screen and (min-width: 1281px) {
  width: 41.66666666666667%;
}
@media screen and (min-width: 1481px) {
  width: 25%;
}`);
});
});
