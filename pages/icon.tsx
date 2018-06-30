import * as React from 'react';
import { buildTheme } from '../src/';
import { ThemeProvider } from 'styled-components';
import { Icons, Base } from '../src';

const theme = buildTheme();
export default () => (
    <ThemeProvider theme={theme}  >
        <Base width="content" align="center">
            <div>
                <Icons.ArrowForward />
                <Icons.ArrowForward disabled={true} />
                <Icons.ArrowForward size="large" />
                <Icons.ArrowForward size="large" disabled />
                <Icons.ArrowForward size="large" color="main" />
            </div>
            <div>
                <Icons.ArrowForward transform={{ mode: 'horizontal' }} />
                <Icons.ArrowForward transform={{ mode: 'vertical' }} />
                <Icons.ArrowForward transform={{ mode: 'rotate', rotate: 30 }} />
                <Icons.ArrowForward transform={{ mode: 'rotate', rotate: 120 }} />
            </div>
            <div>
                <Icons.ArrowForward flip="horizontal" />
                <Icons.ArrowForward flip="vertical" />
                <Icons.ArrowForward rotate={30} />
                <Icons.ArrowForward rotate={120} />
            </div>

            <div>
                <Icons.ArrowForward border="bordered" />
                <Icons.ArrowForward rounded border="bordered" />

            </div>
        </Base>
    </ ThemeProvider >
);
