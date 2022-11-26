import React from 'react'
import './Index.scss'

import ImageUser from '../../components/ImageUser/ImageUser';
import BackButton from '../../components/BackButton/BackButton';
import { NavLink } from 'react-router-dom';

const Index = () => {



  return (
    <div className='b-user-container'>
    <div className='b-user-header'>
        <BackButton src="../../../assets/back.svg"></BackButton>
        <h3 className='b-user-title'>Perfil</h3>
      </div>
      <div className='b-user-info'> 
        <ImageUser src={JSON.parse(localStorage.getItem("user")).picture}/>
        <h4 className='b-user-info-name'>{JSON.parse(localStorage.getItem("user")).name}</h4>
      </div>
      <div className='b-user-info-links'>
      <NavLink to={"/user/profile/detail"}><div className='b-user-info-links--box'>
          <h5 className='b-user-info-name--sec'>Tu cuenta</h5>
          <img className='b-user-links-icon' src='../../../assets/next.svg' alt='next'></img>
        </div></NavLink>
        <div className='b-user-info-links--box'>
          <h5 className='b-user-info-name--sec'>Administradores</h5>
          <img className='b-user-links-icon' src='../../../assets/next.svg' alt='next'></img>
        </div>
        <div className='b-user-info-links--box'>
          <h5 className='b-user-info-name--sec'>Suscripción y facturación</h5>
          <img className='b-user-links-icon' src='../../../assets/next.svg' alt='next'></img>
        </div>
        <div className='b-user-info-links--box'>
          <h5 className='b-user-info-name--sec'>Configuración</h5>
          <img className='b-user-links-icon' src='../../../assets/next.svg' alt='next'></img>
        </div>
        <div className='b-user-info-links--box'>
          <h5 className='b-user-info-name--sec'>Ayuda</h5>
          <img className='b-user-links-icon' src='../../../assets/next.svg' alt='next'></img>
        </div>
      </div> 
    </div>
  )
}

export default Index