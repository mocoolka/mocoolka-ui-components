import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const moduleName = 'appbar';
export const AppBar = extendBase({
    name: 'AppBar',
    moduleName,
    tagName: 'div',
    style: {
        bgColor: 'main',
        layout: 'row',
        justifyContent: 'flex-start',
        boxShadow: 2,
        zIndex: 'bar',
        transition: {
            property: 'padding-left',
        },
        mkstyle: {
            height: 64,
            paddingLeft: 256 + 24,
            paddingRight: 24,
        },
        smSetting: {
            mkstyle: {
                height: 48,
                paddingH: 16,
            },
        },
        lgSetting: {
            mkstyle: {
                paddingLeft: 24,
            },
        },
    },
});
