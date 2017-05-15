import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import * as actionCounter from '../actions/counter';

import Home from './layouts/Home';
import ShowPhoto from './layouts/ShowPhoto';

const history = createHistory();

// const mapStateToProps = (state) => {
//   return {
//     counter: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actionCounter, dispatch);
// }

const routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/photos/:photoId" component={ShowPhoto} />
  </div>
)

const App = () => {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  )
}

export default App;
