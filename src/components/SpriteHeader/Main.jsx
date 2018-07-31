import React, { Component } from 'react';

import './SpriteHeader.css';

export default class SpriteHeader extends Component {
  render() {
    const imageUrl = this.props.imageUrl;
    const title = this.props.title;
    return (
      <h2 className="sprite-header">
        <div className="sprite-header-icon">
          <img src={imageUrl} alt={title} title={title} />
        </div>
        { this.props.children }
      </h2>
    );
  }
}
