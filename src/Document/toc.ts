import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};

const moduleName = 'toc';
export const Toc = extendBase({
    name: 'Toc',
    moduleName,
    tagName: 'div',
    style: {
        border: 'leftBar',
        mkstyle: {
            paddingLeft: 20,
            marginTop: 60,
        },
        gutterBottom: true,
        selector: [{
            name: '& li:last-child',
            value: {
                mkstyle: {
                    paddingTop: 10,
                    lineHeight: 20,
                },
            },
        }],
    },
});
export const Title = extendBase({
    name: 'Title',
    moduleName,
    tagName: 'h1',
    style: {
        fontSize: 'subtitle',
        color: 'secondary',
        mkstyle: {
            marginBottom: 12,
            lineHeight: 16,
        },
    },
});
export const List = extendBase({
    name: 'List',
    moduleName,
    tagName: 'ul',
    style: {
        mkstyle: {
            listStyle: 'none',
            marginTop: 0,
            paddingLeft: 0,
        },
    },
});
export const ListItem = extendBase({
    name: 'ListItem',
    moduleName,
    tagName: 'li',
    style: {
        fontSize: 'h6',
        mkstyle: {
            lineHeight: 40,
        },
    },
});
export const Link = extendBase({
    name: 'Link',
    moduleName,
    tagName: 'a',
    style: {
        color: 'main',
        mkstyle: {
            textDecoration: 'none',
            cursor: 'pointer',
        },
    },
});
