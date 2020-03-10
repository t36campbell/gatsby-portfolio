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
  return (
    <>
      <BackgroundImg/>
      <Sidenav/>
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
    </>
  )
}

export default Layout

const MainContainer = styled.div`
  width: 70%;
  margin-left: 20%;
  margin-right: 20%;
  padding: 5% 5%;
  max-width: 70%;
  z-index: 1;
`
const BackgroundImg = styled.div`
  background: url("../images/bg-2.jpg");
  background-size: cover; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`