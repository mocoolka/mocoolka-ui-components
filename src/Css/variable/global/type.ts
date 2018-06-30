export type StandLevel = {
    largeX: number;
    large: number;
    medium: number;
    small: number;
    none: number;

};
export type GlobalVariableSetting = {
    baseModule: number,
    breakpointUnit: number,
    breakpoints: {
        sm: number
        md: number
        lg: number
        xl: number
    },

    unit: {
        none: number,
        tiny: number,
        xtiny: number,
        small: number,
        xsmall: number,
        medium: number,
        xmedium: number,
        large: number,
        xlarge: number,
        xxlarge: number,
        jumbo: number,
        xjumbo: number,
        xxjumbo: number,
    },
    border: {
        radius: StandLevel,
        width: StandLevel,
    }
    font: {
        weight: {
            thin: number;
            light: number;
            regular: number;
            medium: number;
            bold: number;
            black: number;
        },
        size: {
            h1: number,
            h2: number,
            h3: number,
            h4: number,
            h5: number,
            h6: number,
            subtitle: number,
            p: number,
            caption: number,
            overline: number,
        },
        family: {
            sansSerif: string;
            serif: string;
            monospace: string;
        },
    },
    zIndex: {
        moon: number,
        tooltip: number,
        alertDesktop: number,
        popup: number,
        modal: number,
        overlay: number,
        dropdown: number,
        alertMobile: number,
        nav: number,
        bar: number,
        base: number,
    },
    width: {
        content: number,
        contentlg: number,
        contentmd:number,
        contentsm:number,
        gutter: number;
        nav: number;
    },
    effects: {
        ease: {
            easeInOut: string,
            easeOut: string,
            easeIn: string,
            sharp: string,
        },
        duration: {
            none: number,
            shortest: number,
            shorter: number,
            short: number,
            standard: number,
            complex: number,
            enteringScreen: number,
            leavingScreen: number,
        },
        shadows: {
            0: string,
            1: string,
            2: string,
            3: string,
            4: string,
            5: string,
            6: string,
            7: string,
            8: string,
            9: string,
            10: string,
            11: string,
            12: string,
            13: string,
            14: string,
            15: string,
            16: string,
            17: string,
            18: string,
            19: string,
            20: string,
            21: string,
            22: string,
            23: string,
            24: string,

        },
    },

};

export type GlobalVariable = {
    globle: {
        variable: GlobalVariableSetting,
    }
};
export interface GlobalVariableMixed {
    globle?: {
      variable?: {
        baseModule?: number,
        breakpointUnit?: number,
        breakpoints?: Partial<GlobalVariableSetting['breakpoints']>,

        unit: Partial<GlobalVariableSetting['unit']>,
        border: {
            radius: Partial<GlobalVariableSetting['border']['radius']>,
            width: Partial<GlobalVariableSetting['border']['width']>,
        }
        font: {
            weight: Partial<GlobalVariableSetting['font']['weight']>,
            size: Partial<GlobalVariableSetting['font']['size']>,
            family: Partial<GlobalVariableSetting['font']['family']>,
        },
        zIndex: Partial<GlobalVariableSetting['zIndex']>,
        width: Partial<GlobalVariableSetting['width']>,
        effects: {
            easing: Partial<GlobalVariableSetting['effects']['ease']>,
            duration: Partial<GlobalVariableSetting['effects']['duration']>,
            shadows: Partial<GlobalVariableSetting['effects']['shadows']>,
        },

      };
    };
  }
export interface UnitType {
    kind: 'unit';
    level: keyof GlobalVariableSetting['unit'];
}
export interface BreakpointType {
    kind: 'breakpoints';
    level: keyof GlobalVariableSetting['breakpoints'];
}
export interface BreakpointUnitType {
    kind: 'breakpointUnit';
}
export interface BModuleType {
    kind: 'bmodule';
    level: number;
}
export interface BorderRadiusType {
    kind: 'borderRadius';
    level: keyof StandLevel;
}
export interface BorderWidthType {
    kind: 'borderWidth';
    level: keyof StandLevel;
}
export interface FontWeightType {
    kind: 'fontWeight';
    level: keyof GlobalVariableSetting['font']['weight'];
}
export interface FontSizeType {
    kind: 'fontSize';
    level: keyof GlobalVariableSetting['font']['size'];
}
export interface FontFamilyType {
    kind: 'fontFamily';
    level: keyof GlobalVariableSetting['font']['family'];
}
export interface ZIndexType {
    kind: 'zIndex';
    level: keyof GlobalVariableSetting['zIndex'];
}
export interface WidthType {
    kind: 'width';
    level: keyof GlobalVariableSetting['width'];
}

export interface EasingType {
    kind: 'ease';
    level: keyof GlobalVariableSetting['effects']['ease'];
}
export interface DurationType {
    kind: 'duration';
    level: keyof GlobalVariableSetting['effects']['duration'];
}
export interface ShadowsType {
    kind: 'shadows';
    level: keyof GlobalVariableSetting['effects']['shadows'];
}

export type GlobalNodeValue =
    | UnitType
    | BreakpointType
    | BreakpointUnitType
    | BModuleType
    | BorderRadiusType
    | BorderWidthType
    | FontWeightType
    | FontSizeType
    | FontFamilyType
    | ZIndexType
    | WidthType
    | EasingType
    | DurationType
    | ShadowsType;
