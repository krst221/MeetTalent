import React from 'react'
import Logo from '../../../../components/Logo/Logo'
import NavBar from '../../../../components/NavBar/NavBar'
import './Denied.scss'

const Denied = () => {
  
  return (
    <div className='b-denied'>
      <div className='b-denied-container'>
        <div className='b-denied-header'>
          <div className='white'>
          </div>
          <h3 className='b-denied-title'>Acceso denegado</h3>
          <div className='white'>
          </div>
        </div> 
        <div className='b-login-logo'>
          <Logo></Logo>
        </div>        
        <h2>Acceso denegado. Necesitas una cuenta de empresa.</h2>
      </div>
      <div className='b-create-navbar'>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default Denied