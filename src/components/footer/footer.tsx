import React, { FC } from 'react';
import styled from '@emotion/styled';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Icon from '@components/icon/icon';

interface FooterProps {
  iconColor: string;
  iconSize: SizeProp;
}

const Footer: FC<FooterProps> = ({ iconColor, iconSize }) => {
  const FooterContainer = styled.div`
    background: transparent;
    dispay: flex;
    justify-content: space-evenly;
    position: sticky;
    margin-bottom: 24px;
    width: 200px;
    top: 97%;
  `;
  const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  return (
    <FooterContainer>
      <IconContainer>
        <a
          href='https://github.com/t36campbell'
          target='_blank'
          rel='noreferrer'
        >
          <Icon icon={faGithubSquare} color={iconColor} size={iconSize} />
        </a>
        <br />
        <a href='/Tyler Campbell Resume (2022).pdf' target='_blank'>
          <Icon icon={faFilePdf} color={iconColor} size={iconSize} />
        </a>
        <br />
        <a
          href='https://www.linkedin.com/in/t36campbell/'
          target='_blank'
          rel='noreferrer'
        >
          <Icon icon={faLinkedin} color={iconColor} size={iconSize} />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
