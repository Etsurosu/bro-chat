import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withTheme, ThemeContext } from 'styled-components';
import CoreContainer from './components/core-container';
import Header from './components/header';
import Body from './components/body';

const Core = ({ theme, children }) => {
  const themeContext = useContext(ThemeContext);
  console.log('Theme:' + JSON.stringify(theme.main));

  console.log('ThemeContext:' + JSON.stringify(themeContext));
  return (
    <CoreContainer>
      <Header />
      <Body>{children}</Body>
    </CoreContainer>
  );
};

Core.propTypes = {
  children: PropTypes.node.isRequired
};

export default withTheme(Core);
