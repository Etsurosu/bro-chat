import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import ClickableIcon from '../../components/clickable-icon';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import BroInput from '../../components/bro-input';

const Register = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContentPage title={t('register.title')}>
      <ContentContainer>
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
          color="#cccccc"
          size="3x"
          onClick={() => console.log('registerRequest')}
        />
      </ContentContainer>
    </ContentPage>
  );
};
export default Register;
