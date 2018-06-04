import React from 'react';

import Input from './Main';
import FormTip from '../FormTip';

// To be used with react-redux-form.
const InputWithTip = (props) => {
  const {
    id, style, input, type, placeholder, tip, meta,
  } = props;
  const { touched, error, warning } = meta || {};
  const err = touched ? error : undefined;
  const warn = touched ? warning : undefined;
  return (
    <div>
      <Input
        {...input}
        style={style}
        id={id}
        data-error={err}
        placeholder={placeholder}
        type={type}
      />
      <FormTip tip={tip} error={err} warning={warn} />
    </div>
  );
};

export default InputWithTip;
