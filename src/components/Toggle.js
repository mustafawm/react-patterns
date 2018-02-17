import React from 'react';
import {
  func,
} from 'prop-types';
import Switch from './Switch';


export default class Toggle extends React.Component {
  state = {on: false};

  toggle = () => {
    this.setState(
      ({on}) => ({on: !on}),
      () => {
        this.props.onToggle(this.state.on)
      },
    );
  };

  render() {
    const {on} = this.state

    return (
      <Switch on={on} onClick={this.toggle} />
    );
  }
}


Toggle.propTypes = {
  onToggle: func
};

Toggle.defaultProps = {
  onToggle: ()=>{}
};