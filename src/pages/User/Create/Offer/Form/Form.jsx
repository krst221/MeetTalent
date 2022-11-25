import React from 'react'
import './Form.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../../../components/Loading/Loading'
import { registerOffer } from '../../../../../redux/auth/auth.actions'
import Button from '../../../../../components/Button/Button'
import BackButton from '../../../../../components/BackButton/BackButton'

const Form = () => {

    const {register, handleSubmit, formState : {errors}, getValues} = useForm()
  
    const {isLoading} = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const enviar = (formdata) => {
      console.log(formdata);
      dispatch(registerOffer(formdata, navigate))
    }

  return (
    <div className='b-create-offer-form-container'>
      <div className='b-create-offer-form-header'>
        <BackButton src="../../../assets/back.svg"></BackButton>
        <h5 className='b-offer-title'>Descripción de la oferta</h5>
      </div>
        {isLoading === true ? <Loading></Loading> :
        <form onSubmit={(handleSubmit(enviar))}>
            <h5>Localización</h5>
            <select className='b-create-offer-form-select'>
              <option value="0">Madrid</option>
              <option value="1">Barcelona</option>
              <option value="2">Sevilla</option>
              <option value="3">Valencia</option>
            </select>
            <Button className="b-form-button b-form-button--sec" text="Continuar"></Button>
        </form>
        }
    </div>
  )
}

export default Form
