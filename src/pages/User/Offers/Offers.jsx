import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import BackButton from '../../../components/BackButton/BackButton'
import Cross from '../../../components/Cross/Cross'
import NavBar from '../../../components/NavBar/NavBar'
import Offer from '../../../components/Offer/Offer'
import Search from '../../../components/Search/Search'
import './Offers.scss'
import {getOffers} from "../../../redux/auth/auth.actions"

const Offers = () => {

  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [openOffers, setOpenOffers] = useState([]);
  const [closeOffers, setCloseOffers] = useState([]);
  const[showOpenOffers, setShowOpenOffers] = useState(true)
  useEffect(() => {
    dispatch(getOffers());
    setOffers(JSON.parse(localStorage.getItem('offers')));
    if(offers.length > 0) {
      setOpenOffers([...offers.filter(offer => offer.processnum < 100)] )
      setCloseOffers([...offers.filter(offer => offer.processnum === 100)])
    }
  }, [dispatch, offers])
  
  console.log(openOffers);
  console.log(closeOffers);

  return (
    <div className='b-offers-container'>
      <div className='b-offers-header'>
        <BackButton src="../../../assets/back.svg"></BackButton>
        <h5 className='b-offer-title'>Ofertas</h5>
      </div>
      <div className='b-offers-search'>
        <Search></Search>
      </div>
      <div className='b-offers-showbuttons'>
          <h5 className='b-offers-links' onClick={() => setShowOpenOffers(true)}>Abiertas</h5>
          <h5 className='b-offers-links' onClick={() => setShowOpenOffers(false)}>Cerradas</h5>
        </div>
      <div className='b-offers-boxes-container'>
         {showOpenOffers ? (<Offer></Offer>) : (<Cross></Cross>)} 
      </div>
      <NavBar></NavBar>
    </div>
  )
}

export default Offers