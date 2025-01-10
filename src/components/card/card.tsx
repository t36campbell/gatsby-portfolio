import React, { FC } from 'react';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';

interface CardProps {
  readonly children: React.ReactNode;
  full?: boolean;
  image?: GatsbyImageProps;
}

const styles = 'bg-dracula-darker rounded-lg shadow-md';

const Card: FC<CardProps> = ({ children, full = false, image }) => (
  <div className={`${styles} ${full ? 'col-span-full' : ''} `}>
    {image ? <GatsbyImage className='rounded-t-lg' {...image} /> : null}
    <div className='p-3 md:p-6'>{children}</div>
  </div>
);

export default Card;
