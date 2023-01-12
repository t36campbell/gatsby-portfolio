import React, { FC } from 'react';
import SEO from '../seo/seo';
import Sidebar from '../sidebar/sidebar';

interface LayoutProps {
  readonly children: React.ReactNode;
  title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <>
    <SEO title={title} />
    <div className='flex flex-no-wrap min-h-screen w-full'>
      <Sidebar />
      <div className='container mx-auto py-9'>
        <div className='p-6 m-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {children}
        </div>
      </div>
    </div>
  </>
);

export default Layout;
