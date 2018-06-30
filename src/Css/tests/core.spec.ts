import M from '../';
describe('build custmer css with property and selector', () => {
    it('css property with string', () => {
        expect(M.toCss({})).toEqual('');
        expect(M.toCss({ color: 'red' })).toEqual('color: red;');
        expect(M.toCss({ focus: { hover: { color: 'red' } } }))
            .toEqual(`:focus {\n  :hover {\n    color: red;\n  }\n}`);
    });
    it('css property with number and unitName', () => {
        expect(M.toCss({ marginLeft: 1 })).toEqual('margin-left: 1px;');
        expect(M.toCss({ marginLeft: 0 })).toEqual('margin-left: 0px;');
        expect(M.toCss({ marginLeft: '1' })).toEqual('margin-left: 1;');
        expect(M.toCss({ focus: { hover: { marginLeft: 2 } } }))
         .toEqual(`:focus {\n  :hover {\n    margin-left: 2px;\n  }\n}`);
    });
});
