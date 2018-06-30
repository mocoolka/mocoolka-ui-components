import {
    emptyOrNil, fromEmpty,
} from '../utils';
const a = [1, 2, 3];
const b =undefined;
describe('utils', () => {
    it('emptyOrNil', () => {
        expect(emptyOrNil()(a)).toEqual(false);
        expect(emptyOrNil()([])).toEqual(true);
        expect(emptyOrNil()(null)).toEqual(true);
        expect(emptyOrNil()(b)).toEqual(true);
    });
    it('fromEmpty', () => {
        expect(fromEmpty()(a).toUndefined()).toEqual(a);
        expect(fromEmpty()([]).toUndefined()).toEqual(undefined);
        expect(fromEmpty()(b).toUndefined()).toEqual(undefined);
    });
});
