import React, { Component } from 'react';
import * as Mousetrap from 'mousetrap';

export default class ChoiceButton extends Component {
  componentDidMount() {
    Mousetrap.bind(this.props.index, this.props.onClick);
  }
  componentWillUnmount() {
    Mousetrap.unbind(this.props.index);
  }
  render() {
    return (
      <div
        key={this.props.desc}
        className="choice"
        role="button"
        tabIndex={0}
        onClick={this.props.onClick}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            this.props.onClick();
          }
        }}
      >
        {this.props.desc}
      </div>
    );
  }
}
