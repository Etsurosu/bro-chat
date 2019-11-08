import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionContainer from './components/section-container';

const HeaderSection = ({ to, color, children, style }) => (
  <SectionContainer style={style}>
    <Link to={to} style={{ color, textDecoration: 'none' }}>
      {children}
    </Link>
  </SectionContainer>
);

HeaderSection.defaultProps = {
  color: 'white',
  style: {}
};

HeaderSection.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  style: PropTypes.shape()
};

export default HeaderSection;
