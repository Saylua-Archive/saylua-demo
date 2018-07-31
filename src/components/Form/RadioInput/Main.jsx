import React, { Component } from 'react';

import './RadioInput.css';


export default class RadioInput extends Component {
  render() {
    return (
      <input
        {...this.props}
        className="saylua-radio"
        type="radio"
      />
    );
  }
}
