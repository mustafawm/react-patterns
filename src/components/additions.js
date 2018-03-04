import React from 'react';
import withToggle from './Toggle/withToggleContextHoc';


class MyButton extends React.Component {
  focus = () => this.button.focus();

  render() {
    const { toggle: {on, toggle} } = this.props;

    return (
      <button
        onClick={toggle}
        ref={button => (this.button = button)}
      >
        {on ? 'on' : 'off'}
      </button>
    )
  }
}


const MyEventButton = ({ evt, on, toggle }) => {
  const props = {[evt]: on};

  return toggle.on ? <button {...props}> Fire off event: {evt} </button> : null ;
};


export default {
  MyButton: withToggle(MyButton),
  MyEventButton: withToggle(MyEventButton),
};
