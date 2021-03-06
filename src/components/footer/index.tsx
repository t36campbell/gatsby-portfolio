import React from 'react';
import styled from '@emotion/styled';
import '../../utils/fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import ButtonLink from '../button_link/index';

const Footer = () => {
  const icon_color = '#ccc';
  const icon_size = '2x';
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
        <a href="https://github.com/t36campbell" target="_blank">
          <ButtonLink
            icon={['fab', 'github-square']}
            color={icon_color}
            size={icon_size}
          />
        </a>
        <br />
        <a href="/Tyler Campbell Resume (2020).pdf" target="_blank">
          <ButtonLink icon={faFilePdf} color={icon_color} size={icon_size} />
        </a>
        <br />
        <a href="https://www.linkedin.com/in/t36campbell/" target="_blank">
          <ButtonLink
            icon={['fab', 'linkedin']}
            color={icon_color}
            size={icon_size}
          />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
