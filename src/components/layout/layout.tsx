import React, { FC, useState } from 'react';
import SEO from '@components/seo/seo';
import Sidebar from '../sidebar/sidebar';
import useMediaQuery from '@/utils/media-query';

interface LayoutProps {
  readonly children: React.ReactNode;
  title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const [showSidebar, toggleSidebar] = useState(false);
  const queryMatch = useMediaQuery('(min-width: 1024px)');

  const sidebarProps = { showSidebar, toggleSidebar, queryMatch };

  const handleBlur = () => {
    return !queryMatch && showSidebar
      ? 'absolute container mx-auto transition-transform ease-in-out blur-md z-100'
      : '';
  };

  return (
    <>
      <SEO title={title} />
      <div className='flex flex-no-wrap min-h-screen w-full'>
        <Sidebar {...sidebarProps} />
        <div
          className={handleBlur()}
          onClick={() =>
            !queryMatch && showSidebar ? toggleSidebar(!showSidebar) : null
          }
        >
          <div className='container mx-auto'>
            <div className='p-6 m-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
