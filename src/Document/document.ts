import { extend } from '../Theme';
import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const moduleName = 'doc';
export const H1 = extendBase({
    name: 'H1',
    moduleName,
    tagName: 'h1',
    style: {
        component: 'typography.H1',
        fontWeight: 'regular',
        mkstyle: {
            maxWidth: 940,
            lineHeight: 32,
        },
        gutterBottom: true,
    },
});
export const H2 = extendBase({
    name: 'H2',
    moduleName,
    tagName: 'h2',
    style: {
        fontSize: 'subtitle',
        fontWeight: 'regular',
        mkstyle: {
            maxWidth: 760,
            lineHeight: 25,
        },
        gutterBottom: true,
    },
});
export const H3 = extendBase({
    name: 'H3',
    moduleName,
    tagName: 'h3',
    style: {
        fontSize: 'p',
        fontWeight: 'regular',
        mkstyle: {
            maxWidth: 760,
            lineHeight: 20,
        },
        gutterBottom: true,
    },
});
export const P = extend(H3)({
    name: 'P',
    moduleName,
    tagName: 'p',
    style: {
        fontSize: 'p',
        mkstyle: {
            maxWidth: 760,
            lineHeight: 24,
            margin: '0 0 .5em',
            wordWrap: 'break-word',
        },
        gutterBottom: true,
    },
});
export const A = extendBase({
    name: 'A',
    moduleName,
    tagName: 'a',
    style: {
        fontSize: 'inherit',
        color: 'main',
        mkstyle: {
            cursor: 'pointer',
            display: 'inline',
            textDecoration: 'none',
        },
    },
});
export const Blockquote = extendBase({
    name: 'Blockquote',
    moduleName,
    tagName: 'blockquote',
    style: {
        fontSize: 'inherit',
        bgColor: 'paper',
        border: 'leftBar',
        mkstyle: {
            padding: `8px 24px`,
            margin: `24px 0`,
        },
    },
});
export const Pre = extendBase({
    name: 'Pre',
    moduleName,
    tagName: 'blockquote',
    style: {
        borderRadius: 'large',
        fontSize: 'inherit',
        bgColor: 'paper',
        mkstyle: {
            padding: '12px 18px',
            overflow: 'auto',
            margin: `24px 0`,
        },
    },
});
export const Hr = extendBase({
    name: 'Hr',
    moduleName,
    tagName: 'hr',
    style: {
        border: 'bottom',
        mkstyle: {
            margin: '0px 40px',
        },
    },
});
export const Ul = extendBase({
    name: 'Ul',
    moduleName,
    tagName: 'ul',
    style: {
        mkstyle: {
            paddingLeft: 40,
            marginTop: 20,
            marginBottom: 10,
        },
    },
});
export const Ol = extend(Ul)({
    name: 'Ol',
    moduleName,
    tagName: 'ol',
    style: {
        mkstyle: {
            listStyleType: 'decimal',
        },
    },
});
export const Li = extendBase({
    name: 'Li',
    moduleName,
    tagName: 'li',
    style: {
        fontSize: 'p',
        mkstyle: {
            maxWidth: 760,
            lineHeight: 24,
            margin: '0 0 .5em',
            wordWrap: 'break-word',
        },
        gutterBottom: true,
    },
});