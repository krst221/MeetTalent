import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <div className='b-navbar'>
      <div className='b-complete-icon'>
        <img  className='b-icon' src='/assets/house.svg' alt="Casa" onClick={() => navigate("/user")}></img>
        <small className='b-span-icon'>Home</small>
      </div>
      <div className='b-complete-icon'>
        <img  className='b-icon' src='/assets/users-solid.svg' alt="Candidatos" onClick={() => navigate("/user/create/test")}></img>
        <small className='b-span-icon'>Candidatos</small>
      </div>
      <div className='b-complete-icon'>
        <img  className='b-icon' src='/assets/square-plus-regular.svg' alt="" onClick={() => navigate("/user/create")}></img>
        <small className='b-span-icon'>Crear</small>
      </div>
      <div className='b-complete-icon'>
        <img  className='b-icon' src='/assets/bell-solid.svg' alt="" onClick={() => navigate("/user/notifications")}></img>
        <small className='b-span-icon'>Notificaciones</small>
      </div>
      <div className='b-complete-icon'>
        <img  className='b-icon' src='/assets/bag.svg' alt="" onClick={() => navigate("/user/offers")}></img>
        <small className='b-span-icon2'>Ofertas</small>
      </div>
    </div>
  )
}

export default NavBar