import {
  any,
  bool,
  shape,
} from 'prop-types';
import {
  TOGGLE_CONTEXT,
} from '../_CONSTANTS';

const ToggleOn = ({ children }, context) =>
  context[TOGGLE_CONTEXT].on ? children : null;

ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: shape({ on: bool }).isRequired,
};

ToggleOn.propTypes = {
  on: bool,
  children: any,
};

ToggleOn.defaultProps = {
  on: false,
  children: null,
};

export default ToggleOn;