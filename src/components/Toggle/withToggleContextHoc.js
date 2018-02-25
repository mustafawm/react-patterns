import React from 'react';
import {
  object,
} from 'prop-types';
import { TOGGLE_CONTEXT } from './../_CONSTANTS';

export default function withToggle(Component) {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT];

    return (<Component toggle={toggleContext} {...props} />);
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: object.isRequired,
  };

  return Wrapper;
};