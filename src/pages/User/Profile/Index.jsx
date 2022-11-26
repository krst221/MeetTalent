import React, { useEffect } from 'react'
import './Index.scss'

import ImageUser from '../../../components/ImageUser/ImageUser';
import { NavLink } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { getOffers, getAllUsers } from '../../../redux/auth/auth.actions';

const Index = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
    dispatch(getAllUsers());
  }, [dispatch])
  
  return (
    <div className='b-user-container'>
      <div className='b-user-header'>
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
      <div className='b-position-nav'>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default Index