import React from 'react'
import './Heart.scss'

const Heart = ({src}) => {
  return (
    <div>
      <div className='b-heart'>
            <img className='b-heart-img' src={src} alt="Botón para retroceder en la página"></img>
        </div>
    </div>
  )
}

export default Heart