import { ObjectOptional } from 'mocoolka-fp/lib/TypeLevel';
import { CommonInputProp } from '../Theme/type';
export type IIcon = {
    name: string,
    points: string[] | string
};
export type IconSvgProp = {
    size: 'inherit' | 'small' | 'medium' | 'large' | 'xlarge'
};
export type IconSvgFProp = {
    disabled: boolean
};
export type DefaultIconSvgProp = Pick<IconSvgProp & IconSvgFProp, 'size' | 'disabled'>;
export type OptionalProps = 'size' | 'disabled';
export type IconSvgPropType = ObjectOptional<IconSvgProp & IconSvgFProp, OptionalProps> & CommonInputProp;
