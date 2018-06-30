import * as React from 'react';
import {
    injectGlobalStyle, ThemeProvider, buildTheme, Markdown,Base as B
} from '../../';
injectGlobalStyle();
import {Edit} from './components/Markdown';
const theme = buildTheme();
const {Base} =B;
export default () => (
    
    <Edit/>
);