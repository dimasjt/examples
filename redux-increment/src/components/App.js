import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCounter from '../actions/counter';

class Main extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment.bind(null, 1)}>Increment</button>
        <button onClick={this.props.decrement.bind(null, 1)}>Decrement</button>
        <br />
        <strong>{this.props.counter}</strong>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCounter, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
