import PropTypes from 'prop-types';
import React from 'react';
import { DARK_COLOR } from 'shared/constants';

import EmailInput from './EmailInput';
import InputError from './InputError';
import PasswordInput from './PasswordInput';
import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';

const FieldWrapper = ({
  fieldType,
  id,
  inputComponent,
  name,
  handleChange,
  value,
  label,
  children,
  hideInput,
  disabled,
  onBlur,
  onFocus,
  errors,
  hideLabel,
  bold,
  fontSize,
  color,
  ...otherProps
}) => {
  const getFieldComponent = () => {
    if (inputComponent) {
      return inputComponent;
    }
    const INPUT_TYPES = {
      text: StyledInput,
      password: PasswordInput,
      emailType: EmailInput,
    };

    return INPUT_TYPES[fieldType];
  };

  const getInputValuePropName = () => 'value';

  const getFieldAndLabel = () => {
    const InputComponent = getFieldComponent();
    const LabelComponent = StyledLabel;
    const Parent = React.Fragment;
    const valueProp = {
      [getInputValuePropName()]: value || '',
    };

    return (
      <Parent>
        {label && (
          <LabelComponent
            htmlFor={id}
            inputComponent={inputComponent}
            inputType={fieldType}
            hideLabel={hideLabel}
            bold={bold}
            fontSize={fontSize}
            color={color}
            disabled={disabled}
          >
            {label}
          </LabelComponent>
        )}
        {!hideInput && (
          <InputComponent
            id={id}
            name={name}
            disabled={disabled}
            onChange={disabled ? () => {} : handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            {...valueProp}
            error={!!errors}
            {...otherProps}
            type={fieldType}
          />
        )}
        {children}
      </Parent>
    );
  };

  return (
    <>
      {getFieldAndLabel()}
      <InputError fontSize="0.875rem">{errors}</InputError>
    </>
  );
};
FieldWrapper.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleKeyPress: PropTypes.func,
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  errors: PropTypes.string,
  fieldType: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
  ]),
  groupWidth: PropTypes.string,
  inputComponent: PropTypes.func,
  hideInput: PropTypes.bool,
  hideLabel: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  helperText: PropTypes.string,
  label: PropTypes.string,
  bold: PropTypes.bool,
  children: PropTypes.node,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
FieldWrapper.defaultProps = {
  className: '',
  placeholder: '',
  errors: '',
  name: '',
  id: '',
  groupWidth: '',
  fontSize: '0.5',
  color: DARK_COLOR,
  bold: false,
  label: '',
  helperText: '',
  value: '',
  handleKeyPress: () => {},
  disabled: false,
  fieldType: 'text',
  inputComponent: null,
  hideInput: false,
  hideLabel: false,
  onBlur: () => {},
  onFocus: () => {},
  children: null,
  handleChange: () => {},
};

export default FieldWrapper;
