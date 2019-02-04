import React from 'react';

import './FormTip.css';

const FormTip = (props) => {
  const { tip, error, warning } = props;
  return (
    <small className="form-tip" data-error={error} data-warning={warning}>
      { error || warning || tip }
    </small>
  );
};

export default FormTip;
