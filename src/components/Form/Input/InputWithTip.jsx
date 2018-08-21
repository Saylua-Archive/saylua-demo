import React from 'react';

import Input from './Main';
import FormTip from '../FormTip';

const InputWithTip = (props) => {
  const {
    touched, error, warning, tip, ...inputProps
  } = props;
  const err = touched ? error : undefined;
  const warn = touched ? warning : undefined;
  return (
    <div>
      <Input
        {...inputProps}
        data-error={err}
      />
      <FormTip tip={tip} error={err} warning={warn} />
    </div>
  );
};

export default InputWithTip;
