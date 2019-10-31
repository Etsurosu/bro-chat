import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import BroInput from '../../components/bro-input';
import Button from '../../components/button';

const SignIn = ({ signIn }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContentPage title={t('login.title')}>
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
        <Button
          style={{ color: '#333333', fontSize: 20 }}
          onClick={() => signIn({ username, password })}
        >
          <b>{t('login.login')}</b>
        </Button>
        {/** do something to this ugly Link */}
        <Link
          to="/register"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            border: '2px solid #666666',
            backgroundColor: '#cccccc',
            borderRadius: 20,
            height: 35,
            width: '100%',
            maxWidth: 200,
            color: '#333333',
            fontSize: 20,
            textDecoration: 'none'
          }}
        >
          <b>{t('login.register')}</b>
        </Link>
      </ContentContainer>
    </ContentPage>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default SignIn;
