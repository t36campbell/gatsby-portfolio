import React from "react"
import styled from "@emotion/styled"
import "../../utils/fontawesome"
import ButtonLink from "../button_link/index"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  const icon_color = "#ccc"
  const icon_size = "2x"
  const FooterContainer = styled.div`
    background: transparent;
    dispay: flex;
    justify-content: space-evenly;
    position: sticky;
    bottom: 3%;
    width: 200px;
    top: 97%;
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
        <a href={"/Tyler Campbell Resume.pdf"}>
          <ButtonLink icon={faFilePdf} color={icon_color} size={icon_size} />
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
