import React, { FC } from 'react';
import { Link } from 'gatsby';
import { handleSidebarState, sidebarItems } from './sidebar.constants';
import { SidebarItem } from './sidebar.model';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import genereateUUID from '@utils/uuid';
import Footer from '@components/footer/footer';
import Icon from '@components/icon/icon';

export interface SidebarProps {
  queryMatch: boolean;
  showSidebar: boolean;
}

const listStyles = 'flex w-full justify-between cursor-pointer items-center';
const childStyles = 'flex w-full cursor-pointer items-center mx-2 pt-2 px-2';

const toggleStyles =
  'fixed left-48 mt-9 py-2 px-3 rounded-tr rounded-br border-y-2 border-r-2 bg-custom-darker border-dracula-darker-800 shadow shadow-[3px_3px_6px_-3px_rgba(0,0,0,1)] z-100000';

const sidebarStyles =
  'sticky top-0 w-48 shrink-0 h-screen no-scrollbar border-r-2 bg-custom-darker border-dracula-darker-800';

const sidebarItemGenerator = (list: SidebarItem[]): JSX.Element => (
  <ul className='space-y-4'>
    {list.map((item: SidebarItem) => (
      <li
        key={genereateUUID(item)}
        className={item.child ? childStyles : listStyles}
      >
        <Link
          key={genereateUUID({ to: item.to })}
          to={item.to}
          activeStyle={item.activeStyles}
          partiallyActive={item.child}
          className={item.classNames}
        >
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
);

const Sidebar: FC<SidebarProps> = ({ showSidebar, queryMatch }) => {
  const sidebarVisibility = () => {
    const hiddenSidebarStyles =
      '-translate-x-48 absolute bg-transparent shadow-none';
    switch (true) {
      case showSidebar && queryMatch:
        return 'transform-none';
      case showSidebar && !queryMatch:
        return 'transform-none';
      case !showSidebar && queryMatch:
        return hiddenSidebarStyles;
      case !showSidebar && !queryMatch:
        return hiddenSidebarStyles;
      default:
        return hiddenSidebarStyles;
    }
  };

  return (
    <div
      className={`transition-all ease-in-out duration-600 ${sidebarStyles} ${sidebarVisibility()}`}
    >
      <button
        className={toggleStyles}
        onClick={() => handleSidebarState(!showSidebar)}
      >
        <Icon icon={faBars} size={'1x'} />
      </button>
      <div className='h-full flex flex-col justify-between after:mt-auto'>
        <div className='flex-1 grow flex items-center -mt-12'>
          <nav className='w-full'>{sidebarItemGenerator(sidebarItems)}</nav>
        </div>
        <Footer iconSize={'2x'} />
      </div>
    </div>
  );
};

export default Sidebar;
