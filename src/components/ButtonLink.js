import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"

const ButtonLink = props => (
 <Link to={props.url}>
   <FontAwesomeIcon icon={props.icon} color={props.color} size={props.size}/>
 </Link>
)

export default ButtonLink