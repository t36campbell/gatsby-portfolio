import React from 'react'
import styled from '@emotion/styled'
import '../utils/fontawesome'
import ButtonLink from '../components/button_link'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    const icon_color = "#a6a6a6";
    const icon_size = "2x";

    return (
    <FooterContainer>
        <IconContainer>
            <ButtonLink to={''} icon={['fab', 'github-square']} color={icon_color} size={icon_size}/>    
            <br></br>
            <ButtonLink to={''} icon={faFilePdf} color={icon_color} size={icon_size}/>  
            <br></br>  
            <ButtonLink to={''} icon={['fab', 'linkedin']} color={icon_color} size={icon_size}/> 
        </IconContainer>
    </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    background: transparent;
    position: fixed;
    width: 12%;
    left: 3%;
    bottom: 2%;   
`
const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`