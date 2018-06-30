import { variable as colorVariable } from './color';
import { ColorPaletteVariableMixed } from './palette/type';
import { ColorVariableMixed } from './color/type';
import { variable as globalVariable } from './global';
import { GlobalVariableMixed } from './global/type';
import { compose } from 'mocoolka-css/lib/base/VProp';
export const variable = compose(colorVariable, globalVariable);
export type VariableMixed = ColorVariableMixed & ColorPaletteVariableMixed
    & GlobalVariableMixed;
