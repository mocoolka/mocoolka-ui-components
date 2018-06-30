import * as React from 'react';
import { buildTheme } from '../src/';
import { ThemeProvider } from 'styled-components';
import { Book } from '../src';
const content = {
    title: '材料动效',
    intro: {
        description: '在 Material Design 的世界中，动效用于描述空间关系、功能以及提供优雅流畅的交互效果。',
    },
};
const theme = buildTheme();
export default () => (<ThemeProvider theme={theme}>
        <Book page={content}/>

    </ThemeProvider>);
//# sourceMappingURL=book.jsx.map