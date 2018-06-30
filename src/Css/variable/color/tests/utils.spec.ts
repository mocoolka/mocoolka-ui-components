import Color,{ alpha } from '../utils';
describe('color utils', () => {
    it('alpha', () => {
        expect(alpha(0.5)('rgba(255, 255, 255, 0.87)')).toEqual(
            'rgba(255, 255, 255, 0.5)');
        expect(alpha(0.5)('#fff')).toEqual(
                'rgba(255, 255, 255, 0.5)');
    });
    it('alpha', () => {
        expect(Color.isDark('#fff')).toEqual(false);
        expect(Color.isDark('#000')).toEqual(true);
    });
});
