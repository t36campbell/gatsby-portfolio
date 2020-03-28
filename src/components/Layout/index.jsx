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
    
    @media (max-width: 980px){
      width: 85%;
      margin: 1rem;
      padding: .5rem;
    }
    @media (max-width: 500px){
      width: 85%;
      margin: -1rem;
      padding: .5rem;
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
