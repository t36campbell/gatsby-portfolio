import React, { FC } from 'react';
import { Link } from 'gatsby';
import { sidebarItems } from './sidebar.constants';
import { SidebarItem } from './sidebar.model';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { genereateUUID } from '@utils/uuid';
import Footer from '@components/footer/footer';
import Icon from '@components/icon/icon';

export interface SidebarProps {
  showSidebar: boolean;
  handleSidebarState: (state: boolean) => void;
  queryMatch: boolean;
}

const listStyles =
  'flex w-full justify-between cursor-pointer items-center mt-4 mx-4';
const childStyles =
  'flex w-full cursor-pointer items-center mt-2 mx-8 pt-2 px-2';

const toggleStyles =
  'fixed left-48 mt-6 py-2 px-3 rounded-tr rounded-br border-y-2 border-r-2 bg-custom-darker border-dracula-darker-800 shadow shadow-[3px_3px_6px_-3px_rgba(0,0,0,1)] z-1000';

const sidebarStyles =
  'flex flex-col justify-between min-h-screen w-48 lg:w-56 transition-all duration-300 ease-in-out bg-custom-darker shadow shadow-[3px_3px_6px_-3px_rgba(0,0,0,1)] z-100';

const sidebarItemGenerator = (list: SidebarItem[]): JSX.Element => (
  <ul className='mt-6'>
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

const Sidebar: FC<SidebarProps> = ({
  showSidebar,
  handleSidebarState,
  queryMatch,
}) => {
  const sidebarVisibility = () => {
    const hiddenSidebarStyles =
      '-translate-x-48 absolute bg-transparent shadow-none';
    switch (true) {
      case !showSidebar && queryMatch:
        return 'transform-none';
      case showSidebar && queryMatch:
        return hiddenSidebarStyles;
      case !showSidebar && !queryMatch:
        return hiddenSidebarStyles;
    }
  };

  return (
    <div className={`${sidebarStyles} ${sidebarVisibility()}`}>
      <button
        className={toggleStyles}
        onClick={() => handleSidebarState(!showSidebar)}
      >
        <Icon icon={faBars} size={'1x'} />
      </button>
      {sidebarItemGenerator(sidebarItems)}
      <Footer iconSize={'2x'} />
    </div>
  );
};

export default Sidebar;
