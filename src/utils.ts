import { removeduplicate } from 'mocoolka-fp/lib/Array';
import { fromPredicate } from 'mocoolka-fp/lib/Option';
import { isEmpty, isNil } from 'mocoolka-fp/lib/predicate';
import { getFunctionSemigroup, semigroupAny } from 'mocoolka-fp/lib/Semigroup';
import {not} from 'mocoolka-fp/lib/function';
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
export const emptyOrNil = <T>() => getFunctionSemigroup(semigroupAny)
    <T[] | undefined | null>().concat(isEmpty, isNil);
export const fromEmpty = <T>() => fromPredicate(not(emptyOrNil<T>()));
// touchevents
let isTouchDeviceCachedValue: any = null;
export const isTouch = () => {
  if (isTouchDeviceCachedValue !== null) { return isTouchDeviceCachedValue; }
  /* tslint:disable */
  // @ts-ignore
  isTouchDeviceCachedValue =
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0 ||
    typeof (document.body as any)['ongesturestart']  === 'function';

  return isTouchDeviceCachedValue;
};
export const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
export const getKey = (item: { id?: any }, index: number) => 
(item && typeof item.id !== 'undefined' ? item.id : index);