import React from 'react';
import {
  any,
  func,
  object,
} from 'prop-types';
import {
  TOGGLE_CONTEXT,
} from '../_CONSTANTS';
import ToggleOn from './ToggleOn';
import ToggleOff from './ToggleOff';
import ToggleButton from './ToggleButton';


export default class Toggle extends React.Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static childContextTypes = {
    [TOGGLE_CONTEXT]: object.isRequired,
  };

  state = { on: false };

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle,
      },
    };
  }

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
    return (<span>{this.props.children}</span>);
  }
}

Toggle.propTypes = {
  onToggle: func,
  children: any,
};

Toggle.defaultProps = {
  onToggle: ()=>{},
  children: null,
};