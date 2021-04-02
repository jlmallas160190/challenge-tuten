import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from 'config/store';
import Main from 'base/themes/Main';

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={Main} />
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);
