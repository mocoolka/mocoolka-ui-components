import * as React from 'react';
import { Chapter, Toc, Article, Section, Document } from '../../Document';
import { simpleTableGetter, SimpleTableType } from '../../Table';
import { Image } from '../../Media';
import * as m from '../model/';
import * as doc from '../model/doc';
import { fromNullable } from 'mocoolka-fp/lib/Option';
import { fromEmpty } from '../../utils';
import { Getter } from 'mocoolka-fp/lib/Monocle';
const tocTitle = 'directory';
const fromPropertyEmpty = <T extends object>(items?: T[]) =>
    (map: (s: T) => any, head: (child: any) => any) =>
        fromEmpty<T>()(items).map(s =>
            head ? head(s!.map(map)) : s!.map(map)
        ).toUndefined();
const headerGetter = (T: React.ComponentClass) => new Getter<m.MBaseModel, React.ReactElement<any> | null>
    (o => fromNullable(o.header).map(v => (
        <T>{v} </T>
    )).toNullable());
const descriptionGetter = (T: React.ComponentClass) => new Getter<m.MBaseModel, React.ReactElement<any> | null>
    (o => fromNullable(o.description).map(v => (
        <T>{v} </T>
    )).toNullable());
const titleGetter = (T: React.ComponentClass) => new Getter<m.MBaseModel, React.ReactElement<any> | null>
    (o => fromNullable(o.title).map(v => (
        <T>{v} </T>
    )).toNullable());
const baseModelGetter = <C extends m.MBaseModel>(
    T: Document, childGetter: Getter<C, React.ReactElement<any> | null>,
    add?: { root: ((a: any) => any) }) =>
    new Getter<m.MBaseModelItem<C> | undefined | null, React.ReactElement<any> | null>
        (o => fromNullable(o).map(v => (
            <T.Root key={v.name}>
                <T.Intro>
                    {titleGetter(T.Title).get(v)}
                    {headerGetter(T.H1).get(v)}
                    {descriptionGetter(T.P).get(v)}
                </T.Intro>
                {fromNullable(add).map(add1 => add1.root(v)).toUndefined()}
                <T.Content>
                    <T.List>
                        {v.items.map(childGetter.get)}
                    </T.List>
                </T.Content>
            </T.Root>
        )).toNullable());
const toc = (item: m.MBaseModelItem<doc.MPropertyinterface>) => fromPropertyEmpty(item.items)(v => (
    <Toc.ListItem key={v.name}>
        <Toc.Link href={`#${v.name}`}>  {v.title}  </Toc.Link>
    </Toc.ListItem>), (child: any) =>
        (
            <Toc.Toc key="toc">
                <Toc.List>
                    <Toc.Title>{tocTitle}</Toc.Title>
                    {child}
                </Toc.List>
            </Toc.Toc>
        )
);

const property = new Getter<doc.MProperty, React.ReactElement<any> | null>(item => (
    <Section.Root columns3="three">
        <Section.Module>
            {titleGetter(Section.H1).get(item)}
            {headerGetter(Section.H2).get(item)}
            {descriptionGetter(Section.P).get(item)}
        </Section.Module>
        <Section.Module>
            <Image src="https://cdn.pixabay.com/photo/2018/06/10/13/51/swan-3466552_960_720.jpg" />
        </Section.Module>
    </Section.Root>
));
const propertyTable = new Getter<doc.MPropertyinterface, SimpleTableType>(a => (
    {
        header: ['name', 'type', 'description'], data: a.items.map(b =>
            ([b.name, doc.typeToString(b.type), b.description])),
    }
));
const propertyInterface = baseModelGetter<doc.MProperty>(Article.article, property,
    { root: propertyTable.compose(simpleTableGetter).get });
export const docGetter = baseModelGetter<doc.MPropertyinterface>(Chapter.chapter, propertyInterface, { root: toc });
/* const propertyInterface1 = (item: doc.MPropertyinterface) => (
    <Article.Root>
        <Article.Title id="move">{item.title} </Article.Title>
        <Article.Content>
            {headerGetter(H1)(item)}
            {descriptionGetter(P)(item)}
            <ColumnList>
                {item.items.map(property)}
            </ColumnList>
        </Article.Content>
    </Article.Root>
); */
/* export const docGetter = new Getter<doc.MDocModule, React.ReactElement<any>>(item => (
    <Chapter.Root>
        {titleGetter(Chapter.Title)(item)}
        <Chapter.Content>
            <Chapter.Intro>
                {headerGetter(Chapter.H1)(item)}
            </Chapter.Intro>
            {descriptionGetter(Chapter.P)(item)}
            {toc(item.items)}
            <Article.List>
                {item.items!.map(propertyInterface)}
            </Article.List>
        </Chapter.Content>
    </Chapter.Root>
)); */
