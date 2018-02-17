import React from 'react';
import {
  bool,
  func,
} from 'prop-types';
import Switch from './Switch';

const ToggleButton = ({on, toggle, ...props}) => <Switch on={on} onClick={toggle} {...props} />;

ToggleButton.propTypes = {
  on: bool,
  toggle: func
};

ToggleButton.defaultProps = {
  on: false,
  toggle: () => {}
};


export default ToggleButton;