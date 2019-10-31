import React from 'react';
import PropTypes from 'prop-types';
import BroInputContainer from './components/bro-input-container';
import Label from '../label';
import Input from '../input';

const BroInput = ({ label, placeholder, type, value, onChangeText, disabled }) => (
  <BroInputContainer>
    <Label>{label}</Label>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={event => onChangeText(event.target.value)}
      disabled={disabled}
    />
  </BroInputContainer>
);

BroInput.defaultProps = {
  type: 'text',
  disabled: false
};

BroInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default BroInput;
