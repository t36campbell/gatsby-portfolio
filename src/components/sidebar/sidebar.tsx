import React, { FC } from 'react';
import { sidebarItems } from './sidebar.constants';
import { SidebarItem } from './sidebar.model';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Footer from '@components/footer/footer';
import Icon from '@components/icon/icon';
import genereateUUID from '@utils/uuid';
import toggleSidebarState from '@utils/toggle-sidebar';
import ChildLink from './child';
import ParentLink from './parent';

export interface SidebarProps {
  showSidebar: boolean;
}

const positionStyles = 'fixed left-48 mt-9 py-2 px-3 z-100000';
const transitionStyles = 'transition-all ease-in-out duration-600';
const shadowStyles = 'shadow shadow-[3px_3px_6px_-3px_rgba(0,0,0,1)]';
const borderStyles =
  'rounded-tr rounded-br border-y border-r border-dracula-darker-800 hover:border-dracula-darker-500';
const toggleStyles = `bg-custom-darker ${positionStyles} ${shadowStyles} ${borderStyles} ${transitionStyles}`;

const hiddenSidebarStyles =
  '-translate-x-48 absolute bg-transparent shadow-none';
const sidebarStyles =
  'sticky top-0 w-48 shrink-0 h-screen no-scrollbar border-r bg-custom-darker border-dracula-darker-800';

const Sidebar: FC<SidebarProps> = ({ showSidebar }) => {
  const formatListItem = (item: SidebarItem) => (
    <>
      <li
        key={genereateUUID(item)}
        className='flex w-full cursor-pointer items-center'
      >
        {item.child ? <ChildLink {...item} /> : <ParentLink {...item} />}
      </li>
      <ul
        key={genereateUUID({ children: item.children?.map((c) => c.text) })}
        className='border-l-2 border-dracula-dark-200 space-y-2 pl-[.8rem]'
      >
        {item.children?.map(formatListItem)}
      </ul>
    </>
  );

  const sidebarItemGenerator = (list: SidebarItem[]): JSX.Element => (
    <ul className='space-y-6 pl-6'>{list.map(formatListItem)}</ul>
  );

  const sidebarVisibility = () => {
    return showSidebar ? 'transform-none' : hiddenSidebarStyles;
  };

  return (
    <div
      className={`transition-all ease-in-out duration-600 ${sidebarStyles} ${sidebarVisibility()}`}
    >
      <button
        className={toggleStyles}
        aria-label='sidebar toggle'
        onClick={() => toggleSidebarState(!showSidebar)}
      >
        <Icon icon={faBars} size={'1x'} />
      </button>
      <div className='h-full flex flex-col justify-between after:mt-auto'>
        <div className='grow-0 h-1/3 flex items-center mt-40 md:mt-20 lg:mt-40 2xl:-mt-12'>
          <nav className='w-full'>{sidebarItemGenerator(sidebarItems)}</nav>
        </div>
        <div className='grow'></div>
        <Footer iconSize={'2x'} />
      </div>
    </div>
  );
};

export default Sidebar;
