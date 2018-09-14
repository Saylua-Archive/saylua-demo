import React from 'react';
import { connect } from 'react-redux';

import { activeJobsWithSpritesSelector } from 'reducers/selectors';
import SpritePortrait from 'components/SpritePortrait';
import Sprite from 'models/Sprite';

const mapStateToProps = state => ({
  activeJobsWithSprites: activeJobsWithSpritesSelector(state),
});

function SpriteJobsView(props) {
  return (
    <div id="user-info-section" className="sidebar-section">
      {
        props.activeJobsWithSprites.map(jobEntry => (
          <div key={jobEntry.sprite.id}>
            <SpritePortrait
              imageUrl={Sprite.imageUrl(jobEntry.sprite)}
              name={jobEntry.sprite.name}
              portraitCoordinates={Sprite.species(jobEntry.sprite).portraitCoordinates}
            />
            { jobEntry.sprite.name }
          </div>
        ))
      }
    </div>
  );
}

export default connect(mapStateToProps)(SpriteJobsView);
