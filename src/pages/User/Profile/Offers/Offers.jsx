import React, { useEffect, useState } from 'react'
import BackButton from '../../../../components/BackButton/BackButton';
import GalleryOffers from '../../../../components/GalleryOffers/GalleryOffers';
import Loading from '../../../../components/Loading/Loading';

const UserOffers = () => {

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers(JSON.parse(localStorage.getItem('user')).offers);
  }, [])


  return (
    <>
      {offers.length < 1 ? <Loading /> :
      <>
        <div className='b-offers-container'>
          <div className='b-offers-header'>
          <div className='white'>
              <BackButton src="/assets/back.svg"></BackButton>
            </div>
            <h3 className='b-profile-title'>Mis ofertas</h3>
            <div className='white'>
            </div>
          </div>
          <GalleryOffers offers={offers} own={true} />
        </div>
      </>}
    </>
  )
}

export default UserOffers