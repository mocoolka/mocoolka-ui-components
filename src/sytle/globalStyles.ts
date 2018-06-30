import { injectGlobal } from 'styled-components';
export const injectGlobalStyle = () => {
   /* tslint:disable */
  injectGlobal`
    html {
      overflow-x: hidden;
    }

    body {
      background-color: #fafafa;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
      -webkit-text-size-adjust: 100%;
      text-rendering: optimizeLegibility;
      line-height: 1;
    }
    a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  `;
};

