import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const initalState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children }) => {
  const store = createStore(
    reducers,
    initalState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
