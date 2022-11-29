import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../../components/BackButton/BackButton'
import Button from '../../../components/Button/Button'
import Loading from '../../../components/Loading/Loading'
import { registerUser } from '../../../redux/auth/auth.actions'
import './User.scss'
const User = () => {
  

  const {register, handleSubmit, formState : {errors}, getValues } = useForm()

  const {isLoading} = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enviar = (formdata) => {
    console.log(formdata);
    dispatch(registerUser(formdata, navigate))
  }

  return (
    <>
      {isLoading ? <Loading></Loading> :
      <>
        <div className='b-reguser-container'>
          <div className='b-user-header'>
            <BackButton src="../../../assets/back.svg"></BackButton>
            <h3 className='b-user-title'>Crear cuenta</h3>
            <span className='b-p'></span>
          </div>
          <form onSubmit={(handleSubmit(enviar))}>
              <label className='b-reguser-label'>Nombre del usuario</label>
              <input className='b-reguser-input' type="text" placeholder='Nombre de usuario' {...register("name", {
              required : "El nombre no puede estar vacío"
              })}/>
              <div className='b-errors-container'>
              {errors.name && <>
              {errors.name.type === "required" && <p className='b-login-error--sec'>{errors.name.message}</p>}
              </>}
              </div>
              <label className='b-reguser-label'>Puesto de trabajo</label>
              <input className='b-reguser-input' type="text" placeholder='Puesto de trabajo' {...register("job", {
              required : "El puesto no puede estar vacío"
              })}/>
              <div className='b-errors-container'>
              {errors.job && <>
              {errors.job.type === "required" && <p className='b-login-error--sec'>{errors.job.message}</p>}
              </>}
              </div>
              <label className='b-reguser-label'>Localización</label>
              <input className='b-reguser-input' type="text" placeholder='Localización' {...register("location.city", {
              required : "La localización no puede estar vacía"
              })}/>
              <div className='b-errors-container'>
              {errors.location && <>
              {errors.location.type === "required" && <p className='b-login-error--sec'>{errors.location.message}</p>}
              </>}
              </div>
              <label className='b-reguser-label'>Email</label>
              <input className='b-reguser-input' type="text" placeholder='Email ' {...register("email", {
              required : "El email no puede ser vacío",
              pattern : 
              {
                  message : "El email no tiene un formato correcto.",
                  value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              }
              })}/>
              <div className='b-errors-container'>
              {errors.email && <>
              {errors.email.type === "required" && <p className='b-login-error--sec'>{errors.email.message}</p>}
              {errors.email.type === "pattern" && <p className='b-login-error--sec'>{errors.email.message}</p>}
              </>}
              </div>
              <label className='b-reguser-label'>Contraseña</label>
              <input className='b-reguser-input' type="password" placeholder='Contraseña' {...register("password", {
              required : "La contraseña no puede ser vacía",
              pattern : 
              {
                  message : "La contraseña tiene que tener un formato correcto.",
                  pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
              }
              })}/>
              <div className='b-errors-container'>
              {errors.password && <>
              {errors.password.type === "required" && <p className='b-login-error--sec'>{errors.password.message}</p>}
              {errors.password.type === "pattern" && <p className='b-login-error--sec'>{errors.password.message}</p>}
              </>}
              </div>
              <label className='b-reguser-label'>Confirmar contraseña</label>
              <input className='b-reguser-input' type="password" placeholder='Confirmar contraseña' {...register("password2", {
              validate : value => value === getValues("password") || "Las contraseñas deben coincidir",
              required : "La contraseña no puede ser vacía",
              pattern : 
              {
                  message : "La contraseña tiene que tener un formato correcto.",
                  pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
              }
              })}/>
              <div className='b-errors-container'>
              {errors.password2 && <>
              {errors.password2.type === "required" && <p className='b-login-error--sec'>{errors.password2.message}</p>}
              {errors.password2.type === "pattern" && <p className='b-login-error--sec'>{errors.password2.message}</p>}
              {errors.password2.type === "validate" && <p className='b-login-error--sec'>{errors.password2.message}</p>}
              </>}
              </div>
              <label className='b-checktext'><input type="checkbox" {...register("check", {required: true})}></input>Al crear una cuenta, acepta automáticamente todos los <span className='b-reguser-span'>términos y condiciones</span> relacionados con <span className='b-reguser-span'>MeetTalent</span></label>
              <Button className="b-form-button b-form-button--sec" text="Continuar"></Button>
          </form>
        </div>
      </>}
    </>
  ) 
}

export default User