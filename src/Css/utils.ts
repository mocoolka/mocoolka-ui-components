import { removeduplicate } from 'mocoolka-fp/lib/Array';

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
