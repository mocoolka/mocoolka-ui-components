import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
import { P, H1, H2 } from './section';
import { Document } from './type';
export {
    P, H1, H2
};
const moduleName = 'chapter';
export const Root = extendBase({
    name: 'Root',
    moduleName,
    tagName: 'div',
    style: {
        mkstyle: {
            margin: '60px 0 40px 0',
        },
        selector: [{
            name: '& h2:not(:first-child)',
            value: {
                mkstyle: {
                    marginTop: 60,
                },
            },
        }, {
            name: '& h3:not(:first-child)',
            value: {
                mkstyle: {
                    marginTop: 40,
                },
            },
        }, {
            name: '& p',
            value: {
                gutterBottom: true,
            },
        }],
    },
});
export const Content = extendBase({
    name: 'Content',
    moduleName,
    tagName: 'div',
});
export const Intro = extendBase({
    name: 'Intro',
    moduleName,
    tagName: 'div',
});

export const Title = extendBase({
    name: 'Title',
    moduleName,
    tagName: 'h1',
    style: {
        fontSize: 'h4',
        fontWeight: 'regular',
        color: 'main',
        mkstyle: {
            maxWidth: 940,
            lineHeight: 40,
            marginBottom: 30,
        },
    },
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
export const chapter: Document = {
    Title,
    P,
    H1,
    H2,
    List,
    Intro,
    Root,
    Content,
};
