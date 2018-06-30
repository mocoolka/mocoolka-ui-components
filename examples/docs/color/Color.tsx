import * as React from 'react';
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
      <Container layout='row'  flexWrap='wrap'       selector={ [{
            name: '& >div',
            value: {
              layout:'center',
              sm:4,
              md:3,
                mkstyle: {
                    minWidth:40,
                    height:60,
                },
            },
        }]}>
        {props(Block)('color')(colors)}
        <Block color='alt' bgColor='main'>alt</Block>
      </Container>
    </App>
  );
}
