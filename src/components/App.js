import React from 'react';
import Toggle from './Toggle';

const App = () =>
  (<div className='app-container'>
      <Toggle onToggle={on => console.log('toggle', on)} />
  </div>);

export default App;