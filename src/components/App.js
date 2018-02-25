import React from 'react';
import Toggle from './Toggle';
import withToggle from './Toggle/withToggleContextHoc';

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
        <CustomButton/>
      </Toggle>
    </div>
  );

export default App;


const CustomButton = withToggle(
  ({ on, toggle }) => {
  console.log(on, toggle);
  return <button onClick={toggle}>
    {on ? 'on' : 'off'}
  </button>
})