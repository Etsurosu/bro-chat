import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import OptionContainer from './components/option-container';
import OptionTitle from './components/option-title';

const SectionOption = ({ title, checked, onClick }) => (
  <OptionContainer>
    <OptionTitle>{title}</OptionTitle>
    <Switch checked={checked} onChange={onClick} />
  </OptionContainer>
);

SectionOption.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SectionOption;
