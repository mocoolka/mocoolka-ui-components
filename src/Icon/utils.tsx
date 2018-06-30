import { camelCase, upperFirst } from 'mocoolka-fp/lib/string';
import { isString } from 'mocoolka-fp/lib/predicate';
import { array } from 'mocoolka-fp/lib/Array';
import { Getter } from 'mocoolka-fp/lib/Monocle';
import * as t from './type';
import * as React from 'react';
import { IconSvg } from './style';
export * from './type';
export {SFC, StatelessComponent} from 'react';
export const getIconSvgfromIcon = new Getter<t.IIcon[], { [name: string]: React.SFC<t.IconSvgPropType> }>(s =>
    array.reduce(s, {}, (b, a) => Object.assign({}, b, { [upperFirst(camelCase(`Icon_${a.name}`))]: createIconSvg(a) }))
);
export const createIconSvg = (icon: t.IIcon): React.SFC<t.IconSvgPropType> =>
    (props) => {
        let content;
        const paths = icon.points;
        if (isString(paths)) {
            content = <polygon points={paths} />;
        } else {
            content = (
                <g>
                    {paths.map((path, index) => <path key={index} d={path} />)}
                </g>);
        }
        return (
            <IconSvg {...props} >
                <svg viewBox="0 0 24 24" >
                    {content}
                </svg>
            </IconSvg>);
    };
export const asIconSvg = (paths: string[] | string): React.SFC<t.IconSvgPropType> =>
    (props) => {
        let content;
        if (isString(paths)) {
            content = <polygon points={paths} />;
        } else {
            content = (
                <g>
                    {paths.map((path, index) => <path key={index} d={path} />)}
                </g>);
        }
        return (
            <IconSvg {...props} >
                <svg viewBox="0 0 24 24" >
                    {content}
                </svg>
            </IconSvg>);
    };
