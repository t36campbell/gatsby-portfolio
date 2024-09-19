import React, { FC } from 'react';
import useMediaQuery from '@hooks/media-query';
import useSidebarState from '@hooks/sidebar-state';
import Sidebar from '@components/sidebar/sidebar';

interface LayoutProps {
  readonly children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const queryMatch = useMediaQuery('(min-width: 768px)');
  const showSidebar = useSidebarState();
  const transitionStyles = 'transition-all ease-in-out duration-600';
  const sidebarProps = {
    queryMatch,
    showSidebar,
  };

  return (
    <div className='max-w-full mx-auto'>
      <div className='min-h-screen flex'>
        <Sidebar {...sidebarProps} />
        <main
          className={`grow px-6 ${transitionStyles} ${
            showSidebar ? '' : '-translate-x-40 md:-translate-x-24'
          }`}
        >
          <div
            className={`w-2xl md:w-11/12 h-full mx-auto flex flex-col ${transitionStyles}`}
          >
            <div className='py-9 m-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
