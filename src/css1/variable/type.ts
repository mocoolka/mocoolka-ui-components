export type StandLevel = {
    largeX: number;
    large: number;
    medium: number;
    small: number;
    none: number;

};
export type ComponentsVariableSetting = {

    transitions: {
        easing: {
            easeInOut: string,
            easeOut: string,
            easeIn: string,
            sharp: string,
        },
        duration: {
            shortest: number,
            shorter: number,
            short: number,
            standard: number,
            complex: number,
            enteringScreen: number,
            leavingScreen: number,
        }
    }
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

    }
};

export type ComponentsVariable = {
    globle: {
        variable: ComponentsVariableSetting,
    }
};
export interface EasingType {
    kind: 'easing';
    level: keyof ComponentsVariableSetting['transitions']['easing'];
}
export interface DurationType {
    kind: 'duration';
    level: keyof ComponentsVariableSetting['transitions']['duration'];
}
export interface ShadowsType {
    kind: 'shadows';
    level: keyof ComponentsVariableSetting['shadows'];
}
export type CompontentsNodeValue =
    | EasingType
    | DurationType
    | ShadowsType
;
