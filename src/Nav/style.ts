import { NavGroupItemStyledPropF } from './type';
import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const moduleName = 'nav';
export const cal = (base: number, unit: number, fix: number) => (i: number) => base + (unit - fix) * i;
// const one=cal(24,24)

export const Nav = extendBase({
    name: 'Nav',
    moduleName,
    tagName: 'nav',
    style: {
        fontSize: 'p',
        mkstyle: {
            padding: ' 12px 0 40px 0',
        },
    },
});
export const Group = extendBase({
    name: 'Group',
    moduleName,
    tagName: 'dl',
});
export const GroupTitle = extendBase({
    name: 'GroupTitle',
    moduleName: 'nav',
    tagName: 'dt',

    style: {
        fontSize: 'subtitle',
        fontWeight: 'medium',
        mkstyle: {
            padding: '15px 0 15px 22px',
            marginTop: 0,
            borderLeft: '2px solid transparent',
        },
        hover: {
            bgColor: 'focus',
        },
    },
});
export const List = extendBase({
    name: 'List',
    moduleName: 'nav',
    tagName: 'dd',
    style: {
        transition: {
            property: 'height',
        },
    },

});

export const Item = extendBase<{}, NavGroupItemStyledPropF>({
    name: 'Item',
    moduleName: 'nav',
    tagName: 'a',
    style: {
        mkstyle: {
            padding: '10px 10px 10px 46px',
            borderLeft: '2px solid transparent',
            cursor: 'pointer',
            userSelect: 'none',
            overflow: 'hidden',
            display: 'block',
            letterSpacing: 0.1,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        fontSize: 'subtitle',
        color: 'primary',
        hover: {
            bgColor: 'focus',
        },
    },
    propertySetting: {
    },
    propertyFSetting: {
        selected: (a?: boolean) => a ? ({
            color: 'main',
        }) : {},
    },
    defaultPropValue: {
        selected: false,
    },

});
export const NavRoot = extendBase({
    name: 'NavRoot',
    moduleName: 'nav',
    tagName: 'div',
    style: {
        bgColor: 'paper',
        height: 'full',
        width: 'nav',
        border: 'right',
        scrollBar: 'vertical',
    },
});
export const NavTitleWrapperStyled = extendBase({
    name: 'NavTitleWrapperStyled',
    moduleName: 'nav',
    tagName: 'div',
    style: {
        border: 'bottom',
        mkstyle: {
            height: 64,
            padding: '12px 0 11px 24px',
            position: 'relative',
        },
    },
});
