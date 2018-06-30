// tslint:disable
const Color = require('color');
// tslint:enable
const lighten = (a: any): any => Color(a.color as string).lighten(a.value);
const isDark = (a: any): any => Color(a).isDark();
const ColorFunctions = {
    lighten,
    isDark,
};
export default ColorFunctions;
export const alpha = (v: number) => (c: string) => Color(c).alpha(v).toString();
