import M from '../';
const c = M;
describe('Palette variable', () => {
    it('convert variable to css Property', () => {
        expect(c.toRCss({})).toEqual({});
        expect(c.toRCss({ mkstyle: {color: { name: 'red', level: 500, kind: 'PaletteColor' } }}))
            .toEqual({ color: '#f44336' });
        expect(c.toRCss({
            focus: {
                hover: {
                    mkstyle: {color:
                        { name: 'red', level: 500, kind: 'PaletteColor' },
                    },
                },
            },
        }))
            .toEqual({
                focus: {
                    hover: {
                        color: '#f44336',
                    },
                },
            });
    });
});
