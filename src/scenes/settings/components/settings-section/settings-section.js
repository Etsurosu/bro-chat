import React from "react";
import SectionTitle from "./components/section-title";
import SectionOption from "./components/section-option";

const SettingsSection = ({ title, options }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    {options.map(({ title }) => (
      <SectionOption title={title} />
    ))}
  </>
);

export default SettingsSection;
