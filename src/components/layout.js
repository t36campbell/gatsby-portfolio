/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "@emotion/styled"
import Sidenav from "./sidenav"

const Layout = ({ children }) => {  
  
  const PageContainer = styled .div`
    height: 100vh;
    width: 100vw;
  `
  const MainContainer = styled.div`
    width: 70%;
    margin-left: 20%;
    margin-right: 20%;
    padding: 5% 5%;
    max-width: 70%;
  `
  
  return (
    <PageContainer>
      <Sidenav/>
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
    </PageContainer>
  )
}

export default Layout

