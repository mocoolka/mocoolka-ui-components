/* import * as React from 'react';
import {
    Application, injectGlobalStyle,
} from 'mocoolka-ui-components';
import json from './prop.json';
import Link from 'next/link';

injectGlobalStyle();

const model: Application.MDocApp = {
    orgName: 'mocoolka',
    name: 'ui',
    title: 'mocoolka ui',
    navs: [{
        name: 'a', title: 'Group 1', items: [
            { name: 'a1', title: 'item 1' },
            { name: 'a2', title: 'item 2' },
            { name: 'a3', title: 'item 3' },
        ],
    }, {
        name: 'Group 2', items: [
            { name: 'item 1' },
            { name: 'item 2' },
            { name: 'item 3' },
        ],
    }].map(Application.defaultMNavProp),
    pages: [json.module],
};
const Apps = Application.applicationGetter(Link).get(model);

export default () => Apps[0]; */
import * as React from 'react';
import {Page} from './color/prop';
export default Page;
