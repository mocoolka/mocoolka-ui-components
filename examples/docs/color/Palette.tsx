import * as React from 'react';
import { Container, Block } from 'mocoolka-ui-components/lib/Base';
import { App } from 'mocoolka-ui-components/lib/App';
const props = (C: React.ComponentClass<any>) => (propname: string) => (propvalue: string[]) => {
    return propvalue.map(v1 => ({ [propname]: v1 })).map(v => <C {...v} >{v[propname]}</C>)
};

const hoverprops = (C: React.ComponentClass<any>) => (propname: string) => (propvalue: string[]) => {
    return propvalue.map(v1 => ({ [propname]: v1 })).map(v => <C hover={{ ...v }} >{v[propname]}</C>)
};

const paletteprops = (isColor: boolean = true) => (C: React.ComponentClass<any>) =>
    (propname: string) => {
        const value=isColor?colors:monos;
        const levels=isColor?colorLevel:monoLevel;
        const kind=isColor?'PaletteColor':'PaletteMonoColor';
        return value.map(v =>
            <Container layout='col' flexWrap='wrap' selector={[{
                name: '& >div',
                value: {
                    layout: 'center',
                   
                    mkstyle: {
                        minWidth: 40,
                        width: '100%',
                        height: 64,

                    },
                },
            }]}>
                {levels.map(level => <C bgAColor={ { name: v, level: level, kind }} >{v}-{level}</C>)}
            </Container>
        )
    };
const colors = [
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',]
const monos = [
    'grey',
    'brown',
    'blueGrey',
]
const colorLevel = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700',
]
const monoLevel = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
]
export default () => {
    return (
        <App title=''>
            <Container layout='row' flexWrap='wrap' selector={[{
                name: '& >div',
                value: {
                    layout: 'center',
                    sm:2,
                    md:4,
                    mkstyle: {

                        minWidth: 40,
                        width: 200,


                    },
                },
            }]}>
                {paletteprops(true)(Block)('bgAColor')}
                {paletteprops(false)(Block)('bgAColor')}
            </Container>
        </App>
    );
}
