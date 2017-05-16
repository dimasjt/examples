import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f => f)
);

const reduxMiddleware = applyMiddleware(thunk);

const store = createStore(reducers, enhancers, reduxMiddleware);

export default store;
