import React, { FC } from 'react';
import { Link } from 'gatsby';
import Footer from '../footer/footer';

interface SidebarProps {}

const listStyles =
  'flex w-full justify-between cursor-pointer items-center m-4 p-4';
const linkStyles = 'text-3xl hover:text-dracula-dark-100';
const linkDecoration = { textDecoration: 'underline' };

const Sidebar: FC<SidebarProps> = () => (
  <>
    <div className='bg-dracula-darker shadow min-h-screen flex-col justify-between'>
      <ul className='mt-12'>
        <li className={listStyles}>
          <Link to='/' activeStyle={linkDecoration} className={linkStyles}>
            Home
          </Link>
        </li>
        <li className={listStyles}>
          <Link
            to='/projects/'
            partiallyActive
            activeStyle={linkDecoration}
            className={linkStyles}
          >
            Projects
          </Link>
        </li>
        <li className={listStyles}>
          <Link
            to='/blog/'
            partiallyActive
            activeStyle={linkDecoration}
            className={linkStyles}
          >
            Blog
          </Link>
        </li>
      </ul>
      <Footer iconColor={'fff'} iconSize={'2xs'} />
    </div>
  </>
);

export default Sidebar;
