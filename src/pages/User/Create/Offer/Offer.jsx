import React from 'react'
import { useForm } from 'react-hook-form'
import BackButton from '../../../../components/BackButton/BackButton'
import Button from '../../../../components/Button/Button'
import Cross from '../../../../components/Cross/Cross'
import './Offer.scss'


const Offer = () => {

  const {register, handleSubmit, formState : {errors}} = useForm()

  return (
    <div className='b-offer-container'>
      <div className='b-offer-header'>
        <BackButton></BackButton>
        <h5 className='b-offer-title'>Descripción de la oferta</h5>
        <Cross></Cross>
      </div>
      <div className='b-offer-duplicate'>
        <h5 className='b-offer-title'>Duplicar la oferta</h5>
        <Button className={"b-offer-button"} text={"Administrativo"}></Button>
        <Button className={"b-offer-button"} text={"Project Manager"}></Button>
        <Button className={"b-offer-button"} text={"Programador"}></Button>
        <Button className={"b-offer-button"} text={"Especialista en marketing digital"}></Button>
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
        <span b-offer-spancontainer>¿Cómo crear un título efectivo?</span>
      </div>
      <div className='b-offer-container-button'>
        <Button className="b-form-button" text="Comenzar"></Button>
      </div>    
    </div>
  )
}

export default Offer