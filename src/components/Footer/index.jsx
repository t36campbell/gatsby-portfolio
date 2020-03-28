import React from "react"
import styled from "@emotion/styled"
import "../../utils/fontawesome"
import ButtonLink from "../ButtonLink"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  const icon_color = "#ccc"
  const icon_size = "2x"
  const FooterContainer = styled.div`
    background: transparent;
    position: fixed;
    width: 15%;
    bottom: 3%;
  `
  const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
  `
  return (
    <FooterContainer>
      <IconContainer>
        <a href={"https://github.com/t36campbell"}>
          <ButtonLink
            icon={["fab", "github-square"]}
            color={icon_color}
            size={icon_size}
          />
        </a>
        <br></br>
        <a href={""}>
          <ButtonLink
            icon={faFilePdf}
            color={icon_color}
            size={icon_size}
          />
        </a>
        <br></br>
        <a href={"https://www.linkedin.com/in/tyler-campbell36/"}>
          <ButtonLink
          icon={["fab", "linkedin"]}
          color={icon_color}
          size={icon_size}
          />
        </a>  
      </IconContainer>
    </FooterContainer>
  )
}

export default Footer
