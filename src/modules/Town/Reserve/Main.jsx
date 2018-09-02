import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSprite } from 'reducers/sayluaReducer';
import { companionsSelector } from 'reducers/selectors';
import { randomChoice, addArticle, capitalizeFirst } from 'utils';
import Button from 'components/Button';
import Sprite from 'models/Sprite';

import SayluaView from 'components/SayluaView';

import './Reserve.css';

const LITTLE_ONE = ['little one', 'cutie pie', 'cutie', 'little friend', 'little darling'];

const mapDispatchToProps = (dispatch) => {
  return {
    adopt: (companion) => {
      dispatch(createSprite(companion, true));
    },
  };
};

const mapStateToProps = state => ({
  companions: companionsSelector(state),
});

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptee: Sprite.create(),
    };
  }

  newAdoptee() {
    this.setState({
      adoptee: Sprite.create(),
    });
  }

  adopt() {
    this.props.adopt(this.state.adoptee);

    // TODO: More flavor!
    window.location.href = Sprite.url(this.state.adoptee);
  }

  render() {
    const adoptee = this.state.adoptee;
    const nowish = Math.round((new Date()).getTime() / 1000);
    const newArrivals = this.props.companions.filter(c => nowish - c.bondingDay < 86400);

    if (newArrivals.length > 0) {
      return (
        <SayluaView title="The Everly Sprite Reserve">
          <h1>The Everly Sprite Reserve</h1>
          <div className="npc-display">
            <div className="speech-bubble">{`It looks like ${newArrivals[0].name} is still getting used
              to their new home. You can adopt another sprite tomorrow though!`}</div>
            <div className="interaction-bust">
              <img src="/img/characters/vera.png" alt="Vera Everly" />
            </div>
          </div>
        </SayluaView>
      );
    }

    if (!adoptee) {
      return (
        <SayluaView title="The Everly Sprite Reserve">
          <h1>The Everly Sprite Reserve</h1>
          <p>
          The reserve is currently empty! Looks like everyone found a new home.
          </p>
          <img className="reserve-npc" src="/img/characters/vera.png" alt="Vera Everly" />
        </SayluaView>
      );
    }

    const cuteTexts = [
      `${adoptee.name} seems fond of you.`,
      `This ${randomChoice(LITTLE_ONE)} really likes you!`,
      `This ${capitalizeFirst(Sprite.species(adoptee).name)} looks like it likes you!`,
      `Have you ever considered adopting ${addArticle(capitalizeFirst(Sprite.species(adoptee).name))}?`,
    ];

    const cuteText = randomChoice(cuteTexts);

    return (
      <SayluaView title="The Everly Sprite Reserve">
        <h1>The Everly Sprite Reserve</h1>
        <div className="npc-display">
          <div className="speech-bubble">{cuteText}</div>
          <div className="interaction-bust">
            <img src="/img/characters/vera.png" alt="Vera Everly" />
          </div>
          <img className="adoptee" src={Sprite.imageUrl(adoptee)} alt={adoptee.name} />
        </div>
        <div className="choices">
          <Button onClick={this.adopt.bind(this)} subtle>
            <img src="/img/icons/heart.png" alt="Adopt" /> Adopt { adoptee.name }
          </Button>
          <Button onClick={this.newAdoptee.bind(this)} subtle>
            Another one, Vera?
          </Button>
        </div>
      </SayluaView>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reserve);
