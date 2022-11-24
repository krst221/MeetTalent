import React from 'react'
import './RadiusButton.scss'

const RadiusButton = ({src}) => {
  return (
    <div className='b-radius-button'>
      <img  className='b-radius-img' src={src} alt="icon"></img>
    </div>
  )
}

export default RadiusButton