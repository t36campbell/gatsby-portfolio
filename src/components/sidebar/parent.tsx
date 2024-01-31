import { Link } from 'gatsby';
import React, { FC } from 'react';
import genereateUUID from '@utils/uuid';
import { SidebarItem } from './sidebar.model';

const ParentLink: FC<SidebarItem> = ({ to, text }: SidebarItem) => (
  <Link
    key={genereateUUID({ to })}
    to={to}
    activeClassName='text-dracula-purple-300'
    className='w-full transition-all ease-in-out duration-600 text-2xl hover:text-dracula-purple-300'
  >
    {text}
  </Link>
);

export default ParentLink;
