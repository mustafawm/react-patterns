import React from 'react';
import Switch from './Switch';


export default function ToggleButton({on, toggle, ...props}) {
  return (
    <Switch on={on} onClick={toggle} {...props} />
  );
}