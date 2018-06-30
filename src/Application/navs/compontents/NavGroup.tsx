
import * as React from 'react';
import { List, Group, GroupTitle } from '../../../Nav';
import { MNavProp } from '../../model';

export interface INavGroupState {
  isChildrenVisible: boolean;
}
export class NavGroup extends React.Component<MNavProp & { isChildrenVisible: boolean }, INavGroupState> {

  public static displayName = 'NavGroup';
  constructor(props: MNavProp & { isChildrenVisible: boolean }) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this.state = {
      isChildrenVisible: props.isChildrenVisible,
    };
  }

  public _handleClick() {
    this.setState({ isChildrenVisible: !this.state.isChildrenVisible });
  }

  public render() {
    return (
      <Group>
        <GroupTitle onClick={this._handleClick}>
          {this.props.title}
        </GroupTitle>
        <List visibility={this.state.isChildrenVisible ? 'none' : undefined}>
          {this.props.children}
        </List>
      </Group>
    );

  }
}
