import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import BackButton from '../../../components/BackButton/BackButton'
import NavBar from '../../../components/NavBar/NavBar'
import './Offers.scss'
import {getOffers} from "../../../redux/auth/auth.actions"
import GalleryOffers from '../../../components/GalleryOffers/GalleryOffers'
import Loading from '../../../components/Loading/Loading'

const Offers = () => {

  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  
  useEffect(() => {
    dispatch(getOffers());
    setOffers(JSON.parse(localStorage.getItem('offers')));
  }, [dispatch])


  return (
    <div className='b-offers-container'>
      <div className='b-offers-header'>
        <BackButton src="../../../assets/back.svg"></BackButton>
        <h5 className='b-offer-title'>Ofertas</h5>
        <span className='b-p'></span>
      </div>
      {offers.length < 1 ? <Loading /> : <GalleryOffers offers={offers} />}
      <div className='b-position-nav'>
        <NavBar></NavBar>
      </div>
    </div>
  ) 
}

export default Offers