import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateJobs, collectJobRewards, addItem } from 'reducers/sayluaReducer';
import { activeJobsWithSpritesSelector } from 'reducers/selectors';
import SpritePortrait from 'components/SpritePortrait';
import Button from 'components/Button';
import Sprite from 'models/Sprite';
import Item from 'models/Item';
import Job from 'models/Job';

// 1 minute per job tick. In milliseconds because I like being confusing.
const TICK_LENGTH_MS = 1 * 1000;

const mapStateToProps = state => ({
  activeJobsWithSprites: activeJobsWithSpritesSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateJobs: activeJobs => dispatch(updateJobs(activeJobs)),
    collectJobRewards: jobIndex => dispatch(collectJobRewards(jobIndex)),
    addItem: (itemId, count) => dispatch(addItem(itemId, count)),
  };
};

class SpriteJobView extends Component {
  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.tickTimeout);
  }

  tick() {
    let jobUpdated = false;
    const updatedJobs = this.props.activeJobsWithSprites.map((jobEntry) => {
      const lastTickDiff = Date.now() - (jobEntry.lastTick * 1000);
      const ticks = Math.floor(lastTickDiff / TICK_LENGTH_MS);
      if (ticks > 0) {
        jobUpdated = true;

        // Round last tick down to the last tick length to avoid drifting.
        const lastTick = Math.floor((Math.floor(Date.now() / TICK_LENGTH_MS) * TICK_LENGTH_MS) / 1000);
        return Object.assign({}, jobEntry, {
          rewardQuantity: jobEntry.rewardQuantity + ticks,
          lastTick,
        });
      }
      return jobEntry;
    });
    if (jobUpdated) {
      this.props.updateJobs(updatedJobs);
    }
    const now = Date.now();
    const nextTick = TICK_LENGTH_MS - (now % TICK_LENGTH_MS);
    this.tickTimeout = setTimeout(this.tick.bind(this), nextTick);
  }

  collectReward(jobIndex) {
    const jobEntry = this.props.activeJobsWithSprites[jobIndex];
    const job = Job.fromId(jobEntry.jobId);
    this.props.addItem(job.perTick, jobEntry.rewardQuantity);
    this.props.collectJobRewards(jobIndex);
  }

  render() {
    const props = this.props;
    return (
      <div id="sprite-job-section" className="sidebar-section">
        {
          props.activeJobsWithSprites.map((jobEntry, i) => {
            const sprite = jobEntry.sprite;
            const job = Job.fromId(jobEntry.jobId);
            return (
              <div className="sprite-job-entry" key={sprite.id}>
                <Link to={Sprite.url(sprite)}>
                  <SpritePortrait
                    className="sprite-job-portrait"
                    imageUrl={Sprite.imageUrl(sprite)}
                    name={sprite.name}
                    portraitCoordinates={Sprite.species(sprite).portraitCoordinates}
                  />
                </Link>
                <div>
                  <Link to={Sprite.url(jobEntry.sprite)}>
                    { sprite.name }
                  </Link>
                  <br />{ job.name }
                  <br />Rewards: {jobEntry.rewardQuantity} { Item.fromId(job.perTick).name }
                  <br /><Button subtle onClick={this.collectReward.bind(this, i)}>Collect</Button>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpriteJobView);
