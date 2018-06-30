import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const moduleName = 'demo';

export const Root = extendBase({
    name: 'Root',
    moduleName,
    style: {
        mkstyle: {
            marginH: 48,
            marginBottom: 40,
        },
    },
});
export const Content = extendBase({
    name: 'Content',
    moduleName,
    style: {
        layout: 'center',
        mkstyle: {
            paddingV: 36,
            marginBottom: 40,
        },
    },
});
export const Header = extendBase({
    name: 'Header',
    moduleName,
    style: {
        mkstyle: {
            display: 'none',
        },
    },
});
export const Code = extendBase({
    name: 'Code',
    moduleName,
    style: {
        mkstyle: {
            display: 'none',
        },
    },
});