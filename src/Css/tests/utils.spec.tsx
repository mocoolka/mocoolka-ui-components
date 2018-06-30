import { isSVGElement, parseClassName, parseTag } from '../utils';
describe('utils', () => {
    it('isSVGElement', () => {
        expect(isSVGElement('svg')).toBe(true);
        expect(isSVGElement('span')).toBe(false);
    });
    describe('parseClassName', () => {
        it('unifies class names', () => {
            expect(parseClassName('foo bar foo foo-bar foo-bar')).toBe('foo bar foo-bar');
        });

        it('handles undefined', () => {
            expect(parseClassName()).toBeUndefined();
        });
    });
    describe('parseClassName', () => {
        it('returns string tag when string is passed in', () => {
            expect(parseTag('div')).toBe('div');
        });

        it('returns string tag when arg1[0] is string', () => {
            expect(parseTag(['div'])).toBe('div');
        });

        it('returns last string tag when arg1[0] is string', () => {
            expect(parseTag(['div', 'span'])).toBe('span');
        });

        it('returns the component when it is passed in', () => {
            const Component = () => <div />;
            expect(parseTag(Component)).toBe(Component);
        });

        it('returns array when first tag is a component', () => {
            const Component = () => <div />;
            expect(parseTag([Component, 'div'])).toEqual([Component, 'div']);
        });

        it('removes string tags from middle', () => {
            const Component = () => <div />;
            expect(parseTag([Component, 'div', 'span'])).toEqual([Component, 'span']);
        });

        it('returns span when nothing is passed in', () => {
            expect(parseTag()).toBe('span');
        });

        it('returns span when empty array is passed in', () => {
            expect(parseTag([])).toBe('span');
        });
    });
});
