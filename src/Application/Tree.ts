//
// Code for http://www.tomharding.me/2017/05/01/fantas-eel-and-specification-11/
//

import { identity } from 'mocoolka-fp/lib/function';
import { isEmpty } from 'mocoolka-fp/lib/predicate';
import { fromPredicate } from 'mocoolka-fp/lib/Either';
import { fromNullable } from 'mocoolka-fp/lib/Option';

export const map = <A extends { items?: A[] }, R extends { items?: R[] }>
    (leaf: (a: A) => R, node: (a: A) => R) => (fa: A): R => {
    const value = fromPredicate((a1: any) => isEmpty(a1.items), identity)(fa);
    const result = value.bimap(leaf, node).value;
    result.items = fromNullable(fa.items).map(v => v.map(b => map(leaf, node)(b))).getOrElse([]);
    return result;
};
/* type A = {
    name: number,
    items?: A[],
}
type B = {
    name: string,
    items?: B[]
}
const myTree :A= {
    name: 1,
    items: [{ name: 2 },{ name: 3,items:[{name:4}] }]
};
const mapNode = (a: A): B => ({ name: `node${a.name}` })
const mapLeaf = (a: A): B => ({ name: `leaf${a.name}` })

console.log(map(mapLeaf, mapNode)(myTree)) */
