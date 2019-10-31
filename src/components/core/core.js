import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import CoreContainer from './components/core-container';
import Header from './components/header';
import Body from './components/body';

const Core = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  console.log(themeContext);
  return (
    <CoreContainer>
      <Header isConnected />
      <Body>{children}</Body>
    </CoreContainer>
  );
};

Core.propTypes = {
  children: PropTypes.node.isRequired
};

export default Core;
