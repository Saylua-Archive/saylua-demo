import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SpriteCoat, { coatVariantsList } from 'models/SpriteCoat';
import SayluaView from 'components/SayluaView';
import SpriteHeader from 'components/SpriteHeader';

import './CoatGuide.css';

export default class CoatGuide extends Component {
  render() {
    return (
      <SayluaView title="Sprite Coat Guide">
        <h1>Sprite Coat Guide</h1>
        <div className="breadcrumbs">
          <Link to="/museum" className="breadcrumbs-link">Museum</Link>
          <span className="separator">
            &raquo;
          </span>
          <Link to="/species" className="breadcrumbs-link">Species Guide</Link>
          <Link to="/coats" className="breadcrumbs-link breadcrumbs-active">Coat Guide</Link>
        </div>
        Each species of sprite on Saylua can be found in a variety of different
        coats. See them all here!
        {
          coatVariantsList.map((variant) => {
            const coats = SpriteCoat.byVariant(variant.canonName);
            const randomCoat = coats[Math.floor(Math.random() * coats.length)];
            return (
              <div className="coat-guide-list" id={`${variant.canonName}`}>
                <SpriteHeader coat={randomCoat}>
                  <Link to={`#${variant.canonName}`}>{ variant.name } Coats</Link>
                </SpriteHeader>
                {
                  coats.map(coat => (
                    <img src={coat.imageUrl()} alt={coat.fullName()} />
                  ))
                }
              </div>
            );
          })
        }
      </SayluaView>
    );
  }
}
