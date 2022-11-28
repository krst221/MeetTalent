/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Message from '../Message/Message'
import './GalleryMessages.scss'

const GalleryMessages = ({inbox}) => {
    return (
    <div className='b-component-galleryoffers'>
        <div className='b-offers-boxes-container'>
          {[...inbox].reverse().map((mail, index) => <Message key={index} message={mail}></Message>)}
        </div>
    </div>
  )
}

export default GalleryMessages