import React, { Component } from 'react';

import styles from '../css/styles';

export default class Main extends React.Component {
  handleSearch(e) {
    let query = e.target.value;
    this.props.searchTodos(query);
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="search todos..."
            onKeyUp={this.handleSearch.bind(this)}
            style={styles.input}
          />
        </form>
      </div>
    );
  }
};
