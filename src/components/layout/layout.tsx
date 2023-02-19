import React, { FC, SyntheticEvent } from 'react';
import useMediaQuery from '@hooks/media-query';
import useSidebarState from '@hooks/sidebar-state';
import SEO, { SeoProps } from '@components/seo/seo';
import Sidebar from '@components/sidebar/sidebar';
import { handleSidebarState } from '@components/sidebar/sidebar.constants';

interface LayoutProps extends SeoProps {
  readonly children: React.ReactNode;
}

let seo: SeoProps;

const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  image,
  path,
}: LayoutProps) => {
  seo = { title, description, image, path };
  const queryMatch = useMediaQuery('(min-width: 1024px)');
  const showSidebar = useSidebarState();

  const sidebarProps = {
    queryMatch,
    showSidebar,
  };

  const handleBlur = () => {
    return !queryMatch && showSidebar
      ? 'absolute container mx-auto blur-md z-10'
      : '';
  };

  const handleStopPropagation = (event: SyntheticEvent) => {
    return event.target !== event.currentTarget
      ? (event.stopPropagation(), console.log('true'))
      : console.log('false');
  };

  return (
    <div className='flex flex-no-wrap min-h-screen w-full'>
      <Sidebar {...sidebarProps} />
      <div
        className={`w-full mx-auto transition-all ease-in-out duration-300 ${handleBlur()}`}
        onClick={(e: SyntheticEvent) =>
          !queryMatch && showSidebar
            ? (handleSidebarState(!showSidebar), handleStopPropagation(e))
            : null
        }
      >
        <div className='p-6 m-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

export const Head = () => <SEO {...seo} />;
