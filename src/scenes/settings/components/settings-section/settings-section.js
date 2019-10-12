import React from "react";
import SectionContainer from "./components/section-container";
import SectionTitle from "./components/section-title";

const SettingsSection = ({ title, options }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {options.map(({ name, onClick }) => (
      <h4 onClick={() => onClick()}>{name}</h4>
    ))}
  </SectionContainer>
);

export default SettingsSection;
