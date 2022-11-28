import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOffers, getCompany } from '../../../redux/auth/auth.actions'
import NavBar from '../../../components/NavBar/NavBar'
import RadiusButton from '../../../components/RadiusButton/RadiusButton'
import './Create.scss'

const Create = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const routeImg = '../../.././assets/document.svg'; 

  useEffect(() => {
    dispatch(getOffers());
    dispatch(getCompany())
 }, [dispatch])

  return (
    <div className='b-create-container'>
      <div className='b-create-offer'>
          <RadiusButton src={routeImg}></RadiusButton>
          <button className="b-create-button" text="Crear oferta" onClick={() => navigate("/user/create/offer")}>Crear oferta</button>
      </div>
      <div className='b-create-navbar'>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default Create