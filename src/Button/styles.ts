import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const moduleName = 'button';
import { BaseButtonProp, BaseButtonFProp } from './type';
export const BaseButton = extendBase<BaseButtonProp, BaseButtonFProp>({
    name: 'BaseButton',
    moduleName,
    tagName: 'button',
    style: {
        transition: { property: 'background-color, box-shadow，color' },
        borderRadius: 'small',
        layout: 'inlineRow',
        justifyContent: 'center',
        mkstyle: {
            outline: 0,
            marginH: 8,
            marginV: 8,
            paddingH: 8,

            cursor: 'pointer',
            overflow: 'hidden',
            userSelect: 'none',
        },

    },
    propertySetting: {
        size: {
            small: {
                fontSize: 'overline',
                mkstyle: {
                    height: 18,
                    lineHeight: 18,
                },
            },
            medium: {
                fontSize: 'caption',
                mkstyle: {
                    height: 24,
                    lineHeight: 24,
                },
            },
            large: {
                fontSize: 'p',
                mkstyle: {
                    height: 36,

                    lineHeight: 36,
                },
            },
            largeX: {
                fontSize: 'subtitle',
                mkstyle: {
                    height: 48,
                    lineHeight: 48,
                },
            },
        },
        variant: {
            flat: {
                bgColor: 'transparent',
            },
            raised: {
                bgColor: 'focus',
                boxShadow: 2,
                active: {
                    boxShadow: 8,
                },
            },
        },
        contents: {
            text: {
                mkstyle: {
                    minWidth: 88,
                },
            },
            icon: {
                mkstyle: {
                },
            },
            both: {
                mkstyle: {
                    minWidth: 88,
                },
            },
        },
    },

    propertyFSetting: {
        disabled: (a: boolean) => (a ? {
            color: `disabled`,
            boxShadow: 0,
            active: {
                boxShadow: 0,
            },
        } : {}),
    },

    defaultPropValue: {
        size: 'large',
        contents: 'both',
        variant: 'flat',
        disabled: false,
    },
});
export const ButtonTitle = extendBase({
    name: 'ButtonTitle',
    moduleName,
    tagName: 'p',
    style: {
        fontSize: 'inherit',
        color: 'inherit',
        fontWeight: 'medium',
        textDecoration: 'inherit',
        textTransform: 'uppercase',
    },
});
export const ButtonSubtitle = extendBase({
    name: 'ButtonSubtitle',
    moduleName,
    tagName: 'p',
    style: {
        fontSize: 'inherit',
        color: 'inherit',
        fontWeight: 'medium',
        textDecoration: 'inherit',
        textTransform: 'none',
    },
});
