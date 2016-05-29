import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Router, browserHistory } from 'react-router';
import routes from './containers/routes';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const root = (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
);

render(root, document.getElementById('root'));
