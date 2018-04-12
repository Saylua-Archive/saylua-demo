import React, { Component } from 'react';

import './SpriteHeader.css';

export default class SpriteHeader extends Component {
  render() {
    const sprite = this.props.sprite;
    return (
      <h2 className="sprite-header">
        <div className="sprite-header-icon">
          <img src={sprite.imageUrl()} alt={sprite.name} title={sprite.name} />
        </div>
        { this.props.children }
      </h2>
    );
  }
}
