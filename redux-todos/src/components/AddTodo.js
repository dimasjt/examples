import React, { Component } from 'react';
import reactCSS from 'reactcss';

import css from '../css/styles';

const styles = reactCSS({
  'default': {
    margin: {
      marginTop: '16px',
    },
  },
});

export default class AddTodo extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let newTodo = this.refs.newTodo.value;

    if(newTodo) {
      this.props.addTodo(newTodo);
      this.refs.newTodo.value = null;
    }
  }
  render() {
    return (
      <div style={styles.margin}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            ref="newTodo"
            type="text"
            placeholder="add todo..."
            style={css.input}
          />
        </form>
      </div>
    );
  }
};
