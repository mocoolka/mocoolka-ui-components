import React from 'react';
/* import LZString from 'lz-string';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import CodeIcon from 'material-ui-icons/Code';
import Tooltip from 'material-ui/Tooltip';
import Github from 'docs/src/modules/components/GitHub';
import MarkdownElement from 'docs/src/modules/components/MarkdownElement'; */

import { Base,Button,Icons,Markdown} from '../../../';

const  {extendBase }=Base;

const moduleName = 'demo';

export const Root = extendBase({
    name: 'Root',
    moduleName,
    style: {
        mkstyle: {
            marginH: 48,
            marginBottom:40,
        },
    },
});
export const Content = extendBase({
  name: 'Content',
  moduleName,
  style: {
    layout:'center',
      mkstyle: {
        paddingV: 36,
          marginBottom:40,
      },
  },
});
export const Header = extendBase({
  name: 'Header',
  moduleName,
  style: {
      mkstyle: {
        display: 'none',
      },
  },
});
export const Code = extendBase({
  name: 'Code',
  moduleName,
  style: {
      mkstyle: {
        display: 'none',
      },
  },
});

function compress(object) {
  return object;
/*   return LZString.compressToBase64(JSON.stringify(object))
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '=' */
}

export class Demo extends React.Component<{
  githubLocation: string,
  js:any,
  raw: string,
}> {
  state = {
    codeOpen: false,
  };

  codesandboxForm = null;

  handleClickCodeOpen = () => {
    this.setState({
      codeOpen: !this.state.codeOpen,
    });
  };

  handleClickCodesandbox = () => {
    const codesandboxValue = {
      files: {
        'package.json': {
          content: {
            dependencies: {
              react: 'latest',
              'react-dom': 'latest',
              'mocoola-ui-compontents': 'next',
              'react-autosuggest': 'latest',
              'autosuggest-highlight': 'latest',
              downshift: 'latest',
            },
          },
        },
        'demo.js': {
          content: this.props.raw,
        },
        'index.js': {
          content: `
import React from 'react';
import { render } from 'react-dom';
import Demo from './demo';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo />, rootElement);
}
          `,
        },
        'index.html': {
          content: `
<body>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <div id="root"></div>
</body>
            `,
        },
      },
    };

    this.codesandboxForm.querySelector('[name="parameters"]').value = compress(codesandboxValue);
    this.codesandboxForm.submit();
  };

  render() {
    const {   githubLocation, js: DemoComponent, raw } = this.props;
    const { codeOpen } = this.state;

    return (
      <Root>
        <Header>
          <form
            ref={node => {
              this.codesandboxForm = node;
            }}
            method="post"
            action="https://codesandbox.io/api/v1/sandboxes/define"
            target="_blank"
          >
            <input type="hidden" name="parameters" value="" />
          </form>
          <Button.Button icon={Icons.Eye} href={githubLocation}/>
          <Button.Button icon={Icons.Ok} onClick={this.handleClickCodesandbox} />
          <Button.Button icon={Icons.Menu} onClick={this.handleClickCodeOpen} />
        </Header>
        <Markdown  text={`\`\`\`jsx\n${raw}\n\`\`\``}/>
        <Content>
          <DemoComponent />
        </Content>
      </Root>
    );
  }
}
