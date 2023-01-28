import React, { FC } from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  icon: IconProp;
  color: string;
  size: SizeProp;
}

const Icon: FC<IconProps> = ({ icon, color, size }) => (
  <FontAwesomeIcon icon={icon} color={color} size={size} />
);

export default Icon;
