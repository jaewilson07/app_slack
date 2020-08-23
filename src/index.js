import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import { StateProvider } from './state/state-provider';
import { initialState, reducer } from './state/reducer';

window.addEventListener('resize', () => {
  console.log(window.innerHeight);
  document
    .querySelector(':root')
    .style.setProperty('--vh', window.innerHeight / 100 + 'px');
  console.log('set size', window.innerHeight);
});

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
