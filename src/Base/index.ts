// import { registeModuleComponents } from '../Theme';
import { extend, as } from '../Theme';
import { AllHTMLAttributes } from 'react';
export {
    AllHTMLAttributes
};
// const SQRT2 = 1.41421356237;
const moduleName = 'base';
export const Base = as({
    name: 'Base',
    moduleName,
    style: {
        fontFamily: 'sansSerif',
        mkstyle: {
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
            fontSize: '100%',
            border: 0,
            padding: 0,
            margin: 0,
            outline: 0,
        },
    },
});
export const extendBase = extend(Base);
export const Root = extendBase({
    name: 'Root',
    moduleName: 'base',
    tagName: 'div',
    style: {
        typography: 'body2',
        color: 'primary',
        mkstyle: {
            fontFamily: {
                kind: 'fontFamily',
                level: 'sansSerif',
            },
        },
    },
});
export const FlexSplit = extendBase({
    name: 'FlexSplit',
    moduleName,
    tagName: 'div',
    style: {
        mkstyle: {
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 'auto',
        },
    },
});
export const MaskModal = extendBase<{}, { isOpen: boolean }>({
    name: 'MaskModal',
    moduleName,
    tagName: 'div',
    style: {
        position: 'fixedTop',
        width: 'full',
        height: 'full',
        transition: {
            property: 'opacity',
        },
        mkstyle: {
            backgroundColor: 'rgba(0,0,0,.5)',
            transform: 'translateZ(0)',
            zIndex: 3,
        },
    },
    propertyFSetting: {
        isOpen: (a: boolean) => a ? ({
            mkstyle: {
                opacity: 1,
            },
        }) : ({
            visibility: 'hidden',
            mkstyle: {
                opacity: .1,
            },

        }),
    },
});

export const Block = extendBase({
    name: 'Block',
    moduleName: 'base',
    tagName: 'div',
});
export const Container = extendBase({
    name: 'Container',
    moduleName: 'base',
    tagName: 'div',
    style: {
        layout: 'row',
    },
});
export const ContainerV = extendBase({
    name: 'Container',
    moduleName: 'base',
    tagName: 'div',
    style: {
        layout: 'column',
    },
});
/*
export const Arrow = theme.registerPropComponents({
    name: 'Arrow',
    moduleName: 'base',
    tagName: 'div',
    extends: ['base.Base'],
    style: {
        color: 'primary',
        scrollBar: 'none',
        align: 'childCenterFlex',
        mkstyle: {
            display: 'inline-flex',
            width: '1em',
            height: '1em',
        },
        after: {
            rotate: 45,
            mkstyle: {
                backgroundColor: 'currentcolor',
                border: 'inherit',
                marginBottom: '100%',
                width: `calc(100% / ${SQRT2})`,
                height: `calc(100% / ${SQRT2})`,
            },
        }
    },
});
export const Block = theme.registerPropComponents({
    name: 'Block',
    moduleName: 'base',
    tagName: 'div',
    extends: ['base.Base'],
    style: {
        color: 'primary',
        scrollBar: 'none',
        align: 'childCenterFlex',
        mkstyle: {
            display: 'block',
        },
    },
});
export const Inline = theme.registerPropComponents({
    name: 'Inline',
    moduleName: 'base',
    tagName: 'span',
    extends: ['base.Base'],
    style: {
        color: 'primary',
        scrollBar: 'none',
        align: 'childCenterFlex',
        mkstyle: {
            display: 'inline',
        },
    },
});
export const InlineBlock = theme.registerPropComponents({
    name: 'InlineBlock',
    moduleName: 'base',
    tagName: 'span',
    extends: ['base.Base'],
    style: {
        color: 'primary',
        scrollBar: 'none',
        align: 'childCenterFlex',
        mkstyle: {
            display: 'inline-block',
        },
    },
}); */
/*
const base = registeModuleComponents({
    base: {
        Panel: {
            box: 'panel',
        },
        PanelV: {
            mkstyle: {
                marginTop: {
                    kind: 'unit',
                    level: 'large',
                },
                marginBottom: {
                    kind: 'unit',
                    level: 'medium',
                },
            },

            layout: 'column',
        },
        PanelH: {
            mkstyle: {
                marginTop: {
                    kind: 'unit',
                    level: 'large',
                },
                marginBottom: {
                    kind: 'unit',
                    level: 'medium',
                },
            },
            layout: 'row',
        },
        Container: {
            box: 'container',
            // childSettingMarginRightTheme: 'small',
            // layoutTheme: 'leftToRight',
        },
        ContainerH: {
            layout: 'row',
        },
        ContainerV: {
            layout: 'column',
        },

        Inline: {
            mkstyle: {
                display: 'inline',
            },
        },
    },
});
export default base; */
