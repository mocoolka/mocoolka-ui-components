import { CommonInputProp } from '../Theme/type';
export type BaseHeaderProp = {
    size: 'small' | 'medium' | 'large',

};
export type BaseHeaderFProp = {
    /** Set disable to true if interaction with button isn't available to user */
    disabled: boolean
};
export interface ScrollHeaderProps extends CommonInputProp {
    /** Define button's main text */
    title?: string;
    /** Define button's subtitle */
    subtitle?: string;
}
