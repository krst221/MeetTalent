import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import './Offers.scss'
import GalleryOffers from '../../../components/GalleryOffers/GalleryOffers'
import Loading from '../../../components/Loading/Loading'

const Offers = () => {

  const [offers, setOffers] = useState([]);
  
  useEffect(() => {
    setOffers(JSON.parse(localStorage.getItem('offers')));
  }, [])

  return (
    <>
      {offers.length < 1 ? <Loading /> :
      <>
        <div className='b-offers-container'>
          <div className='b-offers-header'>
            <h5 className='b-offer-title'>Ofertas</h5>
          </div>
          <GalleryOffers offers={offers} />
          <div className='b-position-nav'>
            <NavBar></NavBar>
          </div>
        </div>
      </>}
    </>
  ) 
}

export default Offers