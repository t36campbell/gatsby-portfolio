import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Layout, Menu, Affix } from 'antd';
import Footer from '../footer';

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const { Content, Sider } = Layout;
  const underline = css({
    textDecoration: 'underline',
  });
  const link_styles = css({
    '&:hover': underline,
    textDecoration: 'none',
    color: '#ccc',
    fontSize: '2rem',
  });
  const sider_styles = css({
    background: '#141414',
    'z-index': '1000',
    height: '100vh',
    position: 'absolute',
    color: '#ccc',
    top: '0',
    left: '0',
  });
  const menuStyles = css({
    background: '#141414 !important',
    marginTop: '24px',
    border: 'none',
    color: '#ccc',
  });
  const contentStyles = css`
    margin-top: 24px;
    margin-left: 200px;
    @media (max-width: 992px) {
      margin-left: 0px;
    }
  `;

  const zeroWidthTriggerStyle = {
    top: '24px',
    height: '36px',
    background: '#141414',
    boxShadow: '0 18px 36px rgba(0, 0, 0, 075)',
    color: '#999',
  };
  return (
    <Layout hasSider>
      <Affix>
        <Sider
          css={sider_styles}
          breakpoint="lg"
          collapsedWidth="0"
          defaultCollapsed
          zeroWidthTriggerStyle={zeroWidthTriggerStyle}
        >
          <Menu theme="dark" mode="inline" css={menuStyles}>
            <Menu.Item key="1">
              <Link
                to="/"
                activeStyle={{ textDecoration: 'underline' }}
                css={link_styles}
              >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link
                to="/projects/"
                activeStyle={{ textDecoration: 'underline' }}
                partiallyActive
                css={link_styles}
              >
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link
                to="/blog/"
                activeStyle={{ textDecoration: 'underline' }}
                partiallyActive
                css={link_styles}
              >
                Blog
              </Link>
            </Menu.Item>
          </Menu>
          <Footer />
        </Sider>
      </Affix>
      <Layout>
        <Content css={contentStyles}>{children}</Content>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;

export interface MainLayoutProps {
  readonly children: React.ReactNode;
}
