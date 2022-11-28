import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BackButton from '../../../../components/BackButton/BackButton'
import Button from '../../../../components/Button/Button'
import Cross from '../../../../components/Cross/Cross'
import './Offer.scss'
import Loading from '../../../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'


const Offer = () => {
  const {register, handleSubmit, formState : {errors}, reset, setValue} = useForm()
  const [offers, setOffers] = useState([]);
  const [length, setLength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setOffers(JSON.parse(localStorage.getItem('offers')));
    if(offers.length >= 4) setLength(4);
    else setLength(offers.length);
    localStorage.setItem('copyoffer', null);
  }, [offers.length])

  const setOffer = (offer) => {
    if(offer === 'e') {
      const preOffer = {
        title: 'Especialista en marketing digital',
        vacancies: 10,
        language: 'Inglés',
        location: {
          city: 'London',
          country: 'UK'
        },
        conditions: {
          salary: '24K - 28K',
          shift: 'Jornada completa',
          contract: 'Contrado indefinido',
          availability: 'Inmediata',
          requisites: 'Don de gentes'
        },
        sector: 'Marketing',
        description: 'Marketing digital internacional',
      }
      localStorage.setItem('copyoffer', JSON.stringify(preOffer));
    }
    else if(offer === 'p') {
      const preOffer = {
        title: 'Programador',
        vacancies: 3,
        language: 'Inglés',
        location: {
          city: 'Tokio',
          country: 'Japón'
        },
        conditions: {
          salary: '27K - 31K',
          shift: 'Jornada variable',
          contract: 'Contrado Temporal',
          availability: '1 mes',
          requisites: 'Programación multilenguaje'
        },
        sector: 'Programación',
        description: 'Programación multilenguaje para el sector de robótica',
      }
      localStorage.setItem('copyoffer', JSON.stringify(preOffer));
    }
    else if(offer === 'm') {
      const preOffer = {
        title: 'Project Manager',
        vacancies: 1,
        language: 'Francés',
        location: {
          city: 'París',
          country: 'Francia'
        },
        conditions: {
          salary: '35K - 38K',
          shift: 'Jornada completa',
          contract: 'Contrado de prueba',
          availability: '15 días',
          requisites: 'Gestión de conflictos'
        },
        sector: 'Marketing',
        description: 'Jefe de proyecto dedicado a la publicidad y RRPP',
      }
      localStorage.setItem('copyoffer', JSON.stringify(preOffer));
    }
    else if(offer === 'a') {
      const preOffer = {
        title: 'Administrativo',
        vacancies: 8,
        language: 'Español',
        location: {
          city: 'Madrid',
          country: 'España'
        },
        conditions: {
          salary: '18K - 20K',
          shift: 'Jornada parcial',
          contract: 'Contrado de prueba',
          availability: '1 mes',
          requisites: 'Paquete Office'
        },
        sector: 'Inmobiliaria',
        description: 'Encargado de gestionar alquileres e hipotecas',
      }
      localStorage.setItem('copyoffer', JSON.stringify(preOffer));
    }
    else localStorage.setItem('copyoffer', JSON.stringify(offer));
    setValue('title', JSON.parse(localStorage.getItem('copyoffer')).title);
    
  }

  const submit = (formdata) => {
    if(localStorage.getItem('copyoffer') === 'null') localStorage.setItem('copyoffer', JSON.stringify(formdata));
    reset();
    navigate('/user/create/offer/form');
  }

  return (
    <>
      {offers.length < 1 && offers === null ? <Loading /> :
        <>
        <div className='b-offer-container'>
          <div className='b-offer-header'>
            <BackButton src="../../assets/back.svg"></BackButton>
            <h5 className='b-offer-title'>Descripción de la oferta</h5>
            <Cross src="../../assets/cross.svg"></Cross>
          </div>
          <div className='b-offer-duplicate'>
            <h5 className='b-offer-title'>Duplicar la oferta</h5>
            {[...offers].reverse().slice(0,4).map((offer, index) => <button key={index} className={"b-offer-button"} onClick={() => setOffer(offer)}>{offer.title}</button>)}
            {length === 0 ? <>
                <button className={"b-offer-button"} onClick={() => setOffer('a')}>{"Administrativo"}</button>
                <button className={"b-offer-button"} onClick={() => setOffer('m')}>{"Project Manager"}</button>
                <button className={"b-offer-button"} onClick={() => setOffer('p')}>{"Programador"}</button>
                <button className={"b-offer-button"} onClick={() => setOffer('e')}>{"Especialista en marketing digital"}</button>
              </> : length === 1 ? <>
                <button className={"b-offer-button"} onClick={() => setOffer('m')}>{"Project Manager"}</button>
                <button className={"b-offer-button"} onClick={() => setOffer('p')}>{"Programador"}</button>
                <button className={"b-offer-button"} onClick={() => setOffer('e')}>{"Especialista en marketing digital"}</button>
              </> : length === 2 ? <>
                <button className={"b-offer-button"} onClick={() => setOffer('p')}>{"Programador"}</button>
                <button className={"b-offer-button"} onClick={() => setOffer('e')}>{"Especialista en marketing digital"}</button>
              </> : length === 3 ? <>
                <button className={"b-offer-button"} onClick={() => setOffer('e')}>{"Especialista en marketing digital"}</button>
              </> : ''}
          </div>
          <form className='b-offer-form' onSubmit={(handleSubmit(submit))}>
            <h5 className='b-offer-title'>Título de la nueva oferta</h5>
            <input className='b-offer-button' type="text" placeholder='Escribe el título' {...register("title", {
              required : "El campo no puede ser vacío"
            })}/>
            <div className='b-errors-container'>
            {errors.title && <>
              {errors.title.type === "required" && <p className='b-login-error'>{errors.title.message}</p>}
            </>}
            </div>
            <div className='b-offer-spancontainer'>
              <span>¿Cómo crear un título efectivo?</span>
            </div>
            <div className='b-offer-container-button'>
              <Button className="b-form-button" text="Comenzar"></Button>
            </div>    
          </form>
        </div>
      </>}
    </>
  )
}

export default Offer