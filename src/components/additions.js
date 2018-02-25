import React from 'react';
import withToggle from './Toggle/withToggleContextHoc';


const MyButton = ({toggle: {on, toggle}}) => <button onClick={toggle}>{on ? 'on' : 'off'}</button>


const MyEventButton = ({ evt, on, toggle }) => {
  const props = {[evt]: on};

  return toggle.on ? <button {...props}> Fire off event: {evt} </button> : null ;
};


export default {
  MyButton: withToggle(MyButton),
  MyEventButton: withToggle(MyEventButton),
};
