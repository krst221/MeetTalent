import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Loading from '../../components/Loading/Loading'
import Logo from '../../components/Logo/Logo'
import { loginUser } from '../../redux/auth/auth.actions'
import { isCompanyContext } from '../../shared/contexts/isCompanyContext'
import './Login.scss'

const Login = () => {
  
  const {register, handleSubmit, formState : {errors}} = useForm()
  const {setCompany} = useContext(isCompanyContext);
  const {isLoading} = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('user', null);
    localStorage.setItem('token', null);
    localStorage.setItem('verify', null);
    localStorage.setItem('email', null);
    localStorage.setItem('company', null);
    localStorage.setItem('offers', []);
    localStorage.setItem('users', null);
  }, [])
  

  const enviar = (formdata) => {
    console.log(formdata);
    dispatch(loginUser(formdata, navigate, setCompany))

  }
  return (
    <>
      {isLoading ? <Loading></Loading> :
      <>
        <div className='b-login-container'>
          <div className='b-login-logo'>
            <Logo></Logo>
          </div>      
          <form onSubmit={(handleSubmit(enviar))}>
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
            <label>Contraseña</label>
            <input className='b-login-input' type="password" placeholder='Contraseña' {...register("password", {
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
        </div>
      </>}
    </>
  )
}

export default Login