import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counter from './reducers/counter';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f => f)
);

const reduxMiddleware = applyMiddleware(thunk);

const store = createStore(counter, enhancers, reduxMiddleware);

export default store;
