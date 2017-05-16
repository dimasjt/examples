import React, { Component } from 'react';
import reactCSS from 'reactcss';

import Search from './Search';
import Todos from './Todos';
import AddTodo from './AddTodo';

const styles = reactCSS({
  'default': {
    container: {
      margin: '0 auto',
      width: '40%',
      marginTop: '100px',
    },
  },
});

export default class Main extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Search {...this.props} />
        <AddTodo {...this.props} />
        <Todos {...this.props} />
      </div>
    );
  }
};
