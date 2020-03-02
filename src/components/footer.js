import React from 'react'
import '../utils/fontawesome'
import ButtonLink from '../components/ButtonLink'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    const icon_color = "#232323";
    const icon_size = "2x";

    return (
    <footer
        style={{
        background: `transparent`,
        marginBottom: `1.45rem`,            }}
        >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
                display: `flex`,
                justifyContent: `space-evenly`
            }}
        >
        <h1 style={{ margin: 0 }}>
            <ButtonLink to={''} icon={['fab', 'github-square']} color={icon_color} size={icon_size}/>    
        </h1>
        <h1 style={{ margin: 0 }}>
            <ButtonLink to={''} icon={faFilePdf} color={icon_color} size={icon_size}/>    
        </h1>
        <h1 style={{ margin: 0 }}>
            <ButtonLink to={''} icon={['fab', 'linkedin']} color={icon_color} size={icon_size}/>    
        </h1>
    </div>
  </footer>
    )
}

export default Footer