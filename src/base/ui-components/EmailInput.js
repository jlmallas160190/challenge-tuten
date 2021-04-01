import StyledInput from 'shared/ui-components/StyledInput';
import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

import StyledLabel from './StyledLabel';
import { sanitizeMasks } from 'base/constants/masks';

function handleChange(event, onChange) {
  const { name, value } = event.target;

  const sanitizedValue = sanitizeMasks(value);
  onChange({
    target: {
      name,
      value: sanitizedValue,
    },
  });
}

const EmailInput = ({ onBlur, onChange, labelText, ...rest }) => (
  <>
    <StyledLabel>{labelText}</StyledLabel>
    <MaskedInput
      {...rest}
      mask={emailMask}
      onChange={(e) => handleChange(e, onChange)}
      onBlur={onBlur}
      render={(ref, props) => <StyledInput type="text" ref={ref} {...props} />}
    />
  </>
);

EmailInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  labelText: PropTypes.string,
};

EmailInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
  labelText: '',
};

export default EmailInput;
