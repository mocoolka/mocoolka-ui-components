/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import { merge } from 'mocoolka-fp/lib/object';
import * as React from 'react';
import { Component } from 'react';
import { ButtonProps } from './type';
import { BaseButton, ButtonSubtitle, ButtonTitle } from './styles';
import { Container } from '../Base';
const defaultProps = {
  disabled: false,
  iconRight: false,
  stopPressPropagation: false,
  size: 'large',
  type: 'flat',

};
/**
 * Buttons communicate the action that will occur when the user touches them.
 */
export const Button = class extends Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    props = merge({}, defaultProps, props);
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  public _handleClick(event: React.MouseEvent<{}>) {

    if (!this.props.disabled) {
      if (this.props.stopPressPropagation) { event.stopPropagation(); }
      if (this.props.onPress) {
        this.props.onPress(event);
      }
    }
  }

  public render() {
    const { text, subtitle, icon, disabled, iconRight, ...others } = this.props;
    const subtitleElement =
      this.props.text && this.props.subtitle ? (
        <ButtonSubtitle >
          {subtitle}
        </ButtonSubtitle>)
        : null;

    const buttonText = text ? (
      <Container >
        {subtitleElement}
        <ButtonTitle >
          {text}
        </ButtonTitle>
      </Container>)
      : null;

    const buttonIcon = icon ?
      <this.props.icon disabled={disabled} />
      : null;
    const contents =  buttonText && buttonIcon ? 'both' : buttonText ? 'text' : 'icon';
    return (
      <BaseButton
        onClick={this._handleClick}
        {...others}
        disabled={disabled}
        contents={contents}
        flexDirection={iconRight ? 'row-reverse' : 'row'}
      >
        {buttonIcon}
        {buttonText}
      </BaseButton>
    );
  }
};
