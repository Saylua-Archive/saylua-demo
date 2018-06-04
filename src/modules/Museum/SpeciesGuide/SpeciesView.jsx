import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import SayluaView from 'components/SayluaView';
import SpriteSpecies, { speciesList } from 'models/SpriteSpecies';

import NotFound from 'modules/Error/NotFound';

import './SpeciesView.css';

export default class SpeciesView extends Component {
  render() {
    const speciesParam = this.props.match.params.species.toLowerCase();
    const species = SpriteSpecies.fromCanonName(speciesParam);
    if (!species) {
      return <NotFound />;
    }

    const zeroIndex = species.id - 1;
    const next = speciesList[(zeroIndex + 1) % speciesList.length];
    const prev = speciesList[((zeroIndex - 1) + speciesList.length) % speciesList.length];

    return (
      <SayluaView title={`The ${species.name}`}>
        <Link to={prev.url()} className="species-prev-link">
          &larr; Prev <img src={prev.imageUrl()} alt={prev.name} />
        </Link>
        <Link to={next.url()} className="species-next-link">
          <img src={next.imageUrl()} alt={prev.name} /> Next &rarr;
        </Link>

        <h1>Species Guide: The {species.name}</h1>
        <div className="breadcrumbs">
          <Link to="/museum" className="breadcrumbs-link">Museum</Link>
          <span className="separator">
            &raquo;
          </span>
          <Link to="/species" className="breadcrumbs-link">Species Guide</Link>
          <span className="separator">
            &raquo;
          </span>
          <Link to={species.url()} className="breadcrumbs-link">The {species.name}</Link>
        </div>
        <div className="species-view-info">
          <div className="species-view-image">
            <img src={species.imageUrl()} alt={species.name} />
          </div>
          <div>
            <br />Name: {species.name}
            <br />Plural Form: {species.plural}
            <br />
            <br />Average Weight: {species.weightMean} lbs
            <br />Average {species.sizeName}: {species.sizeMean} in
            <p>
              {species.description}
            </p>
          </div>
        </div>

        <div style={{ width: '100%', float: 'left' }}>
          <h2>Discovered {species.name} Coats</h2>
          <div className="coat-grid">
            { species.coats().map(coat => (
              <Link key={coat.variant.canonName} to={`/coats#${coat.variant.canonName}`} className="coat-grid-item">
                <img src={coat.imageUrl()} alt={coat.fullName()} />
                { coat.fullName() }
              </Link>
            ))}
          </div>
        </div>
      </SayluaView>
    );
  }
}
