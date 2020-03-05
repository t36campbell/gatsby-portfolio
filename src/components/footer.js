import React from 'react'
import '../utils/fontawesome'
import ButtonLink from '../components/ButtonLink'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    const icon_color = "#a6a6a6";
    const icon_size = "2x";

    return (
    <footer style={{
        background: `transparent`, 
        position: `fixed`,
        width: `12%`,
        left: `3%`,
        bottom: `2%`,         
    }}
    >
        <div
            style={{
                display: `flex`,
                justifyContent: `space-evenly`
            }}
        >
            <ButtonLink to={''} icon={['fab', 'github-square']} color={icon_color} size={icon_size}/>    
            <br></br>
            <ButtonLink to={''} icon={faFilePdf} color={icon_color} size={icon_size}/>  
            <br></br>  
            <ButtonLink to={''} icon={['fab', 'linkedin']} color={icon_color} size={icon_size}/> 
        </div>
  </footer>
    )
}

export default Footer