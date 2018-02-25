import {
  any,
  bool,
} from 'prop-types';
import withToggle from './withToggleContextHoc';


const ToggleOn = ({ children, toggle: { on } }) => on ? children : null;


ToggleOn.propTypes = {
  on: bool,
  children: any,
};

ToggleOn.defaultProps = {
  on: false,
  children: null,
};

export default withToggle(ToggleOn);