import React from "react";
import SettingsContainer from "./components/settings-container";
import SettingsSection from "./components/settings-section";

const Settings = () => (
  <SettingsContainer>
    <h1>Settings</h1>
    <SettingsSection
      title="Langue"
      options={[
        { name: "Francais", onClick: () => console.log("fr") },
        { name: "English", onClick: () => console.log("en") }
      ]}
    />
    <SettingsSection
      title="Theme"
      options={[
        { name: "Bleu", onClick: () => console.log("bleu") },
        { name: "Rouge", onClick: () => console.log("rouge") }
      ]}
    />
  </SettingsContainer>
);

export default Settings;
