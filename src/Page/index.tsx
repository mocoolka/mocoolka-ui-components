import * as React from 'react';

import {Chapter, Section} from '../Document';
export interface IProp {
    name: string;
    title?: string;
    description?: string;
    [name: string]: any;
}
export interface IElement extends IProp {
    element: any;
    type?: string;
    items?: string;
}
export interface IPage extends IProp {
    type?: string;
    layout?: string;
    items: IElement[];
}
const buildChildContent = (demo: IElement) => <Section.Module><h3>{demo.title}</h3>{demo.element}</Section.Module>;

export const Page: React.SFC<{ page: IPage }> = ({ page }) => {
    const { items, title } = page;
    return items ?
        (
            <Chapter.Root>
                <Chapter.Title>{title}</Chapter.Title>
                <Chapter.Intro>
                        <Section.ColumnList>
                            {items.map(buildChildContent)}
                        </Section.ColumnList>
                </Chapter.Intro>
            </Chapter.Root>

        ) :
        <div>"no content"</div>;
};
