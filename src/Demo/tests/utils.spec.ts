import { getContents,getTitle,getHeaders } from '../utils'
import * as fs from 'fs';
import * as path from 'path';
const markdown = fs.readFileSync(path.resolve(__dirname, 'test.md'), { encoding: 'utf8' });

describe('demo utils', () => {

    it('getContents', () => {
        const result = [
`

# App Bar

The [App bar](https://material.io/guidelines/layout/structure.html#structure-app-bar), formerly known as the action bar in Android, is a special kind of toolbar that’s used for branding, navigation, search, and actions.

## Simple App bar

`,
 `"demo": "pages/demos/app-bar/SimpleAppBar.js"`,
 `

## App bar with buttons

`, `"demo": "pages/demos/app-bar/ButtonAppBar.js"`, `

## App bar with menu

`, `"demo": "pages/demos/app-bar/MenuAppBar.js"`]
        expect(getContents(markdown)).toEqual(result)
    });
    it('getTitle', () => {
        expect(getTitle(markdown)).toEqual('App Bar')
    });
    it('getHeaders', () => {
        expect(getHeaders(markdown)).toEqual({"components": ["AppBar", "Toolbar"]})
    });
});