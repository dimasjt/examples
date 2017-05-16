import React, { Component } from 'react';

export default class Menu extends Component {
  changeMenu = (menu) => {
    this.props.changeMenu(menu)
  }
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <nav>
          <a onClick={this.changeMenu.bind(null, 'normal')}>Normal</a>
          <a onClick={this.changeMenu.bind(null, 'accelator')}>Accelator</a>
        </nav>
      </div>
    );
  }
};
