import React from 'react';
import PropTypes from 'prop-types';
import CoreContainer from './components/core-container';
import Header from './components/header';
import Body from './components/body';

const Core = ({ children }) => (
  <CoreContainer>
    <Header />
    <Body>{children}</Body>
  </CoreContainer>
);

Core.propTypes = {
  children: PropTypes.node.isRequired
};

export default Core;
