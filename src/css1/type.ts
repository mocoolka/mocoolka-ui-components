export type CompontentVariable = {
    transitions: {
        variable: {
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
    }
};
