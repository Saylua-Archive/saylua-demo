import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import InputWithTip from 'components/Form/Input/InputWithTip';
import TextArea from 'components/Form/TextArea';
import Button from 'components/Button';

const _SpriteEditForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sprite name: <br />
        <InputWithTip
          name="name"
          placeholder="Your companion's name"
          value={values.name}
          touched={touched.name}
          error={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <label>
        Description: <br />
        <TextArea
          name="description"
          placeholder="Tell us about your companion!"
          value={values.description}
          touched={touched.description}
          error={errors.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <br />
      <Button
        type="button"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
        subtle
      >
        Reset
      </Button>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

const SpriteEditForm = withFormik({
  mapPropsToValues: props => ({ ...props }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Your companion must have a name!"),
    description: Yup.string(),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(false);
    if (props.handleSubmit) {
      props.handleSubmit(values);
    }
  },
  displayName: "SpriteEditForm",
})(_SpriteEditForm);

export default SpriteEditForm;
