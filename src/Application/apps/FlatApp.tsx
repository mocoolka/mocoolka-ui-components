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
import { App } from '../../App';
import { MBaseModel } from '../model';
/* export interface IAppPageProps {
  nav: MNavProp[];
  application: { title: string, subtitle?: string };
  pathname: string;
} */

export interface IAppPageState {
    navOpened: boolean;
}

export const FlatApp =
    class extends React.Component<{ model: MBaseModel }, IAppPageState> {
        state: IAppPageState = {
            navOpened: false,
        };
        handleOpenNav = () => {
            this.setState({ navOpened: !this.state.navOpened });
        }
        render() {
            const { children, model } = this.props;
            return (
                <App title={model.title!}>{children}</App>
            );
        }
    };
