import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
import { SideBarPropF } from './type';
const moduleName = 'sidebar';

export const Sidebar = extendBase<{}, SideBarPropF>({
    name: 'Sidebar',
    moduleName,
    tagName: 'div',
    style: {
        bgColor: 'paper',
        height: 'full',
        width: 'nav',
        border: 'right',
        scrollBar: 'vertical',

        position: 'fixedLeftTop',
        zIndex: 'nav',
        transition: {
            property: 'transform,left',
            delay: 'shortest',
            duration: 'shorter',
            ease: 'easeInOut',
        },
        mkstyle: {
            transform: 'translateZ(0)',
            transformStyle: 'preserve-3d',
        },

    },
    propertyFSetting: {
        expanded: (a: boolean) => a ? ({
            lgSetting: {
                mkstyle: {
                    left: 0,
                    visibility: 'visible',
                    transform: 'translateX(0)',
                },
            },
        }) : ({
            lgSetting: {
                mkstyle: {
                    left: -241,
                    visibility: 'hidden',
                    transform: 'translateX(0)',
                },
            },
        }),
    },
    defaultPropValue: {
        expanded: false,
    },
});

export const SidebarLogo = extendBase({
    name: 'SidebarLogo',
    moduleName,
    tagName: 'div',
    style: {
        border: 'bottom',

        mkstyle: {
            height: 64,

            padding: '12px 0 11px 24px',
        },
        media: {
            name: 'sm',
            level: 'max',

            value: {
                mkstyle: {
                    height: 56,
                },
            },
        },
    },
});
