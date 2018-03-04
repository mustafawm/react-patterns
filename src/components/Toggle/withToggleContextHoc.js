import React from 'react';
import {
  object,
} from 'prop-types';
import { TOGGLE_CONTEXT } from './../_CONSTANTS';

export default function withToggle(Component) {
  function Wrapper({innerRef, ...props}, context) {
    const toggleContext = context[TOGGLE_CONTEXT];

    return (<Component
      toggle={toggleContext}
      ref={innerRef}
      {...props}
    />);
  }

  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`;

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: object.isRequired,
  };

  Wrapper.WrappedComponent = Component;

  return Wrapper;
};