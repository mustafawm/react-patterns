import {
  any,
  bool,
} from 'prop-types';
import withToggle from './withToggleContextHoc';

const ToggleOff = ({ children, toggle: { on } }) => on ? null : children;

ToggleOff.propTypes = {
  on: bool,
  children: any,
};

ToggleOff.defaultProps = {
  on: false,
  children: null,
};

export default withToggle(ToggleOff);