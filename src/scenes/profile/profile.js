import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { faUserEdit, faUserCheck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import IconContainer from '../../components/icon-container';
import ClickableIcon from '../../components/clickable-icon';
import ContentPage from '../../components/content-page';
import BroInput from '../../components/bro-input';

// remove the test values

const Auth = ({ signOut }) => {
  const { t } = useTranslation();
  const { quaternaryColor } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editModeDisabled, setEditModeDisabled] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios({
      method: 'get',
      url: 'http://92.222.92.112:8000/api/user/me',
      responseType: 'json',
      headers: { Authorization: 'Bearer ' + token }
    })
      .then(res => {
        setUsername(res.data.user.pseudo);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    signOut();
  };

  const handleUpdateProfile = () => {
    const token = localStorage.getItem('token');
    axios({
      method: 'patch',
      url: 'http://92.222.92.112:8000/api/user/me',
      responseType: 'json',
      headers: { Authorization: 'Bearer ' + token },
      data: { user: { pseudo: username, password } }
    })
      .then(res => {
        setUsername(res.data.user.pseudo);
        setEditModeDisabled(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <ContentPage title={t('profile.title')}>
      <BroInput
        label={t('profile.username')}
        placeholder={t('profile.username')}
        value={username}
        onChangeText={setUsername}
        disabled={editModeDisabled}
      />
      <BroInput
        type="password"
        label={t('profile.password')}
        placeholder={t('profile.password')}
        value={password}
        onChangeText={setPassword}
        disabled={editModeDisabled}
      />
      <IconContainer>
        {(editModeDisabled && (
          <>
            <ClickableIcon
              icon={faUserEdit}
              color={quaternaryColor}
              size="3x"
              onClick={() => setEditModeDisabled(false)}
            />
            <ClickableIcon
              icon={faSignOutAlt}
              color={quaternaryColor}
              size="3x"
              onClick={handleSignOut}
            />
          </>
        )) || (
          <ClickableIcon
            icon={faUserCheck}
            color={quaternaryColor}
            size="3x"
            onClick={handleUpdateProfile}
          />
        )}
      </IconContainer>
    </ContentPage>
  );
};

Auth.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default Auth;
