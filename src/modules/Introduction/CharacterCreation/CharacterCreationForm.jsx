import React, { Component } from 'react';

import { store } from 'index';
import { setTheme } from 'reducers/sayluaReducer';
import InputWithTip from 'components/Form/Input/InputWithTip';
import Button from 'components/Button';
import RadioCard from './RadioCard';

import { withFormik } from 'formik';
import * as Yup from 'yup';

import Side, { SIDES } from 'models/Side';
import { SPECIES } from 'models/SpriteSpecies/constants';

class _CharacterCreationForm extends Component {
  componentWillReceiveProps(nextProps) {
    const nextSide = nextProps.values.side;
    if (nextSide && this.props.values.side !== nextSide) {
      store.dispatch(setTheme(nextSide === `${SIDES.SAYLEUS}` ? 'saylian' : 'luarian'));
    }
  }
  render() {
    const {
      handleSubmit,
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
    } = this.props;

    const side = Side.fromId(values.side || SIDES.SAYLEUS);
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
          <InputWithTip
            name="username"
            placeholder="Username"
            type="text"
            tip="Your username can include letters, numbers, and these symbols: +~._-"
            value={values.username}
            touched={touched.username}
            error={errors.username}
            onChange={handleChange}
            onBlur={handleBlur}
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
            <RadioCard
              type="radio"
              imgUrl="/img/backgrounds/sayleus.jpg"
              title="The Light Side: Sayleus"
              name="side"
              value={SIDES.SAYLEUS}
              checked={values.side === `${SIDES.SAYLEUS}`}
              touched={touched.side}
              error={errors.side}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <div style={{ height: '80px' }}>
                The land of endless sunlight. Leafy plants and sprites alike
                feast on the constant rays.
              </div>
            </RadioCard>
            <RadioCard
              type="radio"
              imgUrl="/img/backgrounds/luaria.jpg"
              title="The Dark Side: Luaria"
              name="side"
              value={SIDES.LUARIA}
              checked={values.side === `${SIDES.LUARIA}`}
              touched={touched.side}
              error={errors.side}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <div style={{ height: '80px' }}>
                Deep dark skies. The shadows of Luaria hide a variety of unique
                creatures.
              </div>
            </RadioCard>
          </div>
        </div>

        <h2>Pick your starting companion</h2>
        <div className="character-creation-section">
          <p>
            You&#39;ll meet many companions in the world of
            Saylua, but this one will be your first.
          </p>

          <div className="companion-choice-container">
            <RadioCard
              type="radio"
              imgUrl={`/img/sprites/chirling/${companionColor}.png`}
              title="A Chirling!"
              name="starterSpecies"
              value={SPECIES.CHIRLING}
              checked={values.starterSpecies===`${SPECIES.CHIRLING}`}
              touched={touched.starterSpecies}
              error={errors.starterSpecies}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              A little bird for you.
            </RadioCard>

            <RadioCard
              type="radio"
              imgUrl={`/img/sprites/arko/${companionColor}.png`}
              title="An Arko!"
              name="starterSpecies"
              value={SPECIES.ARKO}
              checked={values.starterSpecies === `${SPECIES.ARKO}`}
              touched={touched.starterSpecies}
              error={errors.starterSpecies}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Ark, ark!
            </RadioCard>

            <RadioCard
              type="radio"
              imgUrl={`/img/sprites/nibian/${companionColor}.png`}
              title="A Nibian!"
              name="starterSpecies"
              value={SPECIES.NIBIAN}
              checked={values.starterSpecies === `${SPECIES.NIBIAN}`}
              touched={touched.starterSpecies}
              error={errors.starterSpecies}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              Splash!
            </RadioCard>
          </div>
        </div>

        <h2>And finally, what will you call your companion?</h2>
        <div className="character-creation-section">
          <InputWithTip
            name="companionName"
            placeholder="Companion name"
            type="text"
            value={values.companionName}
            touched={touched.companionName}
            error={errors.companionName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button type="submit" disabled={isSubmitting}>Start your adventure!</Button>
        </div>
      </form>
    );
  }
}


const CharacterCreationForm = withFormik({
  mapPropsToValues: props => ({ ...props }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("You must have a username!"),
    companionName: Yup.string()
      .required("Your new friend needs a name!"),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(false);
    if (props.handleSubmit) {
      props.handleSubmit(values);
    }
  },
  displayName: "CharacterCreationForm",
})(_CharacterCreationForm);

export default CharacterCreationForm;
