import { combineReducers } from 'redux';

import comments from './comments';
import todos, { search } from './todos';

const combinedReducers = combineReducers({
  todos,
  comments,
  search,
});


export default combinedReducers;
