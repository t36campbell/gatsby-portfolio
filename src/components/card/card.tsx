import React, { FC } from 'react';

interface CardProps {
  readonly children: React.ReactNode;
  full?: boolean;
}

const styles = 'p-6 bg-dracula-darker rounded-lg shadow-md';

const Card: FC<CardProps> = ({ children, full = false }) => (
  <div className={`${styles} ${full ? 'col-span-full' : ''} `}>{children}</div>
);

export default Card;
