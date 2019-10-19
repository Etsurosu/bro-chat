import React from 'react';
import PropTypes from 'prop-types';
import BroInputContainer from './components/bro-input-container';
import Label from '../label';
import Input from '../input';

const BroInput = ({ label, placeholder }) => (
  <BroInputContainer>
    <Label>{label}</Label>
    <Input type="text" placeholder={placeholder} />
  </BroInputContainer>
);

BroInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default BroInput;
