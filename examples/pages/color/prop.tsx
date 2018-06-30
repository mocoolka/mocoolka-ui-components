
import * as React from 'react';
import { Markdown } from 'mocoolka-ui-components';
import {Demo} from '../../components/Demo'
import {App,Content} from 'mocoolka-ui-components/lib/App';
 import colorcolor from  '../../docs/color/Color'
 import colorcolorhover from  '../../docs/color/ColorHover'
 import colorbgcolor from  '../../docs/color/BgColor'
 import colorbgcolorhover from  '../../docs/color/BgColorHover'
 import colorpalette from  '../../docs/color/Palette'
export const Page =()=> {
    return (
      <App title={'Color Property'}>
        <Content>

            
            <Markdown
            key={0}
            text={`

# Color Property

The Common Property is property on all components.

## Text Color

`}
          />
            

            <Demo
            key={1}
            js={colorcolor}
            raw={`import * as React from 'react';
import { Container, Block } from 'mocoolka-ui-components/lib/Base';
import { App } from 'mocoolka-ui-components/lib/App';
const props=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
 return propvalue.map(v1=>({[propname]:v1})).map(v=><C {...v} >{v[propname]}</C>)
};
const hoverprops=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
    return propvalue.map(v1=>({[propname]:v1})).map(v=><C hover={{...v}} >{v[propname]}</C>)
   };
   const colors = ['main','accent','disabled','primary','secondary','success','warning','alert','hint','red',
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
   'deepOrange'];
export default () => {
  return (
    <App title=''>
      <Container layout='row'         selector={ [{
            name: '& >div',
            value: {
              layout:'center',
                mkstyle: {
                    marginRight: 16,
                    minWidth:40,
                    
                },
            },
        }]}>
        {props(Block)('color')(colors)}
        <Block color='alt' bgColor='main'>alt</Block>
      </Container>
    </App>
  );
}
`}
            githubLocation={`mocoolka-ui-compontents/docs/src/docs/color/Color.tsx`}
          />
            

            <Markdown
            key={2}
            text={`

## Text Color Hover

`}
          />
            

            <Demo
            key={3}
            js={colorcolorhover}
            raw={`import * as React from 'react';
import { Container, Block } from 'mocoolka-ui-components/lib/Base';
import { App } from 'mocoolka-ui-components/lib/App';
const props=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
 return propvalue.map(v1=>({[propname]:v1})).map(v=><C {...v} >{v[propname]}</C>)
};
const hoverprops=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
    return propvalue.map(v1=>({[propname]:v1})).map(v=><C hover={{...v}} >{v[propname]}</C>)
   };

export default () => {
  return (
    <App title=''>
      <Container layout='row'         selector={ [{
            name: '& >div',
            value: {
              layout:'center',
                mkstyle: {
                    marginRight: 16,
                    minWidth:40,
                    
                },
            },
        }]}>
        {hoverprops(Block)('color')(['main','accent','disabled','primary','secondary','success','warning','alert','hint'])}
        <Block color='alt' bgColor='main'>alt</Block>
      </Container>
    </App>
  );
}
`}
            githubLocation={`mocoolka-ui-compontents/docs/src/docs/color/ColorHover.tsx`}
          />
            

            <Markdown
            key={4}
            text={`

## Background Color

`}
          />
            

            <Demo
            key={5}
            js={colorbgcolor}
            raw={`import * as React from 'react';
import { Container, Block } from 'mocoolka-ui-components/lib/Base';
import { App } from 'mocoolka-ui-components/lib/App';
const props=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
 return propvalue.map(v1=>({[propname]:v1})).map(v=><C {...v} >{v[propname]}</C>)
};
  
const hoverprops=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
  return propvalue.map(v1=>({[propname]:v1})).map(v=><C hover={{...v}} >{v[propname]}</C>)
 };
export default () => {
  return (
    <App title=''>
      <Container layout='row'  flexWrap='wrap'       selector={ [{
            name: '& >div',
            value: {
              layout:'center',
                mkstyle: {
                   
                    minWidth:40,
                    width:'50%',
                    height:60,
                    
                },
            },
        }]}>
        {hoverprops(Block)('bgColor')(['accent','alert','alt','disabled','main','success','warning','inherit','paper','content','divider','selected','focus','transparent'])}
        <Block color='alt' bgColor='main'>alt</Block>
      </Container>
    </App>
  );
}
`}
            githubLocation={`mocoolka-ui-compontents/docs/src/docs/color/BgColor.tsx`}
          />
            

            <Markdown
            key={6}
            text={`

## Background Color Hover

`}
          />
            

            <Demo
            key={7}
            js={colorbgcolorhover}
            raw={`import * as React from 'react';
import { Container, Block } from 'mocoolka-ui-components/lib/Base';
import { App } from 'mocoolka-ui-components/lib/App';
const props=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
 return propvalue.map(v1=>({[propname]:v1})).map(v=><C {...v} >{v[propname]}</C>)
};
  
const hoverprops=(C:React.ComponentClass<any>)=>(propname:string)=>(propvalue:string[])=>{
  return propvalue.map(v1=>({[propname]:v1})).map(v=><C hover={{...v}} >{v[propname]}</C>)
 };
 
export default () => {
  return (
    <App title=''>
      <Container layout='row'  flexWrap='wrap'       selector={ [{
            name: '& >div',
            value: {
              layout:'center',
                mkstyle: {
                   
                    minWidth:40,
                    width:'50%',
                    height:60,
                    
                },
            },
        }]}>
        {hoverprops(Block)('bgColor')(['accent','alert','alt','disabled','main','success','warning','inherit','paper','content','divider','selected','focus','transparent'])}
        <Block color='alt' bgColor='main'>alt</Block>
      </Container>
    </App>
  );
}
`}
            githubLocation={`mocoolka-ui-compontents/docs/src/docs/color/BgColorHover.tsx`}
          />
            

            <Markdown
            key={8}
            text={`

## Color Palette Hover

`}
          />
            

            <Demo
            key={9}
            js={colorpalette}
            raw={`import * as React from 'react';
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
`}
            githubLocation={`mocoolka-ui-compontents/docs/src/docs/color/Palette.tsx`}
          />
            
        </Content>
      </App>
    );
  }
