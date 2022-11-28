import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Offer.scss'  //Container de las ofertas
import { closeOffer, joinOffer } from '../../redux/auth/auth.actions';
import ProgressBar from "@ramonak/react-progress-bar";

const Offer = ({offer, open, own}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCompany = localStorage.getItem('isCompany') || null;

  const close = () => {
    if (open) {
      dispatch(closeOffer({oId: offer._id}, navigate));
    }
  }

  const join = () => {
    if (open) {
      dispatch(joinOffer({uId: JSON.parse(localStorage.getItem('user'))._id, oId: offer._id}, navigate));
    }
  }
  
  return (
    <div className='b-component-offer-container'>
      <div className='b-component-offer-locker'>
        <p>{(new Date(offer.createdAt).getDay()).toLocaleString('es-ES', {minimumIntegerDigits: 2,useGrouping: false}) + '/' + (new Date(offer.createdAt).getMonth()+1).toLocaleString('es-ES', {minimumIntegerDigits: 2,useGrouping: false}) + '/' + new Date(offer.createdAt).getUTCFullYear()}</p>
        {JSON.parse(localStorage.getItem('user'))._id === offer.company ? <img className='b-locker' onClick={() => close()} src={open ? "/assets/open.svg" : '/assets/close.svg'} alt="Candado"></img> : open && isCompany==='false' && !own ? <img className='b-locker' onClick={() => join()} src={"/assets/plus.png"} alt="Join" /> : ''}
      </div>
      <div className='b-component-offer-title'>
        <h3 onClick={() => join()}>{offer.title}</h3>
      </div>
      <div className='b-component-offer-proc'>
        <span>Proceso</span><span>{offer.processnum} %</span>
      </div>
      <div className='b-component-offer-bar'>
        <ProgressBar completed={offer.processnum} bgColor='green' width='240px' isLabelVisible={false} height='15px' margin='0px' transitionDuration='0.5s'/>
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
          <small>{(new Date(offer.createdAt).getDay()).toLocaleString('es-ES', {minimumIntegerDigits: 2,useGrouping: false}) + '/' + (new Date(offer.createdAt).getMonth()+2).toLocaleString('es-ES', {minimumIntegerDigits: 2,useGrouping: false}) + '/' + new Date(offer.createdAt).getUTCFullYear()}</small>
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