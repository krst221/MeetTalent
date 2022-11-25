import React, { useContext } from 'react'
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


const Form = () => {

    const {register, handleSubmit} = useForm()
    const {user} = useContext(UserContext);
    const {isLoading} = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            <select className='b-create-offer-form-select' {...register("title")}>
              <option value="Diseñador Web">Diseñador Web</option>
              <option value="Desarrollador Full Stack">Desarrollador Full Stack</option>
              <option value="Astronauta">Astronauta</option>
              <option value="Director de Restaurante">Director de Restaurante</option>
              <option value="Mecánico">Mecánico</option>
            </select>
            <h5>Número de vacantes</h5>
            <select className='b-create-offer-form-select' {...register("vacancies")}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <h5>Idioma</h5>
            <select className='b-create-offer-form-select' {...register("language")}>
              <option value="Espanol">Espanol</option>
              <option value="Inglés">Inglés</option>
              <option value="Italiano">Italiano</option>
              <option value="Chino">Chino</option>
              <option value="Somalí">Somalí</option>
            </select>
            <h5>Sector</h5>
            <select className='b-create-offer-form-select' {...register("sector")}>
              <option value="Tecnológico">Tecnológico</option>
              <option value="Aeroespacial">Aeroespacial</option>
              <option value="Hostelero">Hostelero</option>
              <option value="Automovilístico">Automovilístico</option>
            </select>
            <h5>Descripción de la oferta</h5>
            <textarea className='b-create-offer-form-textarea' {...register("description")}></textarea>
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
