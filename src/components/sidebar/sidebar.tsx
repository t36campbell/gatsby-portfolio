import React, { FC } from 'react';
import { Link } from 'gatsby';
import Footer from '@components/footer/footer';
import { hashCode } from '@utils/hash';
import { sidebarItems } from './sidebar.constants';
import { SidebarItem } from './sidebar.model';

interface SidebarProps {}

const listStyles =
  'flex w-full justify-between cursor-pointer items-center mt-4 mx-4';
const childrenStyles =
  'flex w-full cursor-pointer items-center mt-2 mx-8 pt-2 px-2';

const sidebarItemGenerator = (
  list: SidebarItem[],
  listStyles: string,
): JSX.Element[] =>
  list.map((item: SidebarItem) => {
    return (
      <>
        <li key={hashCode(item)} className={listStyles}>
          <Link
            to={item.to}
            activeStyle={item.activeStyles}
            className={item.classNames}
          >
            {item.text}
          </Link>
        </li>
        {item.children
          ? sidebarItemGenerator(item.children, childrenStyles)
          : ''}
      </>
    );
  });

const responsiveSidebar =
  'transition-transform -translate-x-full lg:transform-none';

const Sidebar: FC<SidebarProps> = () => (
  <div className='bg-dracula-darker shadow min-h-screen flex-col justify-between'>
    <ul className='mt-8'>{sidebarItemGenerator(sidebarItems, listStyles)}</ul>
    <Footer iconColor={'fff'} iconSize={'2x'} />
  </div>
);

export default Sidebar;
