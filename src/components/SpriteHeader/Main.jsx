import React, { Component } from 'react';

import './SpriteHeader.css';

export default class SpriteHeader extends Component {
  render() {
    const coat = this.props.coat;
    return (
      <h2 className="sprite-header">
        <div className="sprite-header-icon">
          <img src={coat.imageUrl()} alt={coat.fullName()} title={coat.fullName()} />
        </div>
        { this.props.children }
      </h2>
    );
  }
}
