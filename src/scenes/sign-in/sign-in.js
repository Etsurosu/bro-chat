import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import IconContainer from '../../components/icon-container';
import ClickableIcon from '../../components/clickable-icon';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import BroInput from '../../components/bro-input';

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
        <IconContainer>
          <Link to="/register">
            <FontAwesomeIcon icon={faUserPlus} color="#cccccc" size="3x" />
          </Link>
          <ClickableIcon
            icon={faSignInAlt}
            color="#cccccc"
            size="3x"
            onClick={() => signIn(username, password)}
          />
        </IconContainer>
      </ContentContainer>
    </ContentPage>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default SignIn;