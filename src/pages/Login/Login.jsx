import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/auth/auth.actions'
import './Login.scss'

const Login = () => {
  
  const {register, handleSubmit, formState : {errors}} = useForm()
  const navigate = useNavigate()
  const enviar = (formdata) => {
    console.log(formdata);
    loginUser(formdata, navigate)
  }

  return (
    <form onSubmit={(handleSubmit(enviar))}>
      <input type="text" {...register("email", {
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
      <input type="password" {...register("password", {
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
      <button>Enviar</button>
    </form>
  )
}

export default Login