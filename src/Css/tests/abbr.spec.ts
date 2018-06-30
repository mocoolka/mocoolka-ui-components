import M from '../';
const c = M;
describe('build custmer css with property and selector and replaceProp', () => {

    it('get css property with replace props', () => {
        expect(c.toRCss({})).toEqual({});
        expect(c.toRCss({ mkstyle: { color: 'red', bgColor: '#fff' } })).
            toEqual({ color: 'red', backgroundColor: '#fff' });
        expect(c.toRCss({ focus: { hover: { mkstyle: {bgColor: '#fff' } }} }))
            .toEqual({ focus: { hover:  {backgroundColor: '#fff' }}  });
        expect(c.toCss(c.toRCss({ focus: { hover: { mkstyle: {backgroundColor: '#fff'} } } })))
            .toEqual(`:focus {\n  :hover {\n    background-color: #fff;\n  }\n}`);
    });
});
