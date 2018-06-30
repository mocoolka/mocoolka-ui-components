import {compose,of} from 'mocoolka-css/lib/base/VProp';
import { defaultVariableTheme } from './value';
import { getVariableValue, isNodeValue } from './get';
import {variable as paletteVariable} from '../palette';
const _variable = of({
    variable: defaultVariableTheme,
    isNodeValue,
    getVariableValue,
});
export const variable = compose(paletteVariable, _variable);
