import React from 'react';
import Toggle from './Toggle';
import additions from './additions';

const { MyButton, MyEventButton } = additions;

const App = () =>
  (
    <div className='app-container'>
      <Toggle
        onToggle={on => on ? this.myBtn.focus() : null}
      >
        <b>
          <Toggle.On> It's on :)</Toggle.On>
        </b>
        <small>
          <Toggle.Off> It's off ¯\_(ツ)_/¯</Toggle.Off>
        </small>
        <Toggle.Button />
        <hr/>
        <MyButton
          innerRef={myBtn => (this.myBtn = myBtn)}
        />
        <hr/>
        <MyButton.ToggleMessage />

      </Toggle>
    </div>
  );

export default App;