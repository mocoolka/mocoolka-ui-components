import {
    containsObjectProp
} from '../object';
const a = [1, 2, 3];
describe('object', () => {
    it('containsObjectProp', () => {
        expect(containsObjectProp()('a')({ items: [] })).toEqual(false);
        expect(containsObjectProp()('a')({ items: [{ name: 'b' }, { name: 'c' }] })).toEqual(false);
        expect(containsObjectProp()('a')({ items: [{ name: 'a' }, { name: 'c' }] })).toEqual(true);
        expect(containsObjectProp()('a')({ items: [{ name: 'a1' }, { name: 'c' }] })).toEqual(false);
        expect(containsObjectProp()('a')({ items: [{ name: '1a' }, { name: 'c' }] })).toEqual(false);
    });

});
