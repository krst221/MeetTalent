import React from 'react'
import './FormInput.scss'

const FormInput = ({name, input, placeholder}) => {
  return (
    <div>
        <label>{name}</label>
        <input type={input} placeholder={placeholder}></input>
    </div>
  )
}

export default FormInput