import * as t from './type';
export const nodeKinds = ['easing', 'duration', 'shadows'];
export const isNodeValue = (a: any): a is t.CompontentsNodeValue => !!(a && a.kind && nodeKinds.includes(a.kind));
export const getVariableValue = (node: t.CompontentsNodeValue) =>
    (theme: t.ComponentsVariable): string | number => {
        switch (node.kind) {
            case 'easing':
                return theme.globle.variable.transitions.easing[node.level];
            case 'duration':
                return theme.globle.variable.transitions.duration[node.level];
            case 'shadows':
                return theme.globle.variable.shadows[node.level];

        }
    };
