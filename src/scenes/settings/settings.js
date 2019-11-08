import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ContentPage from '../../components/content-page';
import SectionsContainer from './components/sections-container';
import SettingsSection from './components/settings-section';

/** make it wirk nicely i18n + redux */

const Settings = ({ setTheme, currentTheme }) => {
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
              checked: currentTheme === 'default',
              onClick: () => setTheme('default')
            },
            {
              key: 'dark',
              optionTitle: t('settings.dark'),
              checked: currentTheme === 'dark',
              onClick: () => setTheme('dark')
            }
          ]}
        />
      </SectionsContainer>
    </ContentPage>
  );
};

Settings.propTypes = {
  setTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired
};

export default Settings;

// change onChange to onClick and set Clicked + reffer by id or something
