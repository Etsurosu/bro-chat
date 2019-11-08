import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import axios from 'axios';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import ClickableIcon from '../../components/clickable-icon';
import ContentPage from '../../components/content-page';
import BroInput from '../../components/bro-input';

const Register = ({ signInSuccess }) => {
  const { t } = useTranslation();
  const { quaternaryColor } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerRequest = () => {
    axios({
      method: 'post',
      url: 'http://92.222.92.112:8000/api/auth/register',
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
        color={quaternaryColor}
        size="3x"
        onClick={registerRequest}
      />
    </ContentPage>
  );
};

Register.propTypes = {
  signInSuccess: PropTypes.func.isRequired
};

export default Register;
//localStorage.setItem('token', res.)
