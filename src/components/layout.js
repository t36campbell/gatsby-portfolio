import React from "react"
import styled from "@emotion/styled"
import Sidenav from "./sidenav"

const Layout = ({ children }) => {
  const MainContainer = styled.div`
    display: "flex", 
    flexDirection: "column",
    alignItems: "center",
    width: 70%;
    margin-left: 20%;
    margin-right: 7.5%;
    padding 2rem;
  `
  return (
    <>
      <Sidenav />
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
    </>
  )
}

export default Layout
