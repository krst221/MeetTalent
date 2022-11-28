import React, { useEffect, useState } from 'react'
import BackButton from '../../../../components/BackButton/BackButton';
import GalleryMessages from '../../../../components/GalleryMessages/GalleryMessages';
import Loading from '../../../../components/Loading/Loading';

const Messages = () => {

  const [inbox, setInbox] = useState([]);

  useEffect(() => {
    setInbox(JSON.parse(localStorage.getItem('user')).inbox);
  }, [])

  return (
    <>
        <div className='b-offers-container'>
          <div className='b-offers-header'>
          <div className='white'>
              <BackButton src="/assets/back.svg"></BackButton>
            </div>
            <h3 className='b-profile-title'>Mis mensajes</h3>
            <div className='white'>
            </div>
          </div>
          {inbox.length < 1 ? <Loading /> :
            <GalleryMessages inbox={inbox} own={true} />
          }
        </div>
    </>
  )
}

export default Messages