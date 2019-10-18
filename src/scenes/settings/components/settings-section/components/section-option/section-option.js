import React from 'react';
import Switch from 'react-switch';
import OptionContainer from './components/option-container';
import OptionTitle from './components/option-title';

const SectionOption = ({ title }) => (
  <OptionContainer>
    <OptionTitle>{title}</OptionTitle>
    <Switch />
  </OptionContainer>
);

export default SectionOption;
