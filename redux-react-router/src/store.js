import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import counter from './reducers/counter';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f => f)
);

const reactRouterMiddleware = routerMiddleware(createHistory());

const reduxMiddleware = applyMiddleware(thunk, reactRouterMiddleware);

const store = createStore(counter, enhancers, router, reduxMiddleware);

export default store;
