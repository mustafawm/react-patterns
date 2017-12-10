import React from 'react';
import Switch from './Switch';
import ToggleOn from './ToggleOn';
import ToggleOff from './ToggleOff';
import ToggleButton from './ToggleButton';

export default class Toggle extends React.Component {
  state = { on: false };
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static defaultProps = { onToggle: () => {} };

  toggle = () => {
    this.setState(
      ({on}) => ({on: !on}),
      () => {
        this.props.onToggle(this.state.on)
      },
    );
  };

  render() {
    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    );

    return (<span>{children}</span>);
  }
}