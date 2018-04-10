import React, { Component } from 'react';
import { connect } from 'react-redux';

import Companion from 'models/Companion';
import { accompany } from '../../store';
import SayluaView from 'components/SayluaView';

import './Den.css';

const mapStateToProps = ({ companions }) => ({ companions });

const mapDispatchToProps = (dispatch) => {
  return {
    accompany: (companion) => {
      dispatch(accompany(companion));
    },
  };
};

class Den extends Component {
  render() {
    const denPets = [];
    for (let i = 0; i < this.props.companions.length; i++) {
      denPets.push(<DenPet
        companion={this.props.companions[i]}
        onClick={() => {
          this.props.accompany(this.props.companions[i]);
          }
        }
      />);
    }
    return (
      <SayluaView>
        <h2>Your Den</h2>
        {denPets}
      </SayluaView>
    );
  }
}

function DenPet(props) {
  const companion = new Companion(props.companion);
  return (
    <div
      onClick={props.onClick}
      role="button"
      tabIndex={0}
      className="den-pet"
    >
      <img
        alt={companion.name}
        src={companion.imageUrl()}
      />
      <div>{companion.name} the {companion.coat} {companion.species}</div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Den);
