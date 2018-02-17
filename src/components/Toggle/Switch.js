import React from 'react';
import {
  string,
  bool,
} from 'prop-types';

const Switch = ({on, className, ...props}) =>
  (<div className="toggle">
    <input className="toggle-input" type="checkbox" />

    <button
      {...props}
      aria-expanded={on}
      className={`${className} toggle-btn ${on ? 'toggle-btn-on' : 'toggle-btn-off'}`}
    />
  </div>);

Switch.propTypes = {
  on: bool,
  className: string
};

Switch.defaultProps = {
  on: false,
  className: ''
};


export default Switch;