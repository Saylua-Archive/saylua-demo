import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { accompany } from 'reducers/sayluaReducer';
import {
  spritesBySoulNameSelector,
  activeCompanionSelector,
} from 'reducers/selectors';

import Button from 'components/Button';
import Modal from 'components/Modal';
import Item from 'models/Item';
import Sprite from 'models/Sprite';
import SpriteSpecies from 'models/SpriteSpecies';
import SpriteVariant from 'models/SpriteCoat/SpriteVariant';
import SayluaView from 'components/SayluaView';
import NotFound from 'modules/Error/NotFound';

import './SpriteProfile.css';

const mapStateToProps = state =>
  ({
    activeCompanion: activeCompanionSelector(state),
    spritesBySoulName: spritesBySoulNameSelector(state),
  });

const mapDispatchToProps = (dispatch) => {
  return {
    accompany: (spriteId) => {
      dispatch(accompany(spriteId));
    },
  };
};

class SpriteProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingProfile: false,
    };
  }

  render() {
    const soulName = this.props.match.params.soulName.toLowerCase();
    const sprite = this.props.spritesBySoulName[soulName];
    const companion = this.props.activeCompanion;

    if (!sprite) {
      return <NotFound />;
    }

    return (
      <SayluaView title={`${sprite.name}'s Profile`}>
        <h1>{Sprite.fullName(sprite)}</h1>
        <div id="pet-room">
          <div className="pet-room-background" style={{ backgroundImage: 'url(/img/backgrounds/luaria.jpg)' }} />
          <div className="pet" id="pet-image-container">
            <img src={Sprite.imageUrl(sprite)} alt={sprite.name} />
          </div>
        </div>
        <div className="pet-actions">
          { companion && sprite.id === companion.id ?
            <Button subtle onClick={this.props.accompany.bind(this, 0)}>
              <img src="/img/icons/compass.png" alt="Stop accompanying" />
              Stop accompanying {sprite.name}
            </Button>
            :
            <Button subtle onClick={this.props.accompany.bind(this, sprite.id)}>
              <img src="/img/icons/compass.png" alt="Accompany" />
              Accompany {sprite.name}
            </Button>
          }
          <Button subtle onClick={() => { this.setState({ editingProfile: true }); }}>
            <img src="/img/icons/pencil.png" alt="Edit" />
            Edit Profile
          </Button>
          <Button subtle>
            <img src="/img/icons/briefcase.png" alt="Job" />
            Assign Job
          </Button>
        </div>

        <div className="pet-profile-column pet-profile-column-full">
          <div className="pet-profile-box">
            <h2>About { sprite.name }</h2>
            { sprite.description }
          </div>
        </div>
        <div className="pet-profile-info">
          <div className="pet-profile-column">
            <div className="pet-profile-box">
              <h2>{ sprite.name }&#39;s Stats</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Guardian</td>
                    <td><Link to="/user/tiff/">Tiff</Link></td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{ sprite.name }</td>
                  </tr>
                  <tr>
                    <td>Soul Name</td>
                    <td>{ sprite.soulName }</td>
                  </tr>
                  <tr>
                    <td>Species</td>
                    <td>
                      <Link to={SpriteSpecies.url(Sprite.species(sprite))}>
                        { Sprite.species(sprite).name }
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Coat</td>
                    <td>
                      <Link to={SpriteVariant.url(Sprite.variant(sprite))}>
                        { Sprite.variant(sprite).name }
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Bonding Day</td>
                    <td>{ sprite.bondingDay }</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="pet-profile-column">
            <div className="pet-profile-box">
              <h2>{ sprite.name }&#39;s Favorite Things</h2>
              {
                sprite.favoriteThings.map((thing) => {
                  const item = Item.fromId(thing);
                  return <img src={Item.imageUrl(item)} alt={item.name} />;
                })
              }
            </div>
          </div>
        </div>

        <Modal
          onClose={() => { this.setState({ editingProfile: false }); }}
          opened={this.state.editingProfile}
        >
          <h2>Editing { sprite.name }&#39;s Profile</h2>
        </Modal>
      </SayluaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpriteProfile);
