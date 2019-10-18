import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import CoreContainer from './components/core-container';
import Header from './components/header';
import Body from './components/body';

const Core = ({ isConnected, children }) => (
  <CoreContainer>
    <Header>
      {/*HeaderSection 100px height component*/}
      <Link to="/" style={{ marginTop: 40, marginBottom: 40, textDecoration: 'none' }}>
        <b style={{ color: '#e8e8e8' }}>BROCHAT</b>
      </Link>
      {(!isConnected && (
        <Link to="/me" style={{ height: 100 }}>
          <FontAwesomeIcon icon={faUserAlt} color="#e8e8e8" size="3x" />
        </Link>
      )) || (
        <Link to="/login" style={{ height: 100 }}>
          <FontAwesomeIcon icon={faSignInAlt} color="#e8e8e8" size="3x" />
        </Link>
      )}
      <Link
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          height: 100,
          bottom: 0
        }}
        to="/settings"
      >
        <FontAwesomeIcon icon={faCog} color="#e8e8e8" size="3x" />
      </Link>
    </Header>
    <Body>{children}</Body>
  </CoreContainer>
);

export default Core;
