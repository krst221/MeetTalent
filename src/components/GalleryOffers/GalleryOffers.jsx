/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Offer from '../Offer/Offer';
import Search from '../Search/Search';
import './GalleryOffers.scss'

const GalleryOffers = ({offers, own}) => {
  
    const [openOffers, setOpenOffers] = useState([]);
    const [closeOffers, setCloseOffers] = useState([]);
    const [showOpenOffers, setShowOpenOffers] = useState(true)
    const [offersFiltered, setOffersFiltered] = useState([])

    useEffect(() => {
        setOffersFiltered(offers)
        setOpenOffers([...offers].filter(offer => offer.processnum < 100))
        setCloseOffers([...offers].filter(offer => offer.processnum === 100))
    },[])
  
    const searchOffers = (title) => {
      if(title.length < 1 && showOpenOffers) {
        
        return setOpenOffers([...offers].filter(offer => offer.processnum < 100))
      
      } else if (title.length < 1 && !showOpenOffers) {
        
        return setCloseOffers([...offers].filter(offer => offer.processnum === 100))

      } else {
        const filtered = offers.filter((offer) => offer.title.toLowerCase().includes(title.toLowerCase()))
        setOffersFiltered([...filtered])
        if (showOpenOffers) setOpenOffers([...offersFiltered].filter(offer => offer.processnum < 100))
        else setCloseOffers([...offersFiltered].filter(offer => offer.processnum === 100))
      }
    } 
  
    return (
    <>
      <div className='b-offers-search'>
        <Search setSearch={searchOffers}></Search>
      </div>
    
    <div className='b-component-galleryoffers'>
       {!own ? <div className='b-offers-showbuttons'>
          <h5 className= {`b-offers-links ${showOpenOffers ? "dark" : ""}`} onClick={() => setShowOpenOffers(true)}>Abiertas</h5>
          <h5 className={`b-offers-links ${showOpenOffers ? "" : "dark"}`} onClick={() => setShowOpenOffers(false)}>Cerradas</h5>
        </div>: ''}
        <div className={`b-offers-boxes-container ${own ? 'margin-top' : ''}`}>
         {showOpenOffers ? [...openOffers].reverse().map((offer) => <Offer offer={offer} open={true} own={own}></Offer>) :
          [...closeOffers].reverse().map((offer) => <Offer offer={offer} open={false} own={own}></Offer>)}
        </div>
    </div></>
  )
}

export default GalleryOffers