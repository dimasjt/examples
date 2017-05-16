import React, { Component } from 'react';

import Menu from './Menu';
import Canvas from './Canvas';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      menuActive: 'normal',
    };
  }
  changeMenu = (menu) => {
    this.setState({
      menuActive: menu,
    });
  }
  renderContent() {
    if (this.state.menuActive === 'normal') {
      return <Canvas />
    } else {
      return <h1>Menu not found</h1>
    }
  }
  render() {
    return (
      <div>
        {this.state.menuActive}
        <Menu changeMenu={this.changeMenu} {...this.state} />
        {this.renderContent()}
      </div>
    );
  }
};

