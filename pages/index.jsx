import * as React from 'react';
import { buildTheme, Base } from '../src';
import { ThemeProvider } from 'styled-components';
// const mixtheme = { properties: { bgColorT__accent: { backgroundColor: '#f50057', color: 'rgba(0, 0, 0, 0.87)' } } };
const theme = buildTheme();
export default () => (<ThemeProvider theme={theme}>
    <div>
      <div>
        <Base mkstyle={{ width: 100, height: 100, color: 'red', backgroundColor: 'green' }}/>
      </div>
      <div>
        <Base color="main" mkstyle={{ width: 100, height: 100, backgroundColor: 'pink' }}>
          hello
        </Base>
      </div>
      <div>
        <Base bgColor="accent" mkstyle={{ width: 100, height: 100 }}>
          hello
        </Base>
      </div>
    </div>
  </ThemeProvider>);
//# sourceMappingURL=index.jsx.map