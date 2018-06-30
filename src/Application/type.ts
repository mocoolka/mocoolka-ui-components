import * as M from './model';
/* import { fromNullable } from 'mocoolka-fp/lib/Option';
import { TypeOverride, ObjectOverwrite } from 'mocoolka-fp/lib/TypeLevel'; */
export type MNavProp = M.MNav;
export interface AppNavProps {
    nav: MNavProp[];
    title: string;
}
/* export type MNavProp = ObjectOverwrite<TypeOverride<MNavInputProp, 'title' | 'items' | 'isChildrenVisible'>, {
    items: MNavProp[],
}>;
export const defaultNavProp = (prop: MNavInputProp): MNavProp => ({
    name: prop.name,
    title: fromNullable(prop.title).getOrElse(prop.name),
    items: fromNullable(prop.items).getOrElse([]).map(defaultNavProp),
    isChildrenVisible: true,
}); */

export interface AppProps extends M.MBaseModel {
    nav: MNavProp[];
    pathname?: string;
}
export type LinkComponent = React.SFC<{ href?: string, replace?: boolean }>;
