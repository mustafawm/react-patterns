import React from 'react';
import Toggle from './Toggle';

const App = () =>
  (
    <div className='app-container'>
      <Toggle
        onToggle={on => console.log('toggle', on)}
      >
        <h2>
          <Toggle.On> It's on :)</Toggle.On>
        </h2>
        <Toggle.Button />
        <small>
          <Toggle.Off> It's off :( </Toggle.Off>
        </small>
      </Toggle>
    </div>
  );

export default App;