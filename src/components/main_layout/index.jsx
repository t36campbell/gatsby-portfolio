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
    fontFamily: "Playfair Display",
    fontSize: "2rem",
  })
  return (
    <Layout>
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
        style={{
            zIndex: 1000,
            height: '100vh',
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
        <Menu theme="dark" mode="inline" style={{ marginTop: '24px'}}>
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
                    css={link_styles}
                >
                    Projects
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link
                    to="/blog/"
                    activeStyle={{ textDecoration: "underline" }}
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
