import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};
import * as React from 'react';
const marked = require('marked');
import { canUseDOM } from '../utils'
import * as prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-jsx';

/* eslint-disable import/no-webpack-loader-syntax */
// const lightTheme = require('prismjs/themes/prism.css');
// const darkTheme = require('prismjs/themes/prism-okaidia.css');
/* eslint-enable import/no-webpack-loader-syntax */

// export { lightTheme, darkTheme };

let styleNode: any;

if (canUseDOM) {
    styleNode = document.createElement('style');
    styleNode.setAttribute('data-prism', 'true');
    if (document.head) {
        document.head.appendChild(styleNode);
    }
}

export const setPrismTheme = (theme: any) => {
    styleNode.textContent = theme;
}
const headerBottom = 30;

const MarkDown = extendBase({
    name: 'MarkDown',
    moduleName: 'markdown',
    tagName: 'div',
    style: {
        selector: [{
            name: '& h1',
            value: {
                component: 'typography.H4',
                mkstyle: {
                    marginBottom: headerBottom,
                    paddingTop: 48,
                },
            },
        }, {
            name: '& h2',
            value: {
                component: 'typography.H5',
                mkstyle: {
                    marginBottom: headerBottom,
                    paddingTop: 48,
                },
            },
        }, {
            name: '& h3',
            value: {
                component: 'typography.H6',
                mkstyle: {
                    marginBottom: headerBottom,
                    paddingTop: 48,
                },
            },
        }, {
            name: '& table',
            value: {
                component: 'table.Root',
            },
        }, {
            name: '& tbody',
            value: {
                component: 'table.TableBody',
            },
        }, {
            name: '& caption',
            value: {
                component: 'table.TableCaption',
            },
        }, {
            name: '& thead',
            value: {
                component: 'table.TableHead',
            },
        }, {
            name: '& tr',
            value: {
                component: 'table.TableRow',
            },
        }, {
            name: '& th',
            value: {
                component: 'table.TableHeadCell',
            },
        }, {
            name: '& td',
            value: {
                component: 'table.TableCell',
            },
        }, {
            name: '& a',
            value: {
                component: 'section.A',
            },
        }, {
            name: '& p',
            value: {
                component: 'section.P',
            },
        }, {
            name: '& em',
            value: {
                component: 'section.P',
                semantic: 'em',
            },
        }, {
            name: '& strong',
            value: {
                component: 'section.P',
                semantic: 'strong',
            },
        }, {
            name: '& blockquote',
            value: {
                component: 'section.Blockquote',
            },
        }, {
            name: '& pre',
            value: {
                component: 'section.Pre',
            },
        }, {
            name: '& ul',
            value: {
                component: 'section.Ul',
            },
        }, {
            name: '& ol',
            value: {
                component: 'section.Ol',
            },
        }, {
            name: '& li',
            value: {
                component: 'section.Li',
            },
        }, {
            name: '& hr',
            value: {
                component: 'section.Hr',
            },
        }],
    },
});
const renderer = new marked.Renderer();

marked.setOptions({
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    sanitize: false,
    silent: false,
    smartLists: false,
    smartypants: false,
    tables: true,
    xhtml: false,
    highlight(code:any, lang:string) {
        let language;
        switch (lang) {
            case 'diff':
                language = prism.languages.diff;
                break;

            case 'css':
                language = prism.languages.css;
                break;

            case 'js':
            case 'jsx':
            default:
                language = prism.languages.jsx;
                break;
        }

        return prism.highlight(code, language);
    },
    renderer,
});
export const Markdown: React.SFC<{ text: string }> = ({ text }) => (
    <MarkDown
        dangerouslySetInnerHTML={{ __html: marked(text) }}
    />
);
