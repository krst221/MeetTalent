import React from 'react'
import './Form.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../../../components/Loading/Loading'
import { registerOffer } from '../../../../../redux/auth/auth.actions'
import Button from '../../../../../components/Button/Button'

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
    <div className='b-create-offer-container'>
      <h4>Descripción de la oferta</h4>
        {isLoading === true ? <Loading></Loading> :
        <form onSubmit={(handleSubmit(enviar))}>
            <label className='b-createoffer-label'>Título de la oferta</label>
            <input className='b-createoffer-input' type="text" placeholder='Diseñador Web' {...register("title", {
            required : "El nombre no puede estar vacío"
            })}/>
            <div className='b-errors-container'>
            {errors.name && <>
            {errors.name.type === "required" && <p className='b-login-error'>{errors.name.message}</p>}
            </>}
            </div>
            <label className='b-createoffer-label'>CIF</label>
            <input className='b-createoffer-input' type="text" placeholder='CIF de la empresa' {...register("ID", {
            required : "El puesto no puede estar vacío"
            })}/>
            <div className='b-errors-container'>
            {errors.ID && <>
            {errors.ID.type === "required" && <p className='b-login-error'>{errors.ID.message}</p>}
            </>}
            </div>
            <label className='b-createoffer-label'>Email</label>
            <input className='b-createoffer-input' type="text" placeholder='Email ' {...register("email", {
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
            <label className='b-createoffer-label'>Contraseña</label>
            <input className='b-createoffer-input' type="password" placeholder='Contraseña' {...register("password", {
            required : "La contraseña no puede ser vacía",
            pattern : 
            {
                message : "La contraseña tiene que tener un formato correcto.",
                pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
            }
            })}/>
            <div className='b-errors-container'>
            {errors.password && <>
            {errors.password.type === "required" && <p className='b-login-error'>{errors.password.message}</p>}
            {errors.password.type === "pattern" && <p className='b-login-error'>{errors.password.message}</p>}
            </>}
            </div>
            <label className='b-createoffer-label'>Confirmar contraseña</label>
            <input className='b-createoffer-input' type="password" placeholder='Confirmar contraseña' {...register("password2", {
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
            {errors.password2.type === "required" && <p className='b-login-error'>{errors.password2.message}</p>}
            {errors.password2.type === "pattern" && <p className='b-login-error'>{errors.password2.message}</p>}
            {errors.password2.type === "validate" && <p className='b-login-error'>{errors.password2.message}</p>}
            </>}
            </div>
            <label className='b-createoffer-label'><input type="checkbox"></input>Al crear una cuenta, acepta automáticamente todos los <span className='b-reguser-span'>términos y condiciones</span> relacionados con <span className='b-reguser-span'>MeetTalent</span></label>
            <Button className="b-form-button b-form-button--sec" text="Continuar"></Button>
        </form>
        }
    </div>
  )
}

export default Form
