import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Companion from 'models/Companion';
import SayluaView from 'components/SayluaView';
import NotFound from 'modules/Error/NotFound';

import './SpriteProfile.css';

const mapStateToProps = ({ activeCompanion, companions }) =>
  ({
    activeCompanion,
    companions,
  });

class SpriteProfile extends Component {
  render() {
    const soulName = this.props.match.params.soulName.toLowerCase();

    let companion = this.props.companions.find(c => (c.soulName === soulName));

    if (!companion) {
      return <NotFound />;
    } else {
      companion = new Companion(companion);
    }

    return (
      <SayluaView title={`${companion.name}'s Profile`}>
        <h1>{companion.fullName()}</h1>
        <div id="pet-room">
          <div className="pet-room-background" style={{ backgroundImage: 'url(/img/backgrounds/luaria.jpg)' }} />
          <div className="pet" id="pet-image-container">
            <img src={companion.imageUrl()} alt={companion.name} />
          </div>
        </div>
        <div className="pet-actions">
          <button className="subtle-button" />
        </div>

        <div className="pet-profile-column pet-profile-column-full">
          <div className="pet-profile-box">
            <h2>About { companion.name }</h2>
            { companion.description }
          </div>
        </div>
        <div className="pet-profile-info">
          <div className="pet-profile-column">
            <div className="pet-profile-box">
              <h2>{ companion.name }&#39;s Stats</h2>
              <table>
                <tr>
                  <td>Guardian</td>
                  <td><Link to="/user/tiff/">Tiff</Link></td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{ companion.name }</td>
                </tr>
                <tr>
                  <td>Soul Name</td>
                  <td>{ companion.soulName }</td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td><Link to={companion.species.url()}>{ companion.species.name }</Link></td>
                </tr>
                <tr>
                  <td>Coat</td>
                  <td><Link to={companion.coat.url()}>{ companion.coat.name() }</Link></td>
                </tr>
                <tr>
                  <td>Bonding Day</td>
                  <td>{ companion.bondingDay }</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </SayluaView>
    );
  }
}

export default connect(mapStateToProps)(SpriteProfile);
