import { _get } from 'mocoolka-fp/lib/object';
import { fromNullable } from 'fp-ts/lib/Option';
import { arrayObjectCompare } from 'mocoolka-fp/lib/ObjectCompare';

export const predicateOption = (a: any) => (predicate: (a: any) => boolean) =>
    fromNullable(a).map(predicate).getOrElse(false);

export const containsObjectProp = (propName: string | string[] = 'name', childrenName: string = 'items') =>
    (value: string) => <T extends { items?: any[] }>(entity: T) =>
        arrayObjectCompare.contains(propName)(value)(_get(childrenName)(entity) as any[]);
