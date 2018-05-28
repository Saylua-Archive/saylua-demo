import React, { Component } from 'react';

import './Modal.css';

export default class Modal extends Component {
  close() {
    this.props.closed = true;

    const onClose = this.props.onClose;
    if (onClose) {
      onClose();
    }
  }

  open() {
    this.props.closed = false;
  }

  render() {
    const closedClass = this.props.closed ? ' closed' : '';
    const closeFunction = this.close.bind(this);

    return (
      <div className={`modal-overlay${closedClass}`}>
        <div className="modal">
          <button className="modal-close" onClick={closeFunction}>
            &times;
          </button>
          { this.props.children }
        </div>
      </div>
    );
  }
}
