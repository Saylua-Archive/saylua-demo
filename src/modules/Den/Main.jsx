"use strict";

import React, { Component } from 'react';
import './Den.css';
import SayluaView from '../SayluaView';
import { accompany } from '../../store';
import { connect } from 'react-redux';

const mapStateToProps = ({ companions }) => ({ companions });

const mapDispatchToProps = (dispatch) => {
  return {
    accompany: (companion) => {
      dispatch(accompany(companion));
    }
  }
}

class Den extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let denPets = [];
    for (let i = 0; i < this.props.companions.length; i++) {
      denPets.push(<DenPet
          companion={this.props.companions[i]}
          onClick={() => {
              this.props.accompany(this.props.companions[i]);
            }
          }
        />)
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
  return (
    <div onClick={props.onClick}>
      <img className="denPet" src={"/img/pets/" + props.companion.species + "/common.png"} />
      <div>{props.companion.name}</div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Den);
