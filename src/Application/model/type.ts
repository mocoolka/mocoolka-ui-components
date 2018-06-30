import { sort } from 'mocoolka-fp/lib/Array';
import { contramap, ordString } from 'mocoolka-fp/lib/Ord';
import { fromNullable } from 'mocoolka-fp//lib/Option';
import { TypeOverride, ObjectOverwrite } from 'mocoolka-fp/lib/TypeLevel';
import { containsObjectProp } from '../../object';
export interface MBaseModel {
    name: string;
    title?: string;
    header?: string;
    description?: string;
}
export interface MBaseModelItem<T extends MBaseModel> extends MBaseModel {
    items: T[];
}
const sortByName = <T extends { name: string }>(): ((xs: T[]) => T[]) => sort(contramap((x: T) => x.name, ordString));
export const sortProps = sortByName<MBaseModel>();
export const getTitle = (a: MBaseModel) => fromNullable(a.title).getOrElse(a.name);
export const getHref = (a: MNav) => fromNullable(a.href).getOrElse(a.name);
export interface MNav extends MBaseModel {
    href?: string;
    items?: MNav[];
}
export interface MApp<TNav= MNavProp, TPage= MBaseModel> extends MBaseModel {
    orgName: string;
    navs: TNav[];
    pages: TPage[];
}
export interface MApplication<TApp> extends MBaseModel {
    orgName: string;
    apps: TApp[];
}
export type MNavProp = ObjectOverwrite<TypeOverride<MNav, 'title' | 'items'>, {
    items: MNavProp[],
}>;
export const defaultMNavProp = (prop: MNav): MNavProp => ({
    name: prop.name,
    title: getTitle(prop),
    items: fromNullable(prop.items).getOrElse([]).map(defaultMNavProp),
});
export const containerPathName = containsObjectProp('name', 'items');

/* export const a: Application = {
  name: 'mocoolka-ui',
  orgName: 'mocoolka',
  apps: [{
    name: 'mocoolka-css',
    orgName: 'mocoolka',
    navs: [{
      name: 'commonProps',
      title: 'common properties',
    }],
  },
    pages: [{

    }

  ]
  ],
}],
};
 */
