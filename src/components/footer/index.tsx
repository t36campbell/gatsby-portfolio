import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import '../../utils/fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import ButtonLink from '../button-link';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

const Footer = ({ iconColor, iconSize }: FooterProps): JSX.Element => {
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
          href="https://github.com/t36campbell"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonLink
            icon={['fab', 'github-square']}
            color={iconColor}
            size={iconSize}
          />
        </a>
        <br />
        <a href="/Tyler Campbell Resume (2022).pdf" target="_blank">
          <ButtonLink icon={faFilePdf} color={iconColor} size={iconSize} />
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/t36campbell/"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonLink
            icon={['fab', 'linkedin']}
            color={iconColor}
            size={iconSize}
          />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};

Footer.propTypes = {
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
};

export default Footer;

export interface FooterProps {
  iconColor: string;
  iconSize: SizeProp;
}
