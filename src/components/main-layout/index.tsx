import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const contentStyles = css`
    margin-top: 24px;
    margin-left: 0px;
  `;
  return (
    // <Layout hasSider>
    //   <Affix>
    //     <Sider
    //       css={sider_styles}
    //       breakpoint="lg"
    //       collapsedWidth="0"
    //       defaultCollapsed
    //       zeroWidthTriggerStyle={zeroWidthTriggerStyle}
    //     >
    //       <Menu mode="inline" css={menuStyles}>
    //         <Menu.Item key="1">
    //           <Link
    //             to="/"
    //             activeStyle={{ textDecoration: 'underline' }}
    //             css={link_styles}
    //           >
    //             Home
    //           </Link>
    //         </Menu.Item>
    //         <Menu.Item key="2">
    //           <Link
    //             to="/projects/"
    //             activeStyle={{ textDecoration: 'underline' }}
    //             partiallyActive
    //             css={link_styles}
    //           >
    //             Projects
    //           </Link>
    //         </Menu.Item>
    //         <Menu.Item key="3">
    //           <Link
    //             to="/blog/"
    //             activeStyle={{ textDecoration: 'underline' }}
    //             partiallyActive
    //             css={link_styles}
    //           >
    //             Blog
    //           </Link>
    //         </Menu.Item>
    //       </Menu>
    //       <Footer />
    //     </Sider>
    //   </Affix>
    //   <Layout>
    //     <Content css={contentStyles}>{children}</Content>
    //   </Layout>
    // </Layout>
    <div className="bg-dracula-dark" css={contentStyles}>
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;

export interface MainLayoutProps {
  readonly children: React.ReactNode;
}
