import React, { useEffect, useState } from 'react'
import Offer from '../Offer/Offer';
import './GalleryOffers.scss'

const GalleryOffers = ({offers}) => {
  
    const [openOffers, setOpenOffers] = useState([]);
    const [closeOffers, setCloseOffers] = useState([]);
    const [showOpenOffers, setShowOpenOffers] = useState(true)

    useEffect(() => {
        setOpenOffers([...offers.filter(offer => offer.processnum < 100)] )
        setCloseOffers([...offers.filter(offer => offer.processnum === 100)])
    },[])
    
    console.log(openOffers);

    return (
    <div className='b-component-galleryoffers'>
       <div className='b-offers-showbuttons'>
          <h5 className='b-offers-links' onClick={() => setShowOpenOffers(true)}>Abiertas</h5>
          <h5 className='b-offers-links' onClick={() => setShowOpenOffers(false)}>Cerradas</h5>
        </div>
        <div className='b-offers-boxes-container'>
         {showOpenOffers ? openOffers.map((offer) => <Offer offer={offer}></Offer>) :
          closeOffers.map((offer) => <Offer offer={offer}></Offer>)} 
      </div>
    </div>
  )
}

export default GalleryOffers