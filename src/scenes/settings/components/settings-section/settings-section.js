import React from "react";
import SectionContainer from "./components/section-container";
import SectionTitle from "./components/section-title";
import SectionOption from "./components/section-option";

const SettingsSection = ({ title, options }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {options.map(({ title }) => (
      <SectionOption title={title} />
    ))}
  </SectionContainer>
);

export default SettingsSection;
