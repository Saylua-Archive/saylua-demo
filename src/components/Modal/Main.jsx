import React, { Component } from 'react';

import './Modal.css';

export default class Modal extends Component {
  closeOnOutsideClick(evt) {
    // Only accept clicks on the actual overlay and not its children.
    if (evt.target !== evt.currentTarget) return;
    this.props.onClose();
  }

  render() {
    const closedClass = this.props.opened ? '' : ' closed';

    return (
      <button className={`modal-overlay${closedClass}`} onClick={this.closeOnOutsideClick.bind(this)}>
        <div className="modal">
          <button className="modal-close" onClick={this.props.onClose}>
            &times;
          </button>
          { this.props.children }
        </div>
      </button>
    );
  }
}
