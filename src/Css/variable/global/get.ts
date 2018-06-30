import {GlobalVariable,GlobalNodeValue} from './type';
export const nodeKinds = ['unit', 'breakpoints', 'bmodule', 'borderRadius',
    'borderWidth', 'fontWeight', 'fontSize', 'baseBreakPointUnit',
    'fontFamily', 'zIndex', 'width', 'ease', 'duration', 'shadows'];
export const isNodeValue = (a: any): a is GlobalNodeValue => !!(a && a.kind && nodeKinds.includes(a.kind));

export const getVariableValue = (node: GlobalNodeValue) =>
    (theme: GlobalVariable): string | number => {
        switch (node.kind) {
            case 'unit':
                return theme.globle.variable.unit[node.level];
            case 'breakpoints':
                return theme.globle.variable.breakpoints[node.level];
            case 'breakpointUnit':
                return theme.globle.variable.breakpointUnit;
            case 'bmodule':
                return theme.globle.variable.baseModule * node.level;
            case 'borderRadius':
                return theme.globle.variable.border.radius[node.level];
            case 'borderWidth':
                return theme.globle.variable.border.width[node.level];
            case 'fontWeight':
                return theme.globle.variable.font.weight[node.level];
            case 'fontSize':
                return theme.globle.variable.font.size[node.level];
            case 'fontFamily':
                return theme.globle.variable.font.family[node.level];
            case 'zIndex':
                return theme.globle.variable.zIndex[node.level];
            case 'width':
                return theme.globle.variable.width[node.level];
            case 'ease':
                return theme.globle.variable.effects.ease[node.level];
            case 'duration':
                return theme.globle.variable.effects.duration[node.level];
            case 'shadows':
                return theme.globle.variable.effects.shadows[node.level];
        }
    };
