import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderContainer from './components/header-container';
import HeaderSection from './components/header-section';

const Header = ({ isConnected }) => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderSection to="/" color={primaryColor}>
        <b>BROCHAT</b>
      </HeaderSection>
      {(isConnected && (
        <HeaderSection to="/me">
          <FontAwesomeIcon icon={faUserAlt} color={primaryColor} size="3x" />
        </HeaderSection>
      )) || (
        <HeaderSection to="/signin">
          <FontAwesomeIcon icon={faSignInAlt} color={primaryColor} size="3x" />
        </HeaderSection>
      )}
      <HeaderSection to="/settings" style={{ position: 'absolute', bottom: 0 }}>
        <FontAwesomeIcon icon={faCog} color={primaryColor} size="3x" />
      </HeaderSection>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isConnected: PropTypes.bool
};

export default Header;
