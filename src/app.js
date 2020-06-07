import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainElem from './components/MainElem';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('root');

  ReactDOM.render(
    (
      <Provider store={store}>
        <MainElem />
      </Provider>
    ),
    rootDiv
  );
});
