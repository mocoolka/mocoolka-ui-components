import * as React from 'react';
import { buildTheme } from '../src/';
import { ThemeProvider } from 'styled-components';
import { Nav, injectGlobalStyle } from '../src';
injectGlobalStyle();

const theme = buildTheme();
export default () => (
    <ThemeProvider theme={theme}  >
        <Nav.Nav >
            <Nav.Group>
                <Nav.GroupTitle>
                    Css
                </Nav.GroupTitle>
                <Nav.List>
                    <Nav.Item selected > Color  </Nav.Item>
                    <Nav.Item > Border  </Nav.Item>
                    <Nav.Item > Box  </Nav.Item>
                </Nav.List>
            </Nav.Group>
            <Nav.Group>
                <Nav.GroupTitle>
                    Html
                </Nav.GroupTitle>
                <Nav.List>
                    <Nav.Item > Div  </Nav.Item>
                    <Nav.Item > Span  </Nav.Item>
                    <Nav.Item > Headerline  </Nav.Item>
                </Nav.List>
            </Nav.Group>
        </Nav.Nav>
    </ ThemeProvider >
);
