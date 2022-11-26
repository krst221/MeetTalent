import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Loading from '../../../components/Loading/Loading'
import Logo from '../../../components/Logo/Logo'
import { changePassword } from '../../../redux/auth/auth.actions'
import "../Login.scss"

export const RecoverPassword = () => {
  const {register, handleSubmit, formState : {errors}, getValues} = useForm()
  const {isLoading} = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cambiaPassword = (formdata) => {
    formdata.email = localStorage.getItem('email');
    console.log(formdata);
    dispatch(changePassword(formdata, navigate))
  }

  return (
    <div className='b-verify-container'>
      <div className='b-login-logo'>
        <Logo></Logo>
      </div>
      {isLoading === true ? <Loading></Loading> :
      <>
      <form onSubmit={(handleSubmit(cambiaPassword))}>
        <label>Nueva contraseña</label>
        <input className='b-login-input' type="password" placeholder='Nueva contraseña' {...register("password", {
          required : "La contraseña no puede ser vacía",
          pattern : 
          {
            message : "La contraseña tiene que tener un formato correcto.",
            pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
          }
        })}/>
        <div className='b-errors-container'>
        {errors.password && <>
          {errors.password.type === "required" && <p className='b-login-error'>{errors.password.message}</p>}
          {errors.password.type === "pattern" && <p className='b-login-error'>{errors.password.message}</p>}
        </>}
        </div>
        <label>Confirmar</label>

        <input className='b-login-input' type="password" placeholder='Confirmar contraseña' {...register("password2", {

          validate: value => value === getValues('password') || 'Las contraseñas deben coincidir.',
          pattern : 
          {
            message : "La contraseña tiene que tener un formato correcto.",
            pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
          }
        })}/>
        <div className='b-errors-container'>
        {errors.password2 && <>
          {errors.password2.type === "required" && <p className='b-login-error'>{errors.password2.message}</p>}
          {errors.password2.type === "pattern" && <p className='b-login-error'>{errors.password2.message}</p>}
          {errors.password2.type === "validate" && <p className='b-login-error'>{errors.password2.message}</p>}
        </>}
        </div>
        <Button className="b-form-button" text="Guardar"></Button>
      </form>
      </>
      }   
    </div>
  )
}

export default RecoverPassword