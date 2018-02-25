import React from 'react';
import {
  bool,
  func,
  string,
} from 'prop-types';
import withToggle from './withToggleContextHoc';

const ToggleButton = ({ on, toggle, className, ...props }) =>
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
  on: bool,
  toggle: func,
  className: string,
};

ToggleButton.defaultProps = {
  on: false,
  toggle: ()=>{},
  className: '',
};


export default withToggle(ToggleButton);