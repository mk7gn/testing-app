import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import store from './configureStore';

ReactDom.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
