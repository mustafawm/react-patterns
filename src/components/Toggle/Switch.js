import React from 'react';

export default function Switch({on, className = '', ...props}) {
  return (
    <div className="toggle">
      <input className="toggle-input" type="checkbox" />

      <button
        {...props}
        aria-expanded={on}
        className={`${className} toggle-btn ${on ? 'toggle-btn-on' : 'toggle-btn-off'}`}
      />
    </div>
  );
}