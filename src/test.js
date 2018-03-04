import React from 'react';
import ReactDOM from 'react-dom';
import additions from './components/additions';

const { MyButton } = additions;

export default function test() {
  const small = document.createElement('small');
  small.innerHTML = 'test button';

  const div = document.createElement('div');
  document.body.appendChild(div);
  document.body.appendChild(small);

  const toggle = () => (toggle.called = true);

  ReactDOM.render(
    <MyButton.WrappedComponent toggle={{on: true, toggle}} />,
    div
  )

  const button = div.getElementsByTagName(
    'button'
  )[0];

  if ( !button.innerHTML.includes('on') ) {
    throw new Error(`content is wrong: ${button.innerHTML}`);
  } else {
    console.log('%ctest passed' + `%c: ${button.outerHTML} content includes 'on'`,
    'color: yellowgreen', '');
  }

  button.click();

  if ( !toggle.called ) {
    throw new Error('toggle not called!');
  } else {
    console.log('%ctest passed' + '%c: toggle was called',
    'color: yellowgreen', '');
  }
}
