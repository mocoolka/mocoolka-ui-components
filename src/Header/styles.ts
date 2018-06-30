import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const moduleName = 'header';
import { BaseHeaderProp } from './type';
export const Header = extendBase({
    name: 'Header',
    moduleName,
    tagName: 'header',
    style: {
        bgColor: 'main',
        position: 'fixedTop',
        layout: 'row',

        transition: {
            property: 'padding-left',
        },
        mkstyle: {
            height: 64,
            paddingLeft: 256 + 72 + 24,
            paddingRight: 24,
        },
        smSetting: {
            mkstyle: {
                height: 56,
                paddingH: 16,
            },
        },
        lgSetting: {
            mkstyle: {
                paddingH: 24,
            },
        },
    },
});
export const HeaderWrapper = extendBase({
    name: 'HeaderWrapper',
    moduleName,
    tagName: 'div',
    style: {
        layout: 'row',
        justifyContent: 'flex-start',
        transition: {
            property: 'padding-left',
        },
        mkstyle: {
            height: 64,
        },
        smSetting: {
            mkstyle: {
                height: 56,
            },
        },
        lgSetting: {
        },
    },
});
export const BaseHeader = extendBase<BaseHeaderProp>({
    name: 'BaseHeader',
    moduleName,
    tagName: 'div',
    style: {
        bgColor: 'main',
        layout: 'row',
        justifyContent: 'flex-start',
        mkstyle: {
            height: 256,
            padding: '115px 16px 0',
        },
        media: {
            name: 'sm',
            level: 'max',

            value: {
                mkstyle: {
                    height: 128,
                    paddingTop: 73,
                },
            },
        },
    },
    propertySetting: {
        size: {
            small: {
                position: 'fixedTop',
                boxShadow: 2,
                zIndex: 'bar',
                mkstyle: {
                    top: -192,
                },
                media: {
                    name: 'sm',
                    level: 'max',

                    value: {
                        mkstyle: {
                            top: -72,
                        },
                    },
                },
            },
            medium: {

            },
            large: {

            },
        },

    },

    propertyFSetting: {
        disabled: (a: boolean) => (a ? {
            color: `disabled`,
            boxShadow: '0',
            active: {
                boxShadow: '0',
            },
        } : {}),
    },

    defaultPropValue: {
        size: 'large',
    },
});
export const BaseHeaderPlaceholder = extendBase<BaseHeaderProp>({
    name: 'BaseHeaderPlaceholder',
    moduleName,
    tagName: 'div',
    style: {
        visibility: 'none',
        mkstyle: {
            height: 256,
        },
        media: {
            name: 'sm',
            level: 'max',
            value: {
                mkstyle: {
                    height: 128,
                },
            },
        },
    },
    propertySetting: {
        size: {
            small: {
                visibility: 'hidden',
            },
            medium: {

            },
            large: {

            },
        },

    },
    defaultPropValue: {
        size: 'large',
    },
});
export const HeaderWrapper1 = extendBase<BaseHeaderProp>({
    name: 'HeaderWrapper',
    moduleName,
    tagName: 'div',
    style: {

        transition: {
            property: 'padding-left',
        },
        mkstyle: {
            paddingLeft: 256,
        },
        media: {
            name: 'sm',
            level: 'max',

            value: {
                mkstyle: {
                    paddingLeft: 0,
                },
            },
        },
    },
    propertySetting: {
        size: {
            small: {
                position: 'fixedTop',
                mkstyle: {
                    height: 64,
                    left: 72,
                    right: 72,
                    zIndex: 201,
                },
                media: {
                    name: 'sm',
                    level: 'max',

                    value: {
                        mkstyle: {
                            height: 56,
                            left: 56,
                            right: 56,
                        },
                    },
                },
            },
            medium: {
                position: 'fixedTop',
                mkstyle: {
                    height: 64,
                    left: 72,
                    right: 72,
                    zIndex: 201,
                },
                media: {
                    name: 'sm',
                    level: 'max',

                    value: {
                        mkstyle: {
                            height: 56,
                            left: 56,
                            right: 56,
                        },
                    },
                },
            },
            large: {

            },
        },

    },

    propertyFSetting: {
        disabled: (a: boolean) => (a ? {
            color: `disabled`,
            boxShadow: '0',
            active: {
                boxShadow: '0',
            },
        } : {}),
    },

    defaultPropValue: {
        size: 'large',
    },
});
