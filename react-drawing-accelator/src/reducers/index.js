import { combineReducers } from 'redux';

import menu from './menu';

const combinedReducers = combineReducers({
  menu,
});

export default combinedReducers;
