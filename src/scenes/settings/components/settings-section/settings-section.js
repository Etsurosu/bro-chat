import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './components/section-title';
import SectionOption from './components/section-option';

const SettingsSection = ({ title, options }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    {options.map(({ optionTitle }) => (
      <SectionOption title={optionTitle} />
    ))}
  </>
);

SettingsSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf().isRequired
};

export default SettingsSection;
