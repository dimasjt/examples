import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCounter from '../actions/counter';

import Main from './Main';

const mapStateToProps = (state) => {
  return {
    counter: state,
    menu: state.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCounter, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
