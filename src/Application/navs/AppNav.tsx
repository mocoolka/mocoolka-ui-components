
import * as React from 'react';
import { LinkComponent } from '../type';
import { MApp, MNavProp, containerPathName } from '../model';
import { Nav, Item } from '../../Nav';
import { Sidebar, SidebarLogo } from '../../Sidebar';
import { NavGroup } from './compontents/NavGroup';
import { H6 } from '../../Typography';
import { isEmpty } from 'mocoolka-fp/lib/predicate';
import { fromPredicate } from 'mocoolka-fp/lib/Either';
import { identity } from 'mocoolka-fp/lib/function';

export * from '../type';
// const _get = flip(curry(get));

/* const containerRouter = (pathname: string, entity: MNav) =>
    entity.items!.some(compose(flip(contains)(pathname), _get('name'))); */

export const AppNav = <TPage extends object>(Link: LinkComponent): React.SFC<
    {
        expanded: boolean;
        pathname: string;
        model: MApp<MNavProp, TPage>,
    }> => (props) => {
        const { model: { navs, title }, pathname, expanded, ...others } = props;
        const mapNode = (a: MNavProp): React.ReactElement<any> => (
            <Link href={'/?' + a.name} key={a.name} replace={true} >
                <Item>{a.title}  </Item>
            </Link>);
        const mapLeaf = (a: MNavProp): React.ReactElement<any> => (
            <NavGroup
                key={a.name}
                {...a}
                isChildrenVisible={containerPathName(pathname)(a)}
            >
                {a.items!.map(map)}
            </NavGroup>
        );

        const map = (fa: MNavProp): React.ReactElement<any> => {
            const value = fromPredicate((a1: any) => isEmpty(a1.items), identity)(fa);
            return value.bimap(mapLeaf, mapNode).value;
        };
        return (
            <Sidebar expanded={expanded}>
                <SidebarLogo><H6>{title}</H6></SidebarLogo>
                <Nav {...others}>
                    {navs.map(map)}
                </Nav>
            </Sidebar>
        );
    };
