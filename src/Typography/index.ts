import { extendBase } from '../Base';
import { AllHTMLAttributes } from '../Theme/type';
export {
    AllHTMLAttributes,
};

export const H1 = extendBase({
    name: 'H1',
    moduleName: 'typography',
    tagName: 'h1',
    style: {
        color: 'secondary',
        fontWeight: 'light',
        fontSize: 'h1',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '-.01562em',
            lineHeight: '6rem',
        },
    },
});
export const H2 = extendBase({
    name: 'H2',
    moduleName: 'typography',
    tagName: 'h2',
    style: {
        color: 'secondary',
        fontWeight: 'light',
        fontSize: 'h2',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '-.00833em',
            lineHeight: '3.75rem',

        },
    },
});
export const H3 = extendBase({
    name: 'H3',
    moduleName: 'typography',
    tagName: 'h3',
    style: {
        fontSize: 'h3',
        color: 'primary',
        fontWeight: 'regular',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '0em',
            lineHeight: '3.125rem',
        },
    },
});
export const H4 = extendBase({
    name: 'H4',
    moduleName: 'typography',
    tagName: 'h4',
    style: {
        fontSize: 'h4',
        color: 'primary',
        fontWeight: 'regular',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '.00735em',
            lineHeight: '2.5rem',
        },
    },
});
export const H5 = extendBase({
    name: 'H5',
    moduleName: 'typography',
    tagName: 'h5',
    style: {
        fontSize: 'h5',
        color: 'primary',
        fontWeight: 'regular',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '0em',
            lineHeight: '2rem',
        },
    },
});
export const H6 = extendBase({
    name: 'H6',
    moduleName: 'typography',
    tagName: 'h6',
    style: {
        fontSize: 'h6',
        color: 'primary',
        fontWeight: 'medium',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '.0125em',
            lineHeight: '2rem',
        },
    },
});
export const Subtitle1 = extendBase({
    name: 'Subtitle1',
    moduleName: 'typography',
    tagName: 'h6',
    style: {
        fontSize: 'subtitle',
        color: 'primary',
        fontWeight: 'regular',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '.00937em',
            lineHeight: '1.75rem',
        },
    },
});
export const Subtitle2 = extendBase({
    name: 'Subtitle2',
    moduleName: 'typography',
    tagName: 'h6',
    style: {
        fontSize: 'p',
        color: 'primary',
        fontWeight: 'medium',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '.00714em',
            lineHeight: '1.375rem',

        },
    },
});
export const Body1 = extendBase({
    name: 'Body1',
    moduleName: 'typography',
    tagName: 'p',
    style: {
        fontSize: 'subtitle',
        color: 'primary',
        fontWeight: 'regular',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '.03125em',
            lineHeight: '1.5rem',
        },
    },
});
export const Body2 = extendBase({
    name: 'Body2',
    moduleName: 'typography',
    tagName: 'p',
    style: {
        fontSize: 'p',
        color: 'primary',
        fontWeight: 'regular',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '.01786em',
            lineHeight: '1.25rem',
        },
    },
});
export const Caption = extendBase({
    name: 'Caption',
    moduleName: 'typography',
    tagName: 'p',
    style: {
        fontSize: 'caption',
        color: 'primary',
        fontWeight: 'regular',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        mkstyle: {
            letterSpacing: '.03333em',
            lineHeight: '1.25rem',
        },
    },
});
export const Overline = extendBase({
    name: 'Overline',
    moduleName: 'typography',
    tagName: 'p',
    style: {
        fontSize: 'overline',
        color: 'primary',
        fontWeight: 'medium',
        textDecoration: 'inherit',
        textTransform: 'uppercase',
        mkstyle: {
            letterSpacing: '.16667em',
            lineHeight: '2rem',
        },
    },
});
