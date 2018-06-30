import M from '../';
const c = M;
describe('build custmer css with property and selector', () => {
    it('css property with string', () => {
        expect(c.toRCss({ backgroundImage: { url: '/a.gif' } })).toEqual(
            {
                backgroundImage: 'url(\'/a.gif\')',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
            });
        expect(c.toRCss({ transition: { property: 'color,width' } })).toEqual(
            {
                transitionDelay: '0ms',
                transitionDuration: '200ms',
                transitionProperty: 'color,width',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }
        );
        expect(c.toRCss({ transform: { mode: 'horizontal' } })).toEqual(
            {transform: 'scale(-1, 1)'}
        );
    });
});
