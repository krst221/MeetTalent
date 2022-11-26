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
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      if(page === 1) dispatch(getCompany(localStorage.getItem('copyoffer')));
    }, [dispatch, page])

    const enviar = (formdata) => {
      if(page === 1){
        localStorage.setItem("copyoffer", JSON.stringify(formdata));
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setPage(2);
      }
      else {
        formdata.company = user._id;
        dispatch(registerOffer(formdata, navigate));
      }
    }

  return (
    <div className='b-create-offer-form-container'>
      <div className='b-offer-header'>
        <BackButton src="../../../assets/back.svg"></BackButton>
        <h4 className='b-offer-title'>{page === 1 ? 'Descripción de la oferta' : 'Confirmación'}</h4>
        <Cross src="../../../assets/cross.svg"></Cross>
      </div>
        {isLoading === true ? <Loading></Loading> :
        <form onSubmit={(handleSubmit(enviar))}>
            <h5>Título de la oferta</h5>
            <select className='b-create-offer-form-select'{...register("title")}>
              {JSON.parse(localStorage.getItem('copyoffer')).title === 'Desarrollador Fullstack' ? <option value="Desarrollador Fullstack" selected>Desarrollador Fullstack</option> : <option value="Desarrollador Fullstack">Desarrollador Fullstack</option>}
              {JSON.parse(localStorage.getItem('copyoffer')).title === 'Astronauta' ? <option value="Astronauta" selected>Astronauta</option> : <option value="Astronauta">Astronauta</option>}
              {JSON.parse(localStorage.getItem('copyoffer')).title === 'Director de Restaurante' ? <option value="Director de Restaurante" selected>Director de Restaurante</option> : <option value="Director de Restaurante">Director de Restaurante</option>}
              {JSON.parse(localStorage.getItem('copyoffer')).title !== 'Diseñador Web' && JSON.parse(localStorage.getItem('copyoffer')).title !== 'Desarrollador Fullstack' && JSON.parse(localStorage.getItem('copyoffer')).title !== 'Astronauta' && JSON.parse(localStorage.getItem('copyoffer')).title !== 'Director de Restaurante' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).title} selected>{JSON.parse(localStorage.getItem('copyoffer')).title}</option> : ''}
            </select>
            <h5>Número de vacantes</h5>
            <select className='b-create-offer-form-select' {...register("vacancies")}>
              {localStorage.getItem('copyoffer').vacancies && JSON.parse(localStorage.getItem('copyoffer')).vacancies === 1 ? <option value="1" selected>1</option> : <option value="1">1</option>}
              {localStorage.getItem('copyoffer').vacancies && JSON.parse(localStorage.getItem('copyoffer')).vacancies === 2 ? <option value="2" selected>2</option> : <option value="2">2</option>}
              {localStorage.getItem('copyoffer').vacancies && JSON.parse(localStorage.getItem('copyoffer')).vacancies === 3 ? <option value="3" selected>3</option> : <option value="3">3</option>}
              {localStorage.getItem('copyoffer').vacancies && JSON.parse(localStorage.getItem('copyoffer')).vacancies === 4 ? <option value="4" selected>4</option> : <option value="4">4</option>}
              {localStorage.getItem('copyoffer').vacancies && JSON.parse(localStorage.getItem('copyoffer')).vacancies >= 5 ? <option value="5" selected>5+</option> : <option value="5">5+</option>}
            </select>
            <h5>Idioma</h5>
            <select className='b-create-offer-form-select' {...register("language")}>
              {localStorage.getItem('copyoffer').language && JSON.parse(localStorage.getItem('copyoffer')).language === 'Español' ? <option value="Español" selected>Español</option> : <option value="Español">Español</option>}
              {localStorage.getItem('copyoffer').language && JSON.parse(localStorage.getItem('copyoffer')).language === 'Inglés' ? <option value="Inglés" selected>Inglés</option> : <option value="Inglés">Inglés</option>}
              {localStorage.getItem('copyoffer').language && JSON.parse(localStorage.getItem('copyoffer')).language === 'Italiano' ? <option value="Italiano" selected>Italiano</option> : <option value="Italiano">Italiano</option>}
              {localStorage.getItem('copyoffer').language && JSON.parse(localStorage.getItem('copyoffer')).language === 'Chino' ? <option value="Chino" selected>Chino</option> : <option value="Chino">Chino</option>}
              {localStorage.getItem('copyoffer').language && JSON.parse(localStorage.getItem('copyoffer')).language === 'Francés' ? <option value="Francés" selected>Francés</option> : <option value="Francés">Francés</option>}
              {localStorage.getItem('copyoffer').language && JSON.parse(localStorage.getItem('copyoffer')).language !== 'Español' && JSON.parse(localStorage.getItem('copyoffer')).language !== 'Chino' && JSON.parse(localStorage.getItem('copyoffer')).language !== 'Francés' && JSON.parse(localStorage.getItem('copyoffer')).language !== 'Inglés' && JSON.parse(localStorage.getItem('copyoffer')).language !== 'Italiano' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).language} selected>{JSON.parse(localStorage.getItem('copyoffer')).language}</option> : ''}

            </select>
            <h5>Sector</h5>
            <select className='b-create-offer-form-select' {...register("sector")}>
              {localStorage.getItem('copyoffer').sector && JSON.parse(localStorage.getItem('copyoffer')).sector === 'Tecnológico' ? <option value="Tecnológico" selected>Tecnológico</option> : <option value="Tecnológico">Tecnológico</option>}
              {localStorage.getItem('copyoffer').sector && JSON.parse(localStorage.getItem('copyoffer')).sector === 'Aeroespacial' ? <option value="Aeroespacial" selected>Aeroespacial</option> : <option value="Aeroespacial">Aeroespacial</option>}
              {localStorage.getItem('copyoffer').sector && JSON.parse(localStorage.getItem('copyoffer')).sector === 'Hostelería' ? <option value="Hostelería" selected>Hostelería</option> : <option value="Hostelería">Hostelería</option>}
              {localStorage.getItem('copyoffer').sector && JSON.parse(localStorage.getItem('copyoffer')).sector === 'Automovilístico' ? <option value="Automovilístico" selected>Automovilístico</option> : <option value="Automovilístico">Automovilístico</option>}
              {localStorage.getItem('copyoffer').sector && JSON.parse(localStorage.getItem('copyoffer')).sector !== 'Tecnológico' && JSON.parse(localStorage.getItem('copyoffer')).sector !== 'Aeroespacial' && JSON.parse(localStorage.getItem('copyoffer')).sector !== 'Hostelería' && JSON.parse(localStorage.getItem('copyoffer')).sector !== 'Automovilístico' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).sector} selected>{JSON.parse(localStorage.getItem('copyoffer')).sector}</option> : ''}

            </select>
            <h5>Descripción de la oferta</h5>
            <textarea className='b-create-offer-form-textarea' {...register("description")} defaultValue={JSON.parse(localStorage.getItem('copyoffer')).description}></textarea>
            <h5>Compañia</h5>
            <select className='b-create-offer-form-select' {...register("company")}>
              {localStorage.getItem('copyoffer') && localStorage.getItem('company') === 'Telefónica' ? <option value="Telefónica" selected>Telefónica</option> : <option value="Telefónica">Telefónica</option>}
              {localStorage.getItem('copyoffer') && localStorage.getItem('company') === 'NASA' ? <option value="NASA" selected>NASA</option> : <option value="NASA">NASA</option>}
              {localStorage.getItem('copyoffer') && localStorage.getItem('company') === 'Grupo Larrumba' ? <option value="Grupo Larrumba" selected>Grupo Larrumba</option> : <option value="Grupo Larrumba">Grupo Larrumba</option>}
              {localStorage.getItem('copyoffer') && localStorage.getItem('company') === 'Grupo Paragüas' ? <option value="Grupo Paragüas" selected>Grupo Paragüas</option> : <option value="Grupo Paragüas">Grupo Paragüas</option>}
              {localStorage.getItem('copyoffer') && localStorage.getItem('company') === 'Midas' ? <option value="Midas" selected>Midas</option> : <option value="Midas">Midas</option>}
              {localStorage.getItem('copyoffer') && localStorage.getItem('company') !== 'Telefónica' && localStorage.getItem('company') !== 'Nasa' && localStorage.getItem('company') !== 'Grupo Larrumba' && localStorage.getItem('company') !== 'Grupo Paragüas' && localStorage.getItem('company') !== 'Midas' ? <option value={localStorage.getItem('company')} selected>{localStorage.getItem('company')}</option> : ''}

            </select>
            <h5>Localización</h5>
            <label>Ciudad</label>
            <select className='b-create-offer-form-select' {...register("location.city")}>
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.city === 'Madrid' ? <option value="Madrid" select>Madrid</option> : <option value="Madrid">Madrid</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.city === 'París' ? <option value="París" select>París</option> : <option value="París">París</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.city === 'New York' ? <option value="New York" select>New York</option> : <option value="New York">New York</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.city === 'Sidney' ? <option value="Sidney" select>Sidney</option> : <option value="Sidney">Sidney</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.city !== 'Madrid' && JSON.parse(localStorage.getItem('copyoffer')).location.city !== 'Paris' && JSON.parse(localStorage.getItem('copyoffer')).location.city !== 'New York' && JSON.parse(localStorage.getItem('copyoffer')).location.city !== 'Sidney' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).location.city} selected>{JSON.parse(localStorage.getItem('copyoffer')).location.city}</option> : ''}

            </select>
            <label>País</label>
            <select className='b-create-offer-form-select' {...register("location.country")}>
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.country === 'España' ? <option value="España" select>España</option> : <option value="España">España</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.country === 'Francia' ? <option value="Francia" select>Francia</option> : <option value="Francia">Francia</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.country === 'Estados Unidos' ? <option value="Estados Unidos" select>Estados Unidos</option> : <option value="Estados Unidos">Estados Unidos</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.country === 'Australia' ? <option value="Australia" select>Australia</option> : <option value="Australia">Australia</option>}
              {localStorage.getItem('copyoffer').location && JSON.parse(localStorage.getItem('copyoffer')).location.country !== 'España' && JSON.parse(localStorage.getItem('copyoffer')).location.country !== 'Francia' && JSON.parse(localStorage.getItem('copyoffer')).location.country !== 'Estados Unidos' && JSON.parse(localStorage.getItem('copyoffer')).location.country !== 'Australia' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).location.country} selected>{JSON.parse(localStorage.getItem('copyoffer')).location.country}</option> : ''}
            </select>
            <h5>Requisitos de candidato</h5>
            <textarea className='b-create-offer-form-textarea' {...register("conditions.requisites")} defaultValue={localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.requisites}></textarea>
            <h5>Condiciones</h5>
            <label>Salario</label>
            <select className='b-create-offer-form-select' {...register("conditions.salary")}>
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary === '18k - 25k' ? <option value="18k - 25k" select>18k - 25k</option> : <option value="18k - 25k" >18k - 25k</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary === '25k - 35k' ? <option value="25k - 35k" select>25k - 35k</option> : <option value="25k - 35k" >25k - 35k</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary === '35k - 45k' ? <option value="35k - 45k" select>35k - 45k</option> : <option value="35k - 45k" >35k - 45k</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary === '45k - 70k' ? <option value="45k - 70k" select>45k - 70k</option> : <option value="45k - 70k" >45k - 70k</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary !== '18k - 25k' && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary !== 'Francia' && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary !== 'Estados Unidos' && JSON.parse(localStorage.getItem('copyoffer')).conditions.salary !== 'Australia' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).conditions.salary} selected>{JSON.parse(localStorage.getItem('copyoffer')).conditions.salary}</option> : ''}

            </select>
            <label>Tipo de Jornada</label>
            <select className='b-create-offer-form-select' {...register("conditions.shift")}>
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.shift === 'Jornada Completa' ? <option value="Jornada Completa" select>Jornada Completa</option> : <option value="Jornada Completa">Jornada Completa</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.shift === 'Media Jornada' ? <option value="Media Jornada" select>Media Jornada</option> : <option value="Media Jornada">Media Jornada</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.shift !== 'Jornada Completa' && JSON.parse(localStorage.getItem('copyoffer')).conditions.shift !== 'Jornada Completa' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).conditions.shift} selected>{JSON.parse(localStorage.getItem('copyoffer')).conditions.shift}</option> : ''}
            </select>
            <label>Tipo de contrato</label>
            <select className='b-create-offer-form-select' {...register("conditions.contract")}>
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.contract === 'Contrato Indefinido' ? <option value="Contrato Indefinido" select>Jornada Completa</option> : <option value="Contrato Indefinido">Contrato Indefinido</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.contract === 'Contrato Temporal' ? <option value="Contrato Temporal" select>Jornada Completa</option> : <option value="Contrato Temporal">Contrato Temporal</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.contract === 'Contrato de Prácticas' ? <option value="Contrato de Prácticas" select>Jornada Completa</option> : <option value="Contrato de Prácticas">Contrato de Prácticas </option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.contract !== 'Contrato Indefinido' && JSON.parse(localStorage.getItem('copyoffer')).conditions.contract !== 'Contrato Temporal' && JSON.parse(localStorage.getItem('copyoffer')).conditions.contract !== 'Contrato de Prácticas' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).conditions.contract} selected>{JSON.parse(localStorage.getItem('copyoffer')).conditions.contract}</option> : ''}
            </select>
            <label>Disponibilidad</label>
            <select className='b-create-offer-form-select' {...register("conditions.availability")} defaultValue={localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.availability}>
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.availability === 'Inmediata' ? <option value="Inmediata" select>Inmediata</option> : <option value="Inmediata">Inmediata</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.availability === '15 Días' ? <option value="15 Días" select>15 Días</option> : <option value="15 Días">15 Días</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.availability === '1 Mes' ? <option value="1 Mes" select>1 Mes</option> : <option value="1 Mes">1 Mes</option>}
              {localStorage.getItem('copyoffer').conditions && JSON.parse(localStorage.getItem('copyoffer')).conditions.availability !== 'Inmediata' && JSON.parse(localStorage.getItem('copyoffer')).conditions.availability !== '15 Días' && JSON.parse(localStorage.getItem('copyoffer')).conditions.availability !== '1 Mes' ? <option value={JSON.parse(localStorage.getItem('copyoffer')).conditions.availability} selected>{JSON.parse(localStorage.getItem('copyoffer')).conditions.availability}</option> : ''}
            </select>
            <Button className="b-form-button b-form-button--sec" text={page === 1 ? 'Continuar' : 'Confirmar'}></Button>
        </form>
        }
    </div>
  )
}

export default Form
