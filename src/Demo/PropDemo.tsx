import { withTheme } from 'styled-components';
import {Block, Container} from '../Base';
import { H4 } from '../Typography';
import * as React from 'react';
import { TTheme } from '../Theme/type';
const createProps = (name: string, value: any) => ({
    [name]: value,
});
const PropDemo1: React.SFC<{
    theme: TTheme;
    name: string;
}> = (props) => {

    const { name, theme, ...others } = props;
    const commonProps = theme.props as any;
    const commonName = commonProps[name] ? name : null;
    const content = Object.keys(commonProps[commonName!] as any).map((a: any, index: number) => (
        <Block
            key={index}
            box="container"
            {...others}
            {...createProps(commonName!, a)}
        >
            {a}
        </Block>)
    );
    return commonName ? (
        <Container>
            <H4>{commonName} </H4>
            {content}
        </Container>) : (
        <Container bgColor="alert">
            <Block>{commonName} not found</Block>
        </Container>
        );
};
export const PropDemo = withTheme(PropDemo1);
