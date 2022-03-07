import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

const ButtonLink = ({ icon, color, size }: ButtonLinkProps): JSX.Element => {
  return <FontAwesomeIcon icon={icon} color={color} size={size} />;
};

ButtonLink.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

ButtonLink.defaultProps = {
  color: '#ccc',
  size: '2x',
};

export default ButtonLink;

export interface ButtonLinkProps {
  icon: IconProp;
  color: string;
  size: SizeProp;
}
