import React from 'react';
import {
  shape,
  bool,
  func,
  string,
} from 'prop-types';
import withToggle from './withToggleContextHoc';

const ToggleButton = ({ toggle: { on, toggle }, className, ...props }) =>
  <div className='toggle'>
    <input className='toggle-input' type='checkbox' />

    <button
      {...props}
      onClick={toggle}
      aria-expanded={on}
      className={`${className} toggle-btn ${on ? 'toggle-btn-on' : 'toggle-btn-off'}`}
    />
  </div>

ToggleButton.propTypes = {
  toggle: shape({
    on: bool,
    toggle: func,
  }),
  className: string,
};

ToggleButton.defaultProps = {
  toggle: {
    on: false,
    toggle: ()=>{},
  },
  className: '',
};


export default withToggle(ToggleButton);