import { MBaseModel, MBaseModelItem } from './type';
import { fromPredicate } from 'mocoolka-fp/lib/Option';
import { isEmpty } from 'mocoolka-fp/lib/predicate';
export interface MType {
    kind: 'Type';
    name: string;
    items?: (string | number)[];
}
export const typeToString = (a: MType) => fromPredicate((b: MType) => b.name === 'union' && !isEmpty(b.items))(a)
    .map(c => c.items!.map(d => `'${d}'`).join(' | ')).getOrElse(a.name);
export interface MProperty extends MBaseModel {
    kind: 'Property';
    signature: string;
    type: MType;
}
export const isPropertyinterface = (e: Export): e is MPropertyinterface => e.kind === 'Propertyinterface';

export interface MPropertyinterface extends MBaseModelItem<MProperty> {
    kind: 'Propertyinterface';
    signature: string;
}
export const isModule = (e: Export): e is MDocModule => e.kind === 'Module';
export interface MDocModule extends MBaseModelItem<MPropertyinterface> {
    kind: 'Module';
    signature: string;
}
export type MDocElement = MPropertyinterface;
export type Export = MDocModule | MPropertyinterface;

export interface DocModuleMap {
    name: string;
    value: MDocModule;
}
