import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Loading from '../../../components/Loading/Loading'
import Logo from '../../../components/Logo/Logo'
import { verifyMail } from '../../../redux/auth/auth.actions'
import "./Verify.scss"

export const VerifyMail= () => {
  const {register, handleSubmit, formState : {errors}, getValues} = useForm()
  const {isLoading} = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verificaMail = (formdata) => {
    console.log(formdata.email);
    dispatch(verifyMail(formdata, navigate))
  }

  return (
    <div className='b-verify-container'>
      <div className='b-login-logo'>
        <Logo></Logo>
      </div>
      {isLoading === true ? <Loading></Loading> :
      <>
      <form onSubmit={(handleSubmit(verificaMail))}>
        <label>Email ID</label>
        <input className='b-login-input' type="text" placeholder='Email ID' {...register("email", {
          required : "El email no puede ser vacío",
          pattern : 
          {
            message : "El email no tiene un formato correcto.",
            value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }
        })}/>
        <div className='b-errors-container'>
        {errors.email && <>
          {errors.email.type === "required" && <p className='b-login-error'>{errors.email.message}</p>}
          {errors.email.type === "pattern" && <p className='b-login-error'>{errors.email.message}</p>}
        </>}
        </div>
        <label>Confirmar</label>

        <input className='b-login-input' type="text" placeholder='Confirmar email' {...register("email2", {
          validate: value => value === getValues('email') || 'Los email deben coincidir.',
          required : "El email no puede ser vacío",
          pattern : 
          {
            message : "El email no tiene un formato correcto.",
            value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }
        })}/>
        <div className='b-errors-container'>
        {errors.email2 && <>
          {errors.email2.type === "required" && <p className='b-login-error'>{errors.email2.message}</p>}
          {errors.email2.type === "pattern" && <p className='b-login-error'>{errors.email2.message}</p>}
          {errors.email2.type === "validate" && <p className='b-login-error'>{errors.email2.message}</p>}
        </>}
        </div>
        <Button className="b-form-button" text="Enviar enlace"></Button>
      </form>
      </>
      }   
    </div>
  )
}

export default VerifyMail