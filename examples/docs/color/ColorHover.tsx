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
