import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './components/section-title';
import SectionOption from './components/section-option';

const SettingsSection = ({ title, options }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    {options.map(({ key, optionTitle, checked, onClick }) => (
      <SectionOption key={key} title={optionTitle} checked={checked} onClick={onClick} />
    ))}
  </>
);

SettingsSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SettingsSection;
