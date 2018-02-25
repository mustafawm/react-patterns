import React from 'react';
import Toggle from './Toggle';
import additions from './additions';

const { MyButton, MyEventButton } = additions;

const App = () =>
  (
    <div className='app-container'>
      <Toggle
        onToggle={on => console.log('toggle', on)}
      >
        <b>
          <Toggle.On> It's on :)</Toggle.On>
        </b>
        <small>
          <Toggle.Off> It's off ¯\_(ツ)_/¯</Toggle.Off>
        </small>
        <Toggle.Button />
        <hr/>
        <MyButton />
        <hr/>
        <MyEventButton
          evt='onClick'
          on={e => alert(e.type)}
        />
      </Toggle>
    </div>
  );

export default App;