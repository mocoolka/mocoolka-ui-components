import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
import { IconSvgProp, IconSvgFProp } from './type';
export const IconSvg = extendBase<IconSvgProp, IconSvgFProp>({
    name: 'IconSvg',
    moduleName: 'common',
    style: {
        layout: 'inlineRow',
        mkstyle: {
            borderColor: 'currentColor',
        },
        transition: {
            property: 'background-color, color, opacity',
        },
        selector: [{
            name: '& > svg',
            value: {
                mkstyle: {
                    fill: 'currentColor',
                },
            },
        }],
    },

    propertySetting: {
        size: {
            inherit: {
            },
            small: {
                squareSize: 'small',
                borderWidth: 'small',
                selector: [{
                    name: '& > svg',
                    value: {
                        squareSize: 'small',
                    },
                }],
            },
            medium: {
                squareSize: 'medium',
                borderWidth: 'small',
                selector: [{
                    name: '& > svg',
                    value: {
                        squareSize: 'medium',
                    },
                }],
            },
            large: {
                borderWidth: 'medium',
                squareSize: 'large',
                selector: [{
                    name: '& > svg',
                    value: {
                        squareSize: 'large',
                    },
                }],
            },
            xlarge: {
                borderWidth: 'medium',
                squareSize: 'xlarge',
                selector: [{
                    name: '& > svg',
                    value: {
                        squareSize: 'xlarge',
                    },
                }],
            },
        },
    },
    propertyFSetting: {
        disabled: (a: boolean) => ({
            mkstyle: {
                opacity: `${a ? 0.38 : 1}`,
            },
        }),
    },
    defaultPropValue: {
        size: 'medium',
        disabled: false,
    },

});
