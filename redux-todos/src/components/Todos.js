import React, { Component } from 'react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    container: {
      width: '100%',
      marginTop: '16px',
    },
    todos: {
      marginRight: '16px',
    },
    todo: {
      fontSize: '18px',
      padding: '10px',
    },
    delete: {
      float: 'right',
      cursor: 'pointer',
      backgroundColor: 'black',
      borderRadius: '20px',
      padding: '2px 7px',
      fontSize: '12px',
      color: 'white',
    },
  },
  'hover': {
    delete: {
      textDecoration: 'none',
    },
  },
});

export default class Main extends React.Component {
  deleteTodo(id) {
    this.props.deleteTodo(id);
  }
  render() {
    let query = new RegExp(this.props.search);

    const todos = this.props.todos.map((todo) => {
      if (this.props.search == null || query.test(todo.name)) {
        return (
          <li key={todo.id} style={styles.todo}>
            {todo.name}
            <a
              style={styles.delete}
              onClick={this.deleteTodo.bind(this, todo.id)}
            >
              &times;
            </a>
          </li>
        );
      }
    });

    return (
      <div style={styles.container}>
        <ol style={styles.todos}>{todos}</ol>
      </div>
    );
  }
};
