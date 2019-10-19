import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClickableIcon = ({ icon, onClick, color, cursor }) => (
  <FontAwesomeIcon icon={icon} color={color} onClick={onClick} cursor={cursor} />
);

ClickableIcon.defaultProps = {
  color: 'white',
  cursor: 'pointer'
};

ClickableIcon.propTypes = {
  icon: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  cursor: PropTypes.string
};

export default ClickableIcon;
