import {
  any,
  bool,
  shape,
} from 'prop-types';
import {
  TOGGLE_CONTEXT,
} from '../_CONSTANTS';

const ToggleOff = ({ children }, context) =>
  context[TOGGLE_CONTEXT].on ? null : children;


ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: shape({ on: bool }).isRequired,
};

ToggleOff.propTypes = {
  on: bool,
  children: any,
};

ToggleOff.defaultProps = {
  on: false,
  children: null,
};

export default ToggleOff;