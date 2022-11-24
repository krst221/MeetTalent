import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.scss'

const BackButton = () => {
  
    const navigate = useNavigate()
  
    return (
    <div className='b-backbutton'>
        <img className='b-backbutton-img' src="../../assets/back.svg" alt="Botón para retroceder en la página" onClick={() => navigate(-1)}></img>
    </div>
  )
}

export default BackButton