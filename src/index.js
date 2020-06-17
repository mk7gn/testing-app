import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware  } from 'redux';
// import reduxThunk from 'redux-thunk';

import App from './components/App/App';
// import reducers from './reducers';

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <App></App>,
  // <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
