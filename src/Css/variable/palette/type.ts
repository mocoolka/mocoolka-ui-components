export type PaletteInputColorType = string;
export type MonoPaletteItem = {
    50: PaletteInputColorType,
    100: PaletteInputColorType,
    200: PaletteInputColorType,
    300: PaletteInputColorType,
    400: PaletteInputColorType,
    500: PaletteInputColorType,
    600: PaletteInputColorType,
    700: PaletteInputColorType,
    800: PaletteInputColorType,
    900: PaletteInputColorType,
};

export type AccentPaletteItem = {
    A100: PaletteInputColorType,
    A200: PaletteInputColorType,
    A400: PaletteInputColorType,
    A700: PaletteInputColorType,
};
export type ColorPaletteItem = MonoPaletteItem & AccentPaletteItem;
export type ColorPaletteItemMixed = Partial<MonoPaletteItem> & Partial<AccentPaletteItem>;
export type CommonPaletteItem = {
    dark: PaletteInputColorType,
    light: PaletteInputColorType,
    transparent: PaletteInputColorType,
};
export type TColorPalette<T> = {
    red: T,
    pink: T,
    purple: T,
    deepPurple: T,
    indigo: T,
    blue: T,
    lightBlue: T,
    cyan: T,
    teal: T,
    green: T,
    lightGreen: T,
    lime: T,
    yellow: T,
    amber: T,
    orange: T,
    deepOrange: T,
};
export type ColorPalette = TColorPalette<ColorPaletteItem>;
export type TMonoPalette<T> = {
    grey: T,
    brown: T,
    blueGrey: T,
};
export type MonoPalette = TMonoPalette<MonoPaletteItem>;
export type ColorPaletteVariableItems = {
    colorPalette: ColorPalette,
    monoPalette: MonoPalette,
    commonPalette: CommonPaletteItem,
};

export type ColorPaletteVariable = {
    palette: {
        variable: ColorPaletteVariableItems,
    },
};
export type ColorPaletteVariableMixed = {
    palette?: {
        variable?: {
            colorPalette?: Partial<TColorPalette<ColorPaletteItemMixed>>,
            monoPalette?: Partial<TMonoPalette<Partial<MonoPaletteItem>>>,
            commonPalette?: Partial<CommonPaletteItem>,
        }
    },
};
export interface PaletteColorType {
    kind: 'PaletteColor';
    name: keyof ColorPalette;
    level: keyof ColorPaletteItem;
}
export interface PaletteAccentColorType {
    kind: 'PaletteAccentColor';
    name: keyof ColorPalette;
    level: keyof AccentPaletteItem;
}
export interface PaletteMonoColorType {
    kind: 'PaletteMonoColor';
    name: keyof MonoPalette;
    level: keyof MonoPaletteItem;
}
export interface PaletteCommonColorType {
    kind: 'PaletteCommonColor';
    name: keyof CommonPaletteItem;
}
export type PaletteNodeValue =
    | PaletteColorType
    | PaletteAccentColorType
    | PaletteMonoColorType
    | PaletteCommonColorType;
