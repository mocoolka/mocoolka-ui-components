/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { MaskModal } from '../Base';
import { Root } from './styles';
import { ThemeProvider} from '../Theme';

interface IAppPageState {
  navOpened: boolean;

}
export const App =
  class extends React.Component<{ title: string }, IAppPageState> {
    state: IAppPageState = {
      navOpened: false,
    };
    handleOpenNav = () => {
      this.setState({ navOpened: !this.state.navOpened });
    }
    render() {
      const { children, title } = this.props;
      return (
        <ThemeProvider>
          <Root bgColor='content'>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            {children}
            <MaskModal isOpen={this.state.navOpened} onClick={this.handleOpenNav} />
          </Root>
        </ThemeProvider>

      );
    }
  };
