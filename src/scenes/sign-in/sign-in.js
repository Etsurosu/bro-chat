import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import IconContainer from '../../components/icon-container';
import ClickableIcon from '../../components/clickable-icon';
import ContentPage from '../../components/content-page';
import BroInput from '../../components/bro-input';

const SignIn = ({ signIn, signInSuccess }) => {
  const { t } = useTranslation();
  const { quaternaryColor } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signInRequest = () => {
    axios({
      method: 'post',
      url: 'http://92.222.92.112:8000/api/auth/login',
      responseType: 'json',
      data: { user: { pseudo: username, password } }
    })
      .then(res => {
        localStorage.setItem('token', res.data.user.token);
        signInSuccess();
      })
      .catch(err => console.log(err));
  };

  return (
    <ContentPage title={t('login.title')}>
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
          <FontAwesomeIcon icon={faUserPlus} color={quaternaryColor} size="3x" />
        </Link>
        <ClickableIcon
          icon={faSignInAlt}
          color={quaternaryColor}
          size="3x"
          onClick={() => signInRequest(username, password)}
        />
      </IconContainer>
    </ContentPage>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  signInSuccess: PropTypes.func.isRequired
};

export default SignIn;
