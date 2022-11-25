import React from 'react'
import './Offer.scss'  //Container de las ofertas

const Offer = ({offer}) => {
  
  console.log(offer);
  return (
    <div className='b-component-offer-container'>
      <div className='b-component-offer-locker'>
        <p>Fecha</p>
        <img className='b-locker' src="../../assets/open.svg" alt="Candado"></img>
      </div>
      <div className='b-component-offer-title'>
        <h3>{offer.title}</h3>
      </div>
      <div className='b-component-offer-info'> 
        <div>
          <img className='b-icon-2' src='../../assets/location.svg' alt=''></img>
          <span>{offer.location.city}</span>
        </div>
        <div>
          <img className='b-icon-2' src='../../assets/users-solid.svg' alt=''></img>
          <small>{offer.vacancies}</small>
        </div>
        <div>
          <img className='b-icon-2' src='../../assets/eye.svg' alt=''></img>
          <small>{offer.finalists}</small>
          </div>
        </div>
        <div className='b-component-offer-numbers'>
          <div className='b-component-offer-numbers-detail'>
            <h3>{offer.inscribed}</h3>
            <small>Inscritos</small>
          </div>
          <div className='b-component-offer-numbers-detail'>
            <h3>{offer.processing}</h3>
            <small>En proceso</small>
          </div>
          <div className='b-component-offer-numbers-detail'>
            <h3>{offer.finalists}</h3>
            <small>Finalistas</small>
          </div>
        </div>
    </div>
  )
}

export default Offer 