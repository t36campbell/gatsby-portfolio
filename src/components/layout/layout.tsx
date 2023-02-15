import React, { FC, SyntheticEvent, useState } from 'react';
import useMediaQuery from '@hooks/media-query';
import SEO, { SeoProps } from '@components/seo/seo';
import Sidebar from '@components/sidebar/sidebar';
import { isSSR } from '@utils/ssr';

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
  const initialState = isSSR
    ? null
    : JSON.parse(localStorage.getItem('sidebarState') ?? 'false');
  const saveState = (state: boolean) => {
    if (!isSSR) localStorage.setItem('sidebarState', `${state}`);
    toggleSidebar(state);
  };
  const [showSidebar, toggleSidebar] = useState(initialState);
  const queryMatch = useMediaQuery('(min-width: 1024px)');

  const sidebarProps = {
    showSidebar,
    handleSidebarState: saveState,
    queryMatch,
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
            ? (saveState(!showSidebar), handleStopPropagation(e))
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
