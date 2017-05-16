import React, { Component } from 'react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    canvas: {
      border: '2px solid black',
    },
  },
});

export default class Canvas extends Component {
  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.canvasCtx = this.canvas.getContext('2d');
  }
  onMouseDown = (e) => {
    e.preventDefault();

    const rect = this.canvas.getBoundingClientRect();
    const mouse = { x: e.pageX - rect.left, y: e.pageY - rect.top }

    console.log('rect', rect)
    console.log('mouse', mouse)
  }
  render() {
    return (
      <canvas
        ref="canvas"
        width="300"
        height="300"
        style={styles.canvas}
        onMouseDown={this.onMouseDown}
      ></canvas>
    );
  }
};

