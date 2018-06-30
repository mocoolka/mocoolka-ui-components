import M from '../';
const c = M;
describe('build custmer css with property and selector', () => {
    it('css property with string', () => {
        expect(c.toRCss({ color: 'main' })).toEqual({ color: '#009688' });
        expect(c.toRCss({ rounded: true })).toEqual({ borderRadius: '50%' });
        expect(c.toRCss({ flip: 'horizontal' })).toEqual({ transform: 'scale(-1, 1)' });
        expect(c.toRCss({ rotate: 40 })).toEqual({ transform: 'rotate(40deg)' });
        expect(c.toRCss({
            media: {
                name: 'sm',
                level: 'max',
                value: {
                    color: 'main',
                },
            },
        })).toEqual({ selector: [{ name: '@media screen and (max-width: 800px)', value: { color: '#009688' } }] });
    });
});
