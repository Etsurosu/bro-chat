import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faUserCheck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ContentPage from '../../components/content-page';
import ContentContainer from '../../components/content-container';
import ProfileIconContainer from './components/profile-icon-container';
import BroInput from '../../components/bro-input';

// remove the test values

const Auth = ({ defaultUsername = 'Adrien', defaultPassword = 'test', signOut }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState(defaultUsername);
  const [password, setPassword] = useState(defaultPassword);
  const [editModeDisabled, setEditModeDisabled] = useState(true);

  return (
    <ContentPage title={t('profile.title')}>
      <ContentContainer>
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
        {/** do something to this Button */}
        <ProfileIconContainer>
          {(editModeDisabled && (
            <>
              <FontAwesomeIcon
                icon={faUserEdit}
                color="#cccccc"
                size="3x"
                onClick={() => setEditModeDisabled(false)}
              />
              <FontAwesomeIcon
                icon={faSignOutAlt}
                color="#cccccc"
                size="3x"
                onClick={() => signOut()}
              />
            </>
          )) || (
            <FontAwesomeIcon
              icon={faUserCheck}
              color="#cccccc"
              size="3x"
              onClick={() => setEditModeDisabled(true)}
            />
          )}
        </ProfileIconContainer>
      </ContentContainer>
    </ContentPage>
  );
};

Auth.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default Auth;
