import * as React from 'react';
import { App, Article, injectGlobalStyle, Media, Chapter, Toc, P, H1, A, ColumnList, Module, Section } from '../src';
injectGlobalStyle();
const navs = [{
        name: 'a', title: 'Group 1', items: [
            { name: 'a1', title: 'item 1' },
            { name: 'a2', title: 'item 2' },
            { name: 'a3', title: 'item 3' },
        ],
    }, {
        name: 'Group 2', items: [
            { name: 'item 1' },
            { name: 'item 2' },
            { name: 'item 3' },
        ],
    }];
const value = {
    nav: (navs.map(App.defaultNavProp)),
    expanded: true,
    pathname: '',
    application: {
        title: 'Mocoolka UI',
    },
};
export default () => (<App.App {...value}>
        <Chapter.Chapter>
            <Chapter.Title>移动 </Chapter.Title>
            <Chapter.Content>
                <Chapter.Intro>
                    <H1>材料中的运动遵循现实世界的力学，比如重力。 </H1>
                </Chapter.Intro>
                <Toc.Toc>
                    <Toc.List>
                        <Toc.Title>目录 </Toc.Title>
                        <Toc.ListItem>
                            <Toc.Link href="#move">  屏幕内的移动  </Toc.Link>
                        </Toc.ListItem>
                        <Toc.ListItem>
                            <Toc.Link href="#moveIN">  进出屏幕的移动   </Toc.Link>
                        </Toc.ListItem>
                    </Toc.List>
                </Toc.Toc>
                <Article.List>
                    <Article.Article>
                        <Article.Title id="move">屏幕内的移动 </Article.Title>
                        <Article.Content>
                            <P>
                                元素在屏幕内两点之间会沿着一条自然下凹的弧线移动。所有屏幕内的移动都遵循<A>标准曲线</A>。
                            </P>
                            <ColumnList>
                                <Section columns3="three">
                                    <Module>
                                        <H1>向上弧线 </H1>
                                        <P>
                                            在现实世界中，物体需要使用外力克服重力才能上升。屏幕内的元素的向上移动也需要类似的外力，使元素从一个较慢的速度开始加速。
                                    </P>
                                    </Module>
                                    <Module>
                                        <Media.Image src="https://cdn.pixabay.com/photo/2018/06/10/13/51/swan-3466552_960_720.jpg"/>
                                    </Module>
                                </Section>
                                <Section columns3="three">
                                    <Module>
                                        <H1>向下弧线</H1>
                                        <P>
                                            在现实世界中，元素会通过重力加速下落。在屏幕上，元素会以更快的速度向下移动，受较少的外力作用。
                                    </P>
                                    </Module>
                                </Section>
                            </ColumnList>
                            <P>
                                For headlines, you can choose an expressive font,
                                such as a display, handwritten, or script style.
                                These unconventional font designs have details and intricacy that help attract the eye.
                        </P>
                        </Article.Content>
                    </Article.Article>
                    <Article.Article>
                        <Article.Title id="moveIN">进出屏幕的移动 </Article.Title>
                    </Article.Article>
                </Article.List>
            </Chapter.Content>
        </Chapter.Chapter>
    </App.App>);
//# sourceMappingURL=app.jsx.map