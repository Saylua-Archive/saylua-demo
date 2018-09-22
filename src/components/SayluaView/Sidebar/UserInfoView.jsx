import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { activeCompanionSelector } from 'reducers/selectors';
import Sprite from 'models/Sprite';
import PetAvatarView from 'components/PetAvatarView';

const mapStateToProps = state => ({
  username: state.sayluaState.username,
  activeCompanion: activeCompanionSelector(state),
});

function UserInfoView(props) {
  const companion = props.activeCompanion;
  const username = props.username;
  return (
    <div id="user-info-section" className="sidebar-section">
      <PetAvatarView companion={companion} username={username} />
      <div className="sidebar-aligner">
        <p>You are <Link to="/user/">{username}</Link></p>
        {companion &&
          <p>
            Your companion is <Link to={Sprite.url(companion)}>{companion.name}</Link>
          </p>
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(UserInfoView);
