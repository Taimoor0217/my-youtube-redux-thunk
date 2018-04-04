import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import debounce from 'redux-debounced';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(), 
  applyMiddleware(debounce(), reduxThunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);