import React from "react";
import SettingsContainer from "./components/settings-container";
import SettingsSection from "./components/settings-section";

const Settings = () => (
  <SettingsContainer>
    <h1>Settings</h1>
    <SettingsSection
      title="Langue"
      options={[
        { title: "Francais", onClick: () => console.log("fr") },
        { title: "English", onClick: () => console.log("en") }
      ]}
    />
    <SettingsSection
      title="Theme"
      options={[
        { title: "Bleu", onClick: () => console.log("bleu") },
        { title: "Rouge", onClick: () => console.log("rouge") }
      ]}
    />
  </SettingsContainer>
);

export default Settings;
