import React from 'react';
import Toggle from './Toggle';


export default function App() {
  return (
    <div className='app-container'>
      <Toggle onToggle={on => console.log('toggle', on)} />
    </div>
  );
}