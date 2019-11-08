import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import ClickableIcon from '../../components/clickable-icon';
import ContentPage from '../../components/content-page';
import BroInput from '../../components/bro-input';

const Register = () => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContentPage title={t('register.title')}>
      <BroInput
        label={t('login.username')}
        placeholder={t('login.username')}
        value={username}
        onChangeText={setUsername}
      />
      <BroInput
        type="password"
        label={t('login.password')}
        placeholder={t('login.password')}
        value={password}
        onChangeText={setPassword}
      />
      <ClickableIcon
        icon={faUserCheck}
        color={theme.secondaryBackground}
        size="3x"
        onClick={() => console.log('registerRequest')}
      />
    </ContentPage>
  );
};
export default Register;
