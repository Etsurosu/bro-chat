import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClickableIcon = ({ icon, onClick, color, size, cursor }) => (
  <FontAwesomeIcon icon={icon} color={color} onClick={onClick} size={size} cursor={cursor} />
);

ClickableIcon.defaultProps = {
  color: 'white',
  size: '2x',
  cursor: 'pointer'
};

ClickableIcon.propTypes = {
  icon: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  cursor: PropTypes.string
};

export default ClickableIcon;
