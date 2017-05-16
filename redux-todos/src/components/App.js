import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionTodos from '../actions/todos';

import Main from './Main';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    comments: state.comments,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionTodos, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
