import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import SayluaView from 'components/SayluaView';
import SpriteSpecies, { speciesList } from 'models/SpriteSpecies';
import SpriteCoat from 'models/SpriteCoat';

import NotFound from 'modules/Error/NotFound';

import './SpeciesView.css';

export default function SpeciesView(props) {
  const speciesParam = props.match.params.species.toLowerCase();
  const species = SpriteSpecies.fromCanonName(speciesParam);
  if (!species) {
    return <NotFound />;
  }

  const zeroIndex = species.id - 1;
  const next = speciesList[(zeroIndex + 1) % speciesList.length];
  const prev = speciesList[((zeroIndex - 1) + speciesList.length) % speciesList.length];

  return (
    <SayluaView title={`The ${species.name}`}>
      <Link to={SpriteSpecies.url(prev)} className="species-prev-link">
        &larr; Prev <img src={SpriteSpecies.imageUrl(prev)} alt={prev.name} />
      </Link>
      <Link to={SpriteSpecies.url(next)} className="species-next-link">
        <img src={SpriteSpecies.imageUrl(next)} alt={prev.name} /> Next &rarr;
      </Link>

      <h1>Species Guide: The {species.name}</h1>
      <div className="breadcrumbs">
        <Link to="/museum" className="breadcrumbs-link">Museum</Link>
        <span className="separator">
          &raquo;
        </span>
        <Link to="/guide/species" className="breadcrumbs-link">Species Guide</Link>
        <span className="separator">
          &raquo;
        </span>
        <Link
          to={SpriteSpecies.url(species)}
          className="breadcrumbs-link breadcrumbs-active"
        >The {species.name}</Link>
      </div>
      <div className="species-view-info">
        <div className="species-view-image">
          <img src={SpriteSpecies.imageUrl(species)} alt={species.name} />
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
          {species.quotes.map(quote => (
            <p>
              {`"${quote.text}" - ${quote.attribution}`}
            </p>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', float: 'left' }}>
        <h2>Discovered {species.name} Coats</h2>
        <div className="coat-grid">
          { SpriteSpecies.coats(species).map(coat => (
            <Link
              key={SpriteCoat.variant(coat).canonName}
              to={`/guide/coats#${SpriteCoat.variant(coat).canonName}`}
              className="coat-grid-item"
            >
              <img src={SpriteCoat.imageUrl(coat)} alt={SpriteCoat.name(coat)} />
              { SpriteCoat.name(coat) }
            </Link>
          ))}
        </div>
      </div>
    </SayluaView>
  );
}
