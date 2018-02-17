import React from 'react';
import Toggle from './Toggle';

const App = () =>
  (
    <div className='app-container'>
      <Toggle
        onToggle={on => console.log('toggle', on)}
      >
        <Toggle.On> It's on :)</Toggle.On>
        <Toggle.Off> It's off :( </Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );

export default App;