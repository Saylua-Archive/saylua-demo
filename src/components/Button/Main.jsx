import React, { Component } from 'react';

import './Button.css';


export default class Button extends Component {
  render() {
    return (
      <button className={`saylua-button ${this.props.subtle ? 'subtle-button' : ''}`} onClick={this.props.onClick}>
        { this.props.children }
      </button>
    );
  }
}
