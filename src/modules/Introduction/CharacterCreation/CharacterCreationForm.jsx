import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector, Field, reduxForm } from 'redux-form';

import { setTheme } from 'SayluaStore';
import InputWithTip from 'components/Form/Input/InputWithTip';
import Button from 'components/Button';
import { Required, NotBlank } from 'components/Form/Validators';
import RadioCard from './RadioCard';

import SideHelper, { SIDES } from 'models/Side';
import { SPECIES } from 'models/SpriteSpecies';

const CharacterCreationForm = (props) => {
  const {
    handleSubmit, pristine, submitting, sideChoice,
  } = props;

  const side = SideHelper.getById(sideChoice || SIDES.SAYLEUS);
  const companionColor = side.adjective;

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        What should we call you in this world?
      </h2>
      <div className="character-creation-section">
        <p>
          Characters and other players on Saylua will know you by your username.
        </p>
        <Field
          name="username"
          component={InputWithTip}
          placeholder="Username"
          type="text"
          validate={[Required('Username'), NotBlank('Username')]}
          tip="Your username can include letters, numbers, and these symbols: +~._-"
        />
      </div>

      <h2>
        Which side would you like to live on?
      </h2>
      <div className="character-creation-section">
        <p>
          Saylua is a tidally locked planet, divided into a light side and
          a dark side.
        </p>
        <p>
          Don&#39;t worry, if you change your mind later,
          you&#39;ll still be able to switch sides.
        </p>

        <div className="side-choice-container">
          <Field
            component={RadioCard}
            parse={value => Number(value)}
            type="radio"
            imgUrl="/img/backgrounds/sayleus.jpg"
            title="The Light Side: Sayleus"
            name="side"
            value={SIDES.SAYLEUS}
          >
            <div style={{ height: '80px' }}>
              The land of endless sunlight. Leafy plants and sprites alike
              feast on the constant rays.
            </div>
          </Field>
          <Field
            component={RadioCard}
            parse={value => Number(value)}
            type="radio"
            imgUrl="/img/backgrounds/luaria.jpg"
            title="The Dark Side: Luaria"
            name="side"
            value={SIDES.LUARIA}
          >
            <div style={{ height: '80px' }}>
              Deep dark skies. The shadows of Luaria hide a variety of unique
              creatures.
            </div>
          </Field>
        </div>
      </div>

      <h2>Pick your starting companion</h2>
      <div className="character-creation-section">
        <p>
          You&#39;ll meet many companions in the world of
          Saylua, but this one will be your first.
        </p>

        <div className="companion-choice-container">
          <Field
            component={RadioCard}
            parse={value => Number(value)}
            type="radio"
            imgUrl={`/img/sprites/chirling/${companionColor}.png`}
            title="A Chirling!"
            name="starterSpecies"
            value={SPECIES.CHIRLING}
          >
            A little bird for you.
          </Field>

          <Field
            component={RadioCard}
            parse={value => Number(value)}
            type="radio"
            imgUrl={`/img/sprites/arko/${companionColor}.png`}
            title="An Arko!"
            name="starterSpecies"
            value={SPECIES.ARKO}
          >
            Ark, ark!
          </Field>

          <Field
            component={RadioCard}
            parse={value => Number(value)}
            type="radio"
            imgUrl={`/img/sprites/nibian/${companionColor}.png`}
            title="A Nibian!"
            name="starterSpecies"
            value={SPECIES.NIBIAN}
          >
            Splash!
          </Field>
        </div>
      </div>

      <h2>And finally, what will you call your companion?</h2>
      <div className="character-creation-section">
        <Field
          name="companionName"
          component={InputWithTip}
          placeholder="Companion name"
          validate={[Required('Companion name'), NotBlank('Companion name')]}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button disabled={pristine || submitting}>Start your adventure!</Button>
      </div>
    </form>
  );
};

const characterCreationForm = reduxForm({
  form: 'characterCreationForm',
  onChange: (values, dispatch) => {
    const side = values.side;
    if (side) {
      const theme = SideHelper.getById(side).adjective;
      dispatch(setTheme(theme));
    }
  },
})(CharacterCreationForm);

const selector = formValueSelector('characterCreationForm');

export default connect(state => ({
  sideChoice: selector(state, 'side'),
}))(characterCreationForm);
