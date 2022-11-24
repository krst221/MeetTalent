import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Loading from '../../components/Loading/Loading'
import Logo from '../../components/Logo/Logo'
import { loginUser } from '../../redux/auth/auth.actions'

import './Login.scss'

const Login = () => {
  
  const {register, handleSubmit, formState : {errors}} = useForm()
  const {isLoading} = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enviar = (formdata) => {
    console.log(formdata);
    dispatch(loginUser(formdata, navigate))
  }

  return (
    <div className='b-login-container'>
      <div className='b-login-logo'>
        <Logo></Logo>
      </div>
      {isLoading === true ? <Loading></Loading> :
      <>
      <form onSubmit={(handleSubmit(enviar))}>
        <label>Email ID</label>
        <input type="text" placeholder='Email ID' {...register("email", {
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
        <label>Contraseña</label>
        <input type="password" placeholder='Contraseña' {...register("password", {
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
        <Button className="b-form-button" text="Comenzar"></Button>
      </form>
      <div className='b-login-recover'>
        <p>¿No puedes iniciar sesión? <NavLink style={{ textDecoration: 'none' }} to={'/login/verify'}><span className='b-login-span'>Restablecer contraseña</span></NavLink></p>
      </div>
      <p>o</p>
      <div className='b-login-create'>
        <NavLink style={{ textDecoration: 'none' }} to={'/register/user'}><p className='b-login-count'>Crear cuenta usuario</p></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to={'/register/company'}><p className='b-login-count'>Crear cuenta empresa</p></NavLink>
      </div>
      </>
      }   
    </div>
  )
}

export default Login