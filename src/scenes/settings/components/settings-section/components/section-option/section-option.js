import React from "react";
import OptionContainer from "./components/option-container";
import OptionTitle from "./components/option-title";
import OptionSwitch from "./components/option-switch";

const SectionOption = ({ title }) => (
  <OptionContainer>
    <OptionTitle>{title}</OptionTitle>
    <OptionSwitch />
  </OptionContainer>
);

export default SectionOption;
