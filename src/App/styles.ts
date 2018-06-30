import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const moduleName = 'app';

export const Root = extendBase({
    name: 'Root',
    moduleName,
    tagName: 'div',

});
export const NavContent = extendBase({
    name: 'NavContent',
    moduleName,
    tagName: 'div',
    style: {
        width: 'full',
        transition: {
            property: 'padding-left',
        },
        mkstyle: {
            paddingLeft: 256,
            height: '100%',
        },
        lgSetting: {
            mkstyle: {
                paddingLeft: 0,
            },
        },
    },
});
export const Content = extendBase({
    name: 'Content',
    moduleName,
    tagName: 'section',
    style: {
        width: 'content',
        align: 'center',
        mkstyle: {
            paddingTop: 80,
        },
    },
});
