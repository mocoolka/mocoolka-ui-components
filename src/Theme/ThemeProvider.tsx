'use strict';
import { isPlainObject } from 'mocoolka-fp/lib/predicate';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { TTheme, ThemeMixed } from './type';
import { Broadcast, createBroadcast } from './utils';
import {
    buildTheme,
  //  composeMocoolkaTheme,
    //buildCommonTheme,
} from './helper';
const baseTheme=buildTheme();
export const defaultThemeBroadcast: Broadcast = createBroadcast(
    baseTheme,
);
export const CHANNEL = `__mocoolka_theme__`;

export const CONTEXT_CHANNEL_SHAPE = PropTypes.shape({
    getTheme: PropTypes.func,
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func,
});
export type CONTEXT_CHANNEL_SHAPE = {
    getTheme: (mixed: ThemeMixed) => TTheme,
    subscribe: Function,
    unsubscribe: Function,
};
const defaultProps = {

};
export interface IThemeProviderProps {
    light?: boolean;
    theme?: ThemeMixed ;
}
export type themeFunctionType = (outerTheme: TTheme) => TTheme;

export interface IThemeProviderState {
    theme: TTheme;
}
export class ThemeProvider extends React.Component<IThemeProviderProps, IThemeProviderState> {

    public static childContextTypes: {
        [CHANNEL]: CONTEXT_CHANNEL_SHAPE,
    };
    public static defaultProps = defaultProps;
    public static contextTypes: {
        [CHANNEL]: CONTEXT_CHANNEL_SHAPE,
    };
    public outerTheme: TTheme;
    public theme:TTheme;
    public broadcast: Broadcast;
    public unsubscribeToOuterId: number = -1;

    private unsubscribeDefaultTheme: number = -1;
    constructor(prop: IThemeProviderProps, context: {}) {
        super(prop, context);
        this.theme=buildTheme(prop.theme);
            this.state = { theme: baseTheme };
        this.getTheme = this.getTheme.bind(this);

        this.broadcast = createBroadcast(this.getTheme());
        this.updateTheme = this.updateTheme.bind(this);
    }
    public getChildContext() {
        return {
            ...this.context,
            [CHANNEL]: {
                getTheme: this.getTheme,
                subscribe: this.broadcast.subscribe,
                unsubscribe: this.broadcast.unsubscribe,
            },
        };
    }

    public componentWillMount() {

        const outerContext = this.context[CHANNEL];
        if (outerContext !== undefined) {
            this.unsubscribeToOuterId = outerContext.subscribe((theme: TTheme) => {
                this.outerTheme = theme;

                if (this.broadcast !== undefined) {
                    this.publish(this.props.theme);
                }
            });
        }
        this.broadcast = createBroadcast(this.getTheme());
        this.unsubscribeDefaultTheme = defaultThemeBroadcast.subscribe(
            this.updateTheme
        );
    }

    public componentWillReceiveProps(nextProps: IThemeProviderProps) {
        if (this.props.theme !== nextProps.theme) {

            this.publish(nextProps.theme);
            this.updateTheme();

        }

    }
    public componentWillUnmount() {

        if (this.unsubscribeToOuterId !== -1) {
            this.context[CHANNEL].unsubscribe(this.unsubscribeToOuterId);
        }
        if (this.unsubscribeDefaultTheme !== -1) {
            defaultThemeBroadcast.unsubscribe(this.unsubscribeDefaultTheme);
        }
    }

    public updateTheme() {
        this.setState({ theme: this.getTheme() });

    }
    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
    public getTheme(passedTheme?: ThemeMixed): TTheme {
        const theme = passedTheme || this.props.theme;
        if (theme && !isPlainObject(theme) ) {
            throw new Error(
                '[ThemeProvider] Please make your theme prop a plain object'
            );
        }
        this.theme=buildTheme(theme);
        return this.theme;

    }
    public publish(theme: ThemeMixed ) {
        this.broadcast.publish(this.getTheme(theme));
    }
    public render() {
        return (
            <StyledThemeProvider theme={this.state.theme}>
                {this.props.children}
            </StyledThemeProvider>
        );
    }

}
