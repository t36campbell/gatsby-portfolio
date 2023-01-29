import React, { FC } from 'react';

interface CardProps {
  readonly children: React.ReactNode;
  full?: boolean;
  image?: string;
}

const styles = 'bg-dracula-darker rounded-lg shadow-md';

const Card: FC<CardProps> = ({ children, full = false, image }) => (
  <div className={`${styles} ${full ? 'col-span-full' : ''} `}>
    {image ? <img className='rounded-t-lg' src={image} alt='' /> : null}
    <div className='p-6'>{children}</div>
  </div>
);

export default Card;
