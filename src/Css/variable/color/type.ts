import {
  MonoPaletteItem, CommonPaletteItem,
  ColorPaletteVariable, AccentPaletteItem, ColorPalette, MonoPalette
} from '../palette/type';

export type ColorOpacity = {
  full: number;
  largeXXX: number;
  largeXX: number;
  largeX: number;
  large: number;
  medium: number;
  small: number;
  mini: number;
};
export type ColorTemplate = {
  light: keyof MonoPaletteItem;
  normal: keyof MonoPaletteItem;
  dark: keyof MonoPaletteItem;
};
export type ColorLevel = keyof ColorTemplate;
export type AccentTemplate = {
  light: keyof AccentPaletteItem;
  normal: keyof AccentPaletteItem;
  dark: keyof AccentPaletteItem;
};
export type ColorsTemplate = {
  first: keyof ColorPalette;
  second: keyof ColorPalette;
  success: keyof ColorPalette;
  info: keyof ColorPalette;
  warning: keyof ColorPalette;
  alert: keyof ColorPalette;
};
export type ColorsTemplateType = keyof ColorsTemplate;

export type TBaseColors = {
  accentLevel: AccentTemplate;
  colorLevel: ColorTemplate;
  colors: ColorsTemplate;
  accent: keyof ColorPalette;
  mono: keyof MonoPalette;
  opacity: ColorOpacity;
};
export interface ColorVariableMixed {
  color?: {
    variable?: {
      accentLevel?: Partial<AccentTemplate>;
      colorLevel?: Partial<ColorTemplate>;
      colors?: Partial<ColorsTemplate>;
      accent?: keyof ColorPalette;
      mono?: keyof MonoPalette;
      opacity?: Partial<ColorOpacity>;
    };
  };
}
export type ColorVariable = ColorPaletteVariable & {
  color: {
    variable: TBaseColors,
  }
};

export interface ColorType {
  kind: 'Color';
  name: keyof ColorsTemplate;
  level?: ColorLevel;
}
export interface ColorPaletteType {
  kind: 'ColorPaletteType';
  name: keyof ColorPalette;
  level?: ColorLevel;
}
export interface ColorAccentType {
  kind: 'ColorAccent';
  level?: ColorLevel;
}
export interface ColorMonoType {
  kind: 'ColorMono';
  level?: keyof MonoPaletteItem;
}
export interface ColorCommonType {
  kind: 'ColorCommon';
  name: keyof CommonPaletteItem;
  level?: keyof ColorOpacity;
}

export type ColorNodeValue =
  | ColorType
  | ColorPaletteType
  | ColorAccentType
  | ColorMonoType
  | ColorCommonType;
