'use client';

import React, { FC } from 'react';
import { groups, paths } from './signature.constants';
import useHomeVisited from '@src/hooks/home-visited';
import genereateUUID from '@utils/uuid';

interface SignatureProps {
  inkColor?: string;
}

const Signature: FC<SignatureProps> = ({ inkColor = '#b1b5d0' }) => {
  const signed = useHomeVisited();
  return (
    <svg
      className='w-full h-full'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 251.076 56.952'
    >
      <defs>
        {paths.map((p) => (
          <clipPath
            id={p.id}
            key={genereateUUID(p)}
            transform='translate(-137.132 -178.486)'
          >
            <path fill='none' d={p.d} />
          </clipPath>
        ))}
      </defs>
      {groups.map((g) => (
        <g
          key={genereateUUID(g)}
          clipPath={`url(#${g.id})`}
          className={signed ? 'show-letter' : `hide-letter write-${g.id}`}
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
    </svg>
  );
};

export default Signature;
