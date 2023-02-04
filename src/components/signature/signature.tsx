import React, { FC } from 'react';
import styled from '@emotion/styled';
import { hashCode } from '@/utils/hash';
import { groups, paths } from './signature.constants';

interface SignatureProps {
  inkColor?: string;
}

const Signature: FC<SignatureProps> = ({ inkColor = '#b1b5d0' }) => {
  const StyledSVG = styled.svg`
    width: 100%,
    height: 100%,
    z-index: 1,
  `;
  return (
    <StyledSVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 251.076 56.952'>
      <defs>
        {paths.map((p) => (
          <clipPath
            key={hashCode(p)}
            id={p.id}
            transform='translate(-137.132 -178.486)'
          >
            <path fill='none' d={p.d} />
          </clipPath>
        ))}
      </defs>
      {groups.map((g) => (
        <g
          key={hashCode(g)}
          clipPath={`url(#${g.id})`}
          className={`write-${g.id}`}
        >
          <path
            fill='none'
            stroke={inkColor}
            strokeMiterlimit='10'
            strokeWidth='6'
            d={g.d}
          />
        </g>
      ))}
    </StyledSVG>
  );
};

export default Signature;
