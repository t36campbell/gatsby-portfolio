import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ButtonLink = props => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      color={props.color}
      size={props.size}
    />
  )
}
export default ButtonLink
