import {
  any,
  bool,
} from 'prop-types';

const ToggleOn = ({on, children}) => on ? children : null;

ToggleOn.propTypes = {
  on: bool,
  children: any,
};

ToggleOn.defaultProps = {
  on: false,
  children: null,
};

export default ToggleOn;