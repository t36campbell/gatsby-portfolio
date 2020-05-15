import React from "react"
import styled from "@emotion/styled"
import Header from "../header/index"

const Layout = ({ children }) => {
  const MainContainer = styled.div`
    display: "flex", 
    flexDirection: "column",
    alignItems: "center",
    width: 70%;
    margin-left: 20%;
    margin-right: 7.5%;
    padding: 2rem;
    
    @media (max-width: 960px){
      width: 95%;
      margin: -1.25rem;
      padding: .5rem;
      padding-top: 2rem;
    }
    @media (max-width: 600px){
      width: 100%;
      margin: -2rem;
      padding-top: 2rem;
    }
  `
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  )
}

export default Layout
