import * as React from 'react';
import { Container, Block } from 'mocoolka-ui-components/lib/Base';
import { App } from 'mocoolka-ui-components/lib/App';

export default () => {
  return (
    <App>
      <Container layout='col'>
        <Block>1</Block>
        <Block>2</Block>
        <Block>3</Block>
      </Container>
      <Container layout='row'>
        <Block>1</Block>
        <Block>2</Block>
        <Block>3</Block>
      </Container>
    </App>
  );
}

