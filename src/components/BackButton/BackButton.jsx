import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.scss'

const BackButton = ({src, num=-1}) => {
  
    const navigate = useNavigate()
  
    return (
    <div className='b-backbutton'>
        <img className='b-backbutton-img' src={src} alt="Botón para retroceder en la página" onClick={() => navigate(num)}></img>
    </div>
  )
}

export default BackButton