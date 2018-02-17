import {
  any,
  bool,
} from 'prop-types';

const ToggleOff = ({on, children}) => on ? null : children;

ToggleOff.propTypes = {
  on: bool,
  children: any,
};

ToggleOff.defaultProps = {
  on: false,
  children: null,
};

export default ToggleOff;