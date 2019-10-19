import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import OptionContainer from './components/option-container';
import OptionTitle from './components/option-title';

const SectionOption = ({ title }) => (
  <OptionContainer>
    <OptionTitle>{title}</OptionTitle>
    <Switch />
  </OptionContainer>
);

SectionOption.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionOption;
