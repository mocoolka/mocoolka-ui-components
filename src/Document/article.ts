import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
import { Document } from './type';
const moduleName = 'article';
import { P, H1, H2 } from './section';
export {
    P, H1, H2
};

export const Root = extendBase({
    name: 'Root',
    moduleName,
    tagName: 'article',
    style: {
        mkstyle: {
            paddingBottom: 48,
        },
    },
});
export const Title = extendBase({
    name: 'Title',
    moduleName,
    tagName: 'h1',
    style: {
        fontSize: 'h5',
        fontWeight: 'regular',
        color: 'main',
        mkstyle: {
            lineHeight: 32,
            marginBottom: 30,

            paddingTop: 48,
        },
    },
});
export const Intro = extendBase({
    name: 'Intro',
    moduleName,
    tagName: 'div',
});
export const Content = extendBase({
    name: 'Content',
    moduleName,
    tagName: 'div',
});
export const List = extendBase({
    name: 'List',
    moduleName,
    tagName: 'div',
    style: {
        selector: [{
            name: '&>article:nth-child(1)',
            value: {
                mkstyle: {
                    borderTop: 'none',
                },
            },
        }, {
            name: '&>article',
            value: {
                mkstyle: {
                    borderTop: '1px solid rgba(0,0,0,.12)',
                },
            },
        }],
    },
});
export const article: Document = {
    Title,
    P,
    H1,
    H2,
    Intro,
    List,
    Root,
    Content,
};
