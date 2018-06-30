import * as React from 'react';
import { removeduplicate } from 'mocoolka-fp/lib/Array';
//tslint:disable
const { pickHTMLProps, pickSVGProps } = require('pick-react-known-prop');
// tslint:enable
import { ObjectDiff } from 'mocoolka-fp/lib/TypeLevel';
export const As = <P extends {
    className?: string,

    dangerouslySetInnerHTML?: string,
    As?: keyof JSX.IntrinsicElements,
    href?: string,
    [name: string]: any
}>
    (inputAs?: keyof JSX.IntrinsicElements): React.SFC<P> =>
    ({ className, children, As: _as, href, dangerouslySetInnerHTML, ...others }: {
        className?: string,
        dangerouslySetInnerHTML?: string,
        As?: keyof JSX.IntrinsicElements,
        [name: string]: any
    }) => {
        _as = _as ? _as : inputAs ? inputAs : 'div';
        className = parseClassName(className);
        const T = href ? 'a' : parseTag(_as);
        const propsWithoutStyle = others;
        const propsWithStyle = {
            ...propsWithoutStyle,
            // ...(!isEmpty(style) ? { style } : {}),
        };
        const otherProps = dangerouslySetInnerHTML
            ? { dangerouslySetInnerHTML }
            : {};
        const allProps = {
            ...(isSVGElement(T) && pickSVGProps(propsWithStyle)),
            ...pickHTMLProps(propsWithStyle),
            ...otherProps,
            href,
            className,
        };

        return (
            <T {...allProps}>
                {children}
            </T>
        );
    };

export const parseTag = (tag?: any) => {
    if (Array.isArray(tag)) {
        const tags = tag.filter(
            (currentTag, i) => typeof currentTag !== 'string' || i === tag.length - 1
        );
        return tags.length <= 1 ? tags[0] || 'span' : tags;
    }
    return tag || 'span';
};

const SVGElement = [
    'animate',
    'circle',
    'defs',
    'ellipse',
    'g',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
];
export const isSVGElement = (name: string) => SVGElement.indexOf(name) !== -1;

export const parseClassName = (name?: string) => !name ? name : removeduplicate<string>(name.split(' ')).join(' ');
export const isStyledComponent = (target: any) =>
    typeof target === 'function' && typeof target.styledComponentId === 'string';
export function withDefaults<D, A extends D>(C: React.ComponentType<A>, defaults: D): React.SFC<ObjectDiff<A, D>> {
    return props => <C {...defaults} {...props} />;
}
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 */

export interface Broadcast {
    publish: (value: any) => void;
    subscribe: (listener: (currentValue: any) => void) => number;
    unsubscribe: (no: number) => void;
}

export const createBroadcast = (initialState: { [key: string]: any }): Broadcast => {
    const listeners: { [key: string]: any } = {};
    let id = 0;
    let state = initialState;

    function publish(nextState: any): void {
        state = nextState;

        for (const _key in listeners) {
            const listener = listeners[_key];
            if (listener === undefined) {
                continue;
            }
            listener(state);
        }
    }

    function subscribe(listener: (currentValue: any) => void) {
        const currentId = id;
        listeners[currentId] = listener;
        id += 1;
        listener(state);
        return currentId;
    }

    function unsubscribe(unsubID: number) {
        listeners[unsubID] = undefined;
    }

    return { publish, subscribe, unsubscribe };
};
