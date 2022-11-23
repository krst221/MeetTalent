import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
    <div className='b-container'>
    
      {isLoading === true ? <Loading></Loading> :
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
        {errors.email && <>
          {errors.email.type === "required" && <p>{errors.email.message}</p>}
          {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        </>}
        <label>Contraseña</label>
        <input type="password" placeholder='Contraseña' {...register("password", {
          required : "La contraseña no puede ser vacía",
          pattern : 
          {
            message : "La contraseña tiene que tener un formato correcto.",
            pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
          }
        })}/>
        {errors.password && <>
          {errors.password.type === "required" && <p>{errors.password.message}</p>}
          {errors.password.type === "pattern" && <p>{errors.password.message}</p>}
        </>}
        <Button text="Comenzar"></Button>
      </form>}
    </div>
  )
}

export default Login