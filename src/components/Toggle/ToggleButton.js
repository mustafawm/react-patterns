import React from 'react';
import {
  bool,
  func,
  shape,
} from 'prop-types';
import {
  TOGGLE_CONTEXT,
} from '../_CONSTANTS';
import Switch from './Switch';

const ToggleButton = (props, context) => {
  const { on, toggle } = context[TOGGLE_CONTEXT];

  return ( <Switch on={on} onClick={toggle} {...props} />);
};

ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: shape({
    on: bool,
    toggle: func,
  }).isRequired,
};


export default ToggleButton;