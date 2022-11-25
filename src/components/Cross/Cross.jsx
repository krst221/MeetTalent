import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Cross.scss"

const Cross = ({src}) => {
  
    const navigate = useNavigate()
  
    return (
    <div className='b-crossbutton'>
        <div className='b-crossbutton'>
            <img className='b-crossbutton-img' src={src} alt="Botón para retroceder en la página" onClick={() => navigate("/login")}></img>
        </div>
    </div>
  )
}

export default Cross