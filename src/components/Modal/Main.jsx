import React, { Component } from 'react';

import './Modal.css';

export default class Modal extends Component {
  render() {
    const closedClass = this.props.opened ? '' : ' closed';

    return (
      <div className={`modal-overlay${closedClass}`}>
        <div className="modal">
          <button className="modal-close" onClick={this.props.onClose}>
            &times;
          </button>
          { this.props.children }
        </div>
      </div>
    );
  }
}
