import React, { FC } from 'react';
import { hashCode } from '@/utils/hash';
import { groups, paths } from './signature.constants';

interface SignatureProps {
  inkColor?: string;
}

const Signature: FC<SignatureProps> = ({ inkColor = '#b1b5d0' }) => (
  <svg
    className='w-full h-full'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 251.076 56.952'
  >
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
  </svg>
);

export default Signature;
