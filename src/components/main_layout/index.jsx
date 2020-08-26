import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Footer from "../footer"
import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

const Main_Layout = ({ children }) => {
  const underline = css({
    textDecoration: "underline",
  })
  const link_styles = css({
    ":hover": underline,
    textDecoration: "none",
    color: "#ccc",
    fontSize: "2rem",
  })
  const sider_styles = css({
    background: "#141414",
    zIndex: "1000",
    height: "100vh",
    position: "sticky",
    color: "#ccc",
    top: "0",
    left: "0",
  })
  const menu_styles = css({
    background: "#141414 !important",
    marginTop: '24px',
    border: "none",
    color: "#ccc",
  })
  return (
    <Layout>
        <Sider
        css={sider_styles}
        breakpoint="lg"
        collapsedWidth="0"
        defaultCollapsed="true"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
        >
        <Menu
            theme="dark"
            mode="inline" 
            css={menu_styles}
        >
            <Menu.Item key="1">
                <Link
                    to="/"
                    activeStyle={{ textDecoration: "underline" }}
                    css={link_styles}
                >
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link
                    to="/projects/"
                    activeStyle={{ textDecoration: "underline" }}
                    partiallyActive={true}
                    css={link_styles}
                >
                    Projects
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link
                    to="/blog/"
                    activeStyle={{ textDecoration: "underline" }}
                    partiallyActive={true}
                    css={link_styles}
                >
                    Blog
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link
                    to="/contact/"
                    activeStyle={{ textDecoration: "underline" }}
                    css={link_styles}
                >
                    Contact
                </Link>
            </Menu.Item>
        </Menu>
        <Footer />
        </Sider>
        <Layout>
            <Content style={{ marginTop: '24px', overflow: "initial"}}>
                {children}
            </Content>
        </Layout>
    </Layout>  
  )
}

export default Main_Layout
