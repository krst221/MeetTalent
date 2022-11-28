import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <div className='b-navbar'>
      <div className='b-complete-icon' onClick={() => navigate("/user")}>
        <img  className='b-icon' src='/assets/house.svg' alt="Casa"></img>
        <small className='b-span-icon'>Home</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/user/candidates")}>
        <img  className='b-icon' src='/assets/users-solid.svg' alt="Candidatos"></img>
        <small className='b-span-icon'>Candidatos</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/user/create")}>
        <img  className='b-icon' src='/assets/square-plus-regular.svg' alt=""></img>
        <small className='b-span-icon'>Crear</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/user/offers")}>
        <img  className='b-icon' src='/assets/bag.svg' alt=""></img>
        <small className='b-span-icon'>Ofertas</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/login")}>
        <img  className='b-icon' src='/assets/logout.svg' alt=""></img>
        <small className='b-span-icon'>Log out</small>
      </div>
    </div>
  )
}

export default NavBar