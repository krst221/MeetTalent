import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getOffers } from '../../../../redux/auth/auth.actions'
import BackButton from '../../../../components/BackButton/BackButton'
import Button from '../../../../components/Button/Button'
import Cross from '../../../../components/Cross/Cross'
import './Offer.scss'
import Loading from '../../../../components/Loading/Loading'


const Offer = () => {
  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [length, setLength] = useState(0);
  
  useEffect(() => {
    dispatch(getOffers());
    setOffers(JSON.parse(localStorage.getItem('offers')));
  }, [dispatch])
  
  console.log(length);

  const {register, handleSubmit, formState : {errors}} = useForm()

  return (
    <div className='b-offer-container'>
      <div className='b-offer-header'>
        <BackButton src="../../assets/back.svg"></BackButton>
        <h5 className='b-offer-title'>Descripción de la oferta</h5>
        <Cross src="../../assets/cross.svg"></Cross>
      </div>
      <div className='b-offer-duplicate'>
        <h5 className='b-offer-title'>Duplicar la oferta</h5>
        {offers.length < 1 ? <Loading /> : 
          [...offers].reverse().slice(0,3).map((offer, index) => <Button key={index} className={"b-offer-button"} text={offer.title}></Button>)}
        {length < 4 ? <Button className={"b-offer-button"} text={"Administrativo"}></Button> : ''}
        {length < 4 ? <Button className={"b-offer-button"} text={"Project Manager"}></Button> : ''}
        {length < 4 ? <Button className={"b-offer-button"} text={"Programador"}></Button> : ''}
        {length < 4 ? <Button className={"b-offer-button"} text={"Especialista en marketing digital"}></Button> : ''}
      </div>
      <form className='b-offer-form' onSubmit={(handleSubmit())}>
        <h5 className='b-offer-title'>Título de la nueva oferta</h5>
        <input className='b-offer-button' type="text" placeholder='Escribe el título' {...register("title", {
          required : "El campo no puede ser vacío"
        })}/>
        <div className='b-errors-container'>
        {errors.email && <>
          {errors.email.type === "required" && <p className='b-login-error'>{errors.email.message}</p>}
        </>}
        </div>
      </form>
      <div className='b-offer-spancontainer'>
        <span>¿Cómo crear un título efectivo?</span>
      </div>
      <div className='b-offer-container-button'>
        <Button className="b-form-button" text="Comenzar"></Button>
      </div>    
    </div>
  )
}

export default Offer