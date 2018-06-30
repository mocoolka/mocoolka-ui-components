import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
const SQRT2 = 1.41421356237;
export const Arrow = extendBase({
    name: 'Arrow',
    moduleName: 'base',
    tagName: 'div',
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
        },
    },
});
