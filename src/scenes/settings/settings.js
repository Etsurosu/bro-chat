import React from "react";
import ContentPage from "../../components/content-page";
import SectionsContainer from "./components/sections-container";
import SettingsSection from "./components/settings-section";

const Settings = () => (
  <ContentPage title="Settings">
    <SectionsContainer>
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
    </SectionsContainer>
  </ContentPage>
);

export default Settings;
