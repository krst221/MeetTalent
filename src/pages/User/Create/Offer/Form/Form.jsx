import React, { useContext, useEffect, useState } from 'react'
import './Form.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../../../components/Loading/Loading'
import { registerOffer } from '../../../../../redux/auth/auth.actions'
import Button from '../../../../../components/Button/Button'
import BackButton from '../../../../../components/BackButton/BackButton'
import { UserContext } from '../../../../../shared/contexts/UserContext'
import Cross from '../../../../../components/Cross/Cross'
import { getCompany } from '../../../../../redux/auth/auth.actions'


const Form = () => {

    const {register, handleSubmit} = useForm()
    const {user} = useContext(UserContext);
    const {isLoading} = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCompany(JSON.parse(localStorage.getItem('copyoffer')).company));
    }, [dispatch])

    const enviar = (formdata) => {
      console.log(formdata);
      formdata.company = user._id;
      dispatch(registerOffer(formdata, navigate))
      localStorage.setItem("copyoffer", JSON.stringify(formdata))
    }

  return (
    <div className='b-create-offer-form-container'>
      <div className='b-offer-header'>
        <BackButton src="../../../assets/back.svg"></BackButton>
        <h5 className='b-offer-title'>Descripción de la oferta</h5>
        <Cross src="../../../assets/cross.svg"></Cross>
      </div>
        {isLoading === true ? <Loading></Loading> :
        <form onSubmit={(handleSubmit(enviar))}>
            <h5>Título de la oferta</h5>
            <select className='b-create-offer-form-select'{...register("title")} defaultValue={JSON.parse(localStorage.getItem('copyoffer')).title}>
              {copyOffer.title === 'Diseñador Web' ? <option value="Diseñador Web" selected>Diseñador Web</option> : <option value="Diseñador Web">Diseñador Web</option>}
              {copyOffer.title === 'Desarrollador Fullstack' ? <option value="Desarrollador Fullstack" selected>Desarrollador Fullstack</option> : <option value="Desarrollador Fullstack">Desarrollador Fullstack</option>}
              {JSON.parse(localStorage.getItem('copyoffer')).title === 'Astronauta' ? <option value="Astronauta" selected>Astronauta</option> : <option value="Astronauta">Astronauta</option>}
              {copyOffer.title === 'Director de Restaurante' ? <option value="Director de Restaurante" selected>Director de Restaurante</option> : <option value="Director de Restaurante">Director de Restaurante</option>}
              {copyOffer.title !== 'Diseñador Web' && copyOffer.title !== 'Desarrollador Fullstack' && copyOffer.title !== 'Astronauta' && copyOffer.title !== 'Director de Restaurante' ? <option value={copyOffer.title} selected>{copyOffer.title}</option> : ''}
            </select>
            <h5>Número de vacantes</h5>
            <select className='b-create-offer-form-select' {...register("vacancies")}>
              {copyOffer.vacancies === 0 ? <option value="0" selected>0</option> : <option value="0">0</option>}
              {copyOffer.vacancies === 1 ? <option value="1" selected>1</option> : <option value="1">1</option>}
              {copyOffer.vacancies === 2 ? <option value="2" selected>2</option> : <option value="2">2</option>}
              {copyOffer.vacancies === 3 ? <option value="3" selected>3</option> : <option value="3">3</option>}
              {copyOffer.vacancies >= 4 ? <option value="4" selected>4+</option> : <option value="4">4+</option>}
            </select>
            <h5>Idioma</h5>
            <select className='b-create-offer-form-select' {...register("language")}>
              {copyOffer.language === 'Español' ? <option value="Español" selected>Español</option> : <option value="Español">Español</option>}
              {copyOffer.language === 'Inglés' ? <option value="Inglés" selected>Inglés</option> : <option value="Inglés">Inglés</option>}
              {copyOffer.language === 'Italiano' ? <option value="Italiano" selected>Italiano</option> : <option value="Italiano">Italiano</option>}
              {copyOffer.language === 'Chino' ? <option value="Chino" selected>Chino</option> : <option value="Chino">Chino</option>}
              {copyOffer.language === 'Francés' ? <option value="Francés" selected>Francés</option> : <option value="Francés">Francés</option>}
            </select>
            <h5>Sector</h5>
            <select className='b-create-offer-form-select' {...register("sector")}>
              {copyOffer.sector === 'Tecnológico' ? <option value="Tecnológico" selected>Tecnológico</option> : <option value="Tecnológico">Tecnológico</option>}
              {copyOffer.sector === 'Aeroespacial' ? <option value="Aeroespacial" selected>Aeroespacial</option> : <option value="Aeroespacial">Aeroespacial</option>}
              {copyOffer.sector === 'Hostelería' ? <option value="Hostelería" selected>Hostelería</option> : <option value="Hostelería">Hostelería</option>}
              {copyOffer.sector === 'Automovilístico' ? <option value="Automovilístico" selected>Automovilístico</option> : <option value="Automovilístico">Automovilístico</option>}
            </select>
            <h5>Descripción de la oferta</h5>
            <textarea className='b-create-offer-form-textarea' {...register("description")} defaultValue={copyOffer.description}></textarea>
            <h5>Compañia</h5>
            <select className='b-create-offer-form-select' {...register("company")}>
              <option value="Telefónica">Telefónica</option>
              <option value="NASA">NASA</option>
              <option value="Grupo Larrumba">Grupo Larrumba</option>
              <option value="Grupo Paragüas">Grupo Paragüas</option>
              <option value="Midas">Midas</option>
            </select>
            <h5>Localización</h5>
            <select className='b-create-offer-form-select' {...register("location.city")}>
              <option value="Ciudad">Ciudad</option>
              <option value="Madrid">Madrid</option>
              <option value="París">París</option>
              <option value="New York">New York</option>
              <option value="Sidney">Sidney</option>
            </select>
            <select className='b-create-offer-form-select' {...register("location.country")}>
              <option value="País">País</option>
              <option value="España">España</option>
              <option value="Francia">Francia</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Australia">Australia</option>
            </select>
            <h5>Requisitos de candidato</h5>
            <textarea className='b-create-offer-form-textarea' {...register("conditions.requisites")}></textarea>
            <h5>Condiciones</h5>
            <select className='b-create-offer-form-select' {...register("conditions.salary")}>
              <option value="0">Salario</option>
              <option value="18k - 25k">18k - 25k</option>
              <option value="25k - 35k">25k - 35k</option>
              <option value="35k - 45k">35k - 45k</option>
              <option value="45k - 70k">45k - 70k</option>
            </select>
            <select className='b-create-offer-form-select' {...register("conditions.shift")}>
              <option value="0Tipo de Jornada">Tipo de Jornada</option>
              <option value="Jornada Completa">Jornada Completa</option>
              <option value="Media Jornada">Media Jornada</option>
            </select>
            <select className='b-create-offer-form-select' {...register("conditions.contract")}>
              <option value="Tipo de Contrato">Tipo de Contrato</option>
              <option value="Contrato Indefinido">Contrato Indefinido</option>
              <option value="Contrato Temporal">Contrato Temporal</option>
              <option value="Contrato de Prácticas">Contrato de Prácticas</option>
            </select>
            <select className='b-create-offer-form-select' {...register("conditions.availability")}>
              <option value="Disponibilidad">Disponibilidad</option>
              <option value="Inmediata">Inmediata</option>
              <option value="215 Días">15 Días</option>
              <option value="1 Mes">1 Mes</option>
            </select>
            <Button className="b-form-button b-form-button--sec" text="Continuar"></Button>
        </form>
        }
    </div>
  )
}

export default Form
