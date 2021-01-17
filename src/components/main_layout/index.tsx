import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { Layout, Menu, Affix } from 'antd';
import Footer from '../footer';

const { Content, Sider } = Layout;

const Main_Layout = ({ children }) => {
  const underline = css({
    textDecoration: 'underline',
  });
  const link_styles = css({
    ':hover': underline,
    textDecoration: 'none',
    color: '#ccc',
    fontSize: '2rem',
  });
  const sider_styles = css({
    background: '#141414',
    zIndex: '1000',
    height: '100vh',
    position: 'absolute',
    color: '#ccc',
    top: '0',
    left: '0',
  });
  const menu_styles = css({
    background: '#141414 !important',
    marginTop: '24px',
    border: 'none',
    color: '#ccc',
  });
  const content_styles = css`
    margin-top: 24px;
    margin-left: 200px;
    @media (max-width: 992px) {
      margin-left: 0px;
    }
  `;
  return (
    <Layout hasSider="true">
      <Affix>
        <Sider
          css={sider_styles}
          breakpoint="lg"
          collapsedWidth="0"
          defaultCollapsed="true"
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
        >
          <Menu theme="dark" mode="inline" css={menu_styles}>
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
            <Menu.Item key="4">
              <Link
                to="/contact/"
                activeStyle={{ textDecoration: 'underline' }}
                css={link_styles}
              >
                Contact
              </Link>
            </Menu.Item>
          </Menu>
          <Footer />
        </Sider>
      </Affix>
      <Layout>
        <Content css={content_styles}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Main_Layout;
