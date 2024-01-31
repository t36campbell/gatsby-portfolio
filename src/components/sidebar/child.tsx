import { Link } from 'gatsby';
import React, { FC } from 'react';
import genereateUUID from '@utils/uuid';
import { SidebarItem } from './sidebar.model';
import { partiallyActive } from './sidebar.constants';

const ChildLink: FC<SidebarItem> = ({ to, text }: SidebarItem) => (
  <Link key={genereateUUID({ to })} to={to} getProps={partiallyActive}>
    <div>&nbsp; {text}</div>
  </Link>
);

export default ChildLink;
