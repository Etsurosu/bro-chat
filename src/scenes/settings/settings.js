import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentPage from '../../components/content-page';
import SectionsContainer from './components/sections-container';
import SettingsSection from './components/settings-section';

/** make it wirk nicely i18n + redux */

const Settings = () => {
  const { t, i18n } = useTranslation();

  return (
    <ContentPage title={t('settings.title')}>
      <SectionsContainer>
        <SettingsSection
          title={t('settings.language')}
          options={[
            {
              key: 'en',
              optionTitle: 'English',
              checked: i18n.language === 'en',
              onClick: () => i18n.changeLanguage('en')
            },
            {
              key: 'fr',
              optionTitle: 'Français',
              checked: i18n.language === 'fr',
              onClick: () => i18n.changeLanguage('fr')
            }
          ]}
        />
        <SettingsSection
          title={t('settings.theme')}
          options={[
            {
              key: 'default',
              optionTitle: t('settings.default'),
              checked: true,
              onClick: () => console.log('bleu')
            },
            {
              key: 'dark',
              optionTitle: t('settings.dark'),
              checked: false,
              onClick: () => console.log('rouge')
            }
          ]}
        />
      </SectionsContainer>
    </ContentPage>
  );
};

export default Settings;

// change onChange to onClick and set Clicked + reffer by id or something
