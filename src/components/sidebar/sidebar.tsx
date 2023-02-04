import React, { FC } from 'react';
import { Link } from 'gatsby';
import Footer from '@components/footer/footer';
import { hashCode } from '@utils/hash';
import { sidebarItems } from './sidebar.constants';
import { SidebarItem } from './sidebar.model';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from '@components/icon/icon';

export interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  queryMatch: boolean;
}

const listStyles =
  'flex w-full justify-between cursor-pointer items-center mt-4 mx-4';
const childrenStyles =
  'flex w-full cursor-pointer items-center mt-2 mx-8 pt-2 px-2';

const toggleStyles =
  'bg-custom-darker absolute left-48 mt-6 ml-2 py-2 px-3 rounded-tr rounded-br border-y-2 border-r-2 border-dracula-darker-800 shadow-[3px_3px_6px_-3px_rgba(0,0,0,1)]';

const sidebarStyles =
  'bg-custom-darker shadow min-h-screen flex-col justify-between transition-transform ease-in-out shadow-[3px_3px_6px_-3px_rgba(0,0,0,1)]';

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
          : null}
      </>
    );
  });

const Sidebar: FC<SidebarProps> = ({
  showSidebar,
  toggleSidebar,
  queryMatch,
}) => {
  const sidebarVisibility = () => {
    const hiddenSidebarStyles = '-translate-x-full absolute';
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
    <div className={`${sidebarStyles} ${sidebarVisibility()} z-1000`}>
      <button
        className={toggleStyles}
        onClick={() => toggleSidebar(!showSidebar)}
      >
        <Icon icon={faBars} size={'1x'} />
      </button>
      <ul className='mt-6'>{sidebarItemGenerator(sidebarItems, listStyles)}</ul>
      <Footer iconSize={'2x'} />
    </div>
  );
};

export default Sidebar;
