import {CommonInputProp} from '../Theme/type';
import { ObjectOmit } from 'mocoolka-fp/lib/TypeLevel';
export type BaseButtonProp = {
    size: 'small' | 'medium' | 'large' | 'largeX',
    variant: 'flat' | 'raised',
    contents: 'icon' | 'text' | 'both',

};
export type BaseButtonFProp = {
    /** Set disable to true if interaction with button isn't available to user */
    disabled: boolean
};
export interface ButtonProps extends Partial<ObjectOmit<BaseButtonProp & BaseButtonFProp, 'contents'>>,
    CommonInputProp {
    /** Define button's main text */
    text?: string;
    /** Define button's subtitle */
    subtitle?: string;
    /** Swap icon and text position */
    iconRight?: boolean;
    /**
     * Define icon (see IconSvg or IconCustom props)
     */
    icon?: any;
    /**
     * Stop onClick event's propagation and only call onPress
     */
    stopPressPropagation?: boolean;
    /**
     * Specify function to call on Button press
     */
    onPress?: React.EventHandler<any>;
    /**
     * The URL to link to when the button is clicked
     */
    // href?: string;

}
