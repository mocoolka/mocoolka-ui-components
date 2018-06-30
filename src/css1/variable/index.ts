import * as T from './type';
import { defaultVariable } from './value';
import { getVariableValue, isNodeValue } from './get';
export * from './type';
export { T };
export const variable = {
    variable: defaultVariable,
    isNodeValue,
    getVariableValue,
};
