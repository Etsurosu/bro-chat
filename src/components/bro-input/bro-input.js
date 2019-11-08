import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import BroInputContainer from './components/bro-input-container';
import Label from '../label';
import Input from '../input';

const BroInput = ({ label, placeholder, type, value, color, onChangeText, disabled }) => {
  const { secondaryColor } = useContext(ThemeContext);

  return (
    <BroInputContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        color={color || secondaryColor}
        onChange={event => onChangeText(event.target.value)}
        disabled={disabled}
      />
    </BroInputContainer>
  );
};

BroInput.defaultProps = {
  type: 'text',
  color: null,
  disabled: false
};

BroInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default BroInput;
