import * as React from 'react';
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
        {props(Block)('bgColor')(['accent','alert','alt','disabled','main','success','warning','inherit','paper','content','divider','selected','focus','transparent'])}
        <Block color='alt' bgColor='main'>alt</Block>
      </Container>
    </App>
  );
}
