import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderContainer from './components/header-container';
import HeaderSection from './components/header-section';

const Header = ({ isConnected }) => {
  console.log('isConnected:' + isConnected);
  return (
    <HeaderContainer>
      <HeaderSection to="/" color="#e8e8e8">
        <b>BROCHAT</b>
      </HeaderSection>
      {(isConnected && (
        <HeaderSection to="/me">
          <FontAwesomeIcon icon={faUserAlt} color="#e8e8e8" size="3x" />
        </HeaderSection>
      )) || (
        <HeaderSection to="/signin">
          <FontAwesomeIcon icon={faSignInAlt} color="#e8e8e8" size="3x" />
        </HeaderSection>
      )}
      <HeaderSection to="/settings" style={{ position: 'absolute', bottom: 0 }}>
        <FontAwesomeIcon icon={faCog} color="#e8e8e8" size="3x" />
      </HeaderSection>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isConnected: PropTypes.bool
};

export default Header;
