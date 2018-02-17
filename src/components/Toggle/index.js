import React from 'react';
import {
  any,
  func,
} from 'prop-types';
import ToggleOn from './ToggleOn';
import ToggleOff from './ToggleOff';
import ToggleButton from './ToggleButton';

export default class Toggle extends React.Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  state = { on: false };

  toggle = () => {
    const { on } = this.state;

    this.setState(
      () => ({on: !on}),
      () => {
        this.props.onToggle(on);
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

Toggle.propTypes = {
  onToggle: func,
  children: any,
};

Toggle.defaultProps = {
  onToggle: ()=>{},
  children: {},
};