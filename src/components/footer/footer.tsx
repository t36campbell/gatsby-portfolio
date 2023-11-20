import React, { FC } from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Icon from '@components/icon/icon';

interface FooterProps {
  iconColor?: string;
  iconSize: SizeProp;
}

const iconStyles =
  'transition-all ease-in-out duration-600 hover:text-dracula-purple-300';

const Footer: FC<FooterProps> = ({ iconColor, iconSize }) => (
  <div className='flex justify-evenly sticky w-full inset-x-0 mb-6'>
    <a
      className={iconStyles}
      href='https://github.com/t36campbell'
      target='_blank'
      rel='noreferrer'
    >
      <Icon icon={faGithubSquare} color={iconColor} size={iconSize} />
    </a>
    <br />
    <a
      className={iconStyles}
      href='/Tyler Campbell Resume (2023).pdf'
      target='_blank'
    >
      <Icon icon={faFilePdf} color={iconColor} size={iconSize} />
    </a>
    <br />
    <a
      className={iconStyles}
      href='https://www.linkedin.com/in/t36campbell/'
      target='_blank'
      rel='noreferrer'
    >
      <Icon icon={faLinkedin} color={iconColor} size={iconSize} />
    </a>
  </div>
);

export default Footer;
