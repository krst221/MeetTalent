import React from 'react'
import './Button.scss'

const Button = ({text, className}) => {

  return (
    <div>
        <button className={className}>{text}</button>
    </div>
  )
}

export default Button