import M from '../';
const c = M;
describe('Palette variable', () => {
    it('convert variable to css Property', () => {
        expect(c.toRCss({ mkstyle: {borderRadius: { level: 'small', kind: 'borderRadius' } }}))
            .toEqual({ borderRadius: 2 });
        expect(c.toRCss({ mkstyle: {borderWidth: { level: 'small', kind: 'borderWidth' } }}))
            .toEqual({ borderWidth: 1 });
        expect(c.toRCss({ mkstyle: {fontWeight: { level: 'regular', kind: 'fontWeight' } }}))
            .toEqual({ fontWeight: 400 });
        expect(c.toRCss({ mkstyle: {fontSize: { level: 'p', kind: 'fontSize' } }}))
            .toEqual({ fontSize: 14 });
        expect(c.toRCss({ mkstyle: {fontFamily: { level: 'sansSerif', kind: 'fontFamily' } }}))
            .toEqual({ fontFamily: 'Roboto,Open Sans, Helvetica Neue, Helvetica,Arial, sans-serif' });
        expect(c.toRCss({ mkstyle: {zIndex: { level: 'bar', kind: 'zIndex' } }}))
            .toEqual({ zIndex: 200 });
        expect(c.toRCss({ mkstyle: {width: { level: 'gutter', kind: 'width' } }}))
            .toEqual({ width: 40 });
        expect(c.toRCss({
            focus: {
                hover: {
                    mkstyle: { borderRadius:
                        { level: 'small', kind: 'borderRadius' },
                    },
                },
            },
        }))
            .toEqual({
                focus: {
                    hover: {
                        borderRadius: 2,
                    },
                },
            });
    });
});
