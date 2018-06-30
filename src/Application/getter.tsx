import { Getter } from 'mocoolka-fp/lib/Monocle';
import apps from './apps';
import headers from './headers';
import pages from './pages';
import navs from './navs';
import { MNavProp, MApp } from './model';
import { Content, NavContent } from '../App/';
import { LinkComponent } from './type';
import { MDocModule } from './model/doc';
import * as React from 'react';
const App = apps.flat;
const Nav = navs.flat;
const Header = headers.flat;
const Page = pages.docGetter;
export type MDocApp = MApp<MNavProp, MDocModule>;
export * from './model';
export const applicationGetter = (Link: LinkComponent) => new Getter<MDocApp, React.ReactElement<any>[]>(a => {
    // const app = <App model={a} />;
    const AppNav = Nav<MDocModule>(Link);
    const nav = <AppNav model={a} expanded={false} pathname={''} />;
    return a.pages.map(p => {
        const page = Page.get(p);
        const header = <Header page={p} app={a} />;
        return (
            <App key="app" model={a} >
                {nav}
                {header}
                <NavContent>
                    <Content>
                        {page}
                    </Content>
                </NavContent>
            </App>
        );
    });

});
