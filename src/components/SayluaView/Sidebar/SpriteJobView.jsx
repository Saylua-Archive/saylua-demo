import React from 'react';
import { connect } from 'react-redux';

import { activeJobsWithSpritesSelector } from 'reducers/selectors';

const mapStateToProps = state => ({
  activeJobsWithSprites: activeJobsWithSpritesSelector(state),
});

function SpriteJobsView(props) {
  return (
    <div id="user-info-section" className="sidebar-section">
      {
        props.activeJobsWithSprites.map(jobEntry => (
          <div>
            { jobEntry.sprite.name }
          </div>
        ))
      }
    </div>
  );
}

export default connect(mapStateToProps)(SpriteJobsView);
