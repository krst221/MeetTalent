import React, {useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import ImageUser from '../../../../components/ImageUser/ImageUser'
import KeywordTag from '../../../../components/KeywordTag/KeywordTag'
import Loading from '../../../../components/Loading/Loading'
import { modifyUserValue } from '../../../../redux/auth/auth.actions'
import { modifyUserArray } from '../../../../redux/auth/auth.actions'
import { UserContext } from '../../../../shared/contexts/UserContext'
import './Index.scss'

const Index = () => {

  const {user, setUser} = useContext(UserContext);
  const [edit, setEdit] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (formData) => {
    const key = Object.keys(formData)[0];
    const newUser = {...user, [key]: formData[key]};
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    formData._id = user._id;
    dispatch(modifyUserValue(formData));
    setEdit(0);
    reset();
  }

  const submitArray = (formData) => {
    const key = Object.keys(formData)[0];
    const newUser = {...user, [key]: [...user[key], formData[key]]};
    console.log(newUser);
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    formData._id = user._id;
    dispatch(modifyUserArray(formData));
    setEdit(0);
    reset();
  }

  return (
    <>
      {user.length < 1 ? <Loading /> : 
      <div className='b-profile--detail'>
        <div>        
          <ImageUser src={user.picture} />
          {edit !== 1 ? <div onClick={() => setEdit(1)}>Editar</div> : ''}
          {edit === 1 ? 
            <div>
              <form onSubmit={handleSubmit(submit)} key="picture">
                <input type='text' {...register('picture', {required: true})} defaultValue={user.picture} placeholder='Edita URL de la imagen'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <div>
          <h2>{user.name}</h2>
          {edit !== 2 ? <div onClick={() => setEdit(2)}>Editar</div> : ''}
          {edit === 2 ? 
            <div>
              <form onSubmit={handleSubmit(submit)} key="name">
                <input type='text' {...register('name', {required: true})} defaultValue={user.name} placeholder='Edita nombre'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <div>
          <h2>{user.job}</h2>
          {edit !== 3 ? <div onClick={() => setEdit(3)}>Editar</div> : ''}
          {edit === 3 ? 
            <div>
              <form onSubmit={handleSubmit(submit)} key="job">
                <input type='text' {...register('job', {required: true})} defaultValue={user.job} placeholder='Edita ocupación'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <span>Twitter</span>        <span>Instagram</span>        <span>Facebook</span>
        <h3>Datos personales</h3>
        <div>
          {user.age > 0 ? <p>{user.age} años</p> : <p>Edad indefinida</p>}
          {edit !== 4 ? <div onClick={() => setEdit(4)}>Editar</div> : ''}
          {edit === 4 ? 
            <div>
              <form onSubmit={handleSubmit(submit)} key="age">
                <input type='number' {...register('age', {required: true})} defaultValue={user.age} placeholder='Edita edad'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <div>
          {user.location ? <p>{user.location.city}</p> : ''}
          {edit !== 5 ? <div onClick={() => setEdit(5)}>Editar</div> : ''}
          {edit === 5 ? 
            <div>
            <form onSubmit={handleSubmit(submit)} key="location">
                <input type='text' {...register('location.city')} defaultValue={user.location.city} placeholder='Edita ciudad'/>
                <input type='text' {...register('location.detail')} defaultValue={user.location.detail} placeholder='Edita detalle de ciudad'/>
                <input type='number' {...register('location.zip')} defaultValue={user.location.zip} placeholder='Edita código postal'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <div>
          <p>{user.email}</p>
          {edit !== 6 ? <div onClick={() => setEdit(6)}>Editar</div> : ''}
          {edit === 6 ? 
            <div>
              <form onSubmit={handleSubmit(submit)} key="email">
                <input type='email' {...register('email', {required: true})} defaultValue={user.email} placeholder='Edita correo'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <div>
          {user.phone ? <p>{user.phone}</p> : <p>Teléfono indefinido</p>}
          {edit !== 7 ? <div onClick={() => setEdit(7)}>Editar</div> : ''}
          {edit === 7 ? 
            <div>
              <form onSubmit={handleSubmit(submit)} key="phone">
                <input type='number' {...register('phone', {required: true})} defaultValue={user.phone} placeholder='Edita número de teléfono'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <div>
          <h3>Palabras clave del perfil</h3>
          {edit !== 8 ? <div onClick={() => setEdit(8)}>Editar</div> : ''}
          {edit === 8 ? 
            <div>
              <form onSubmit={handleSubmit(submitArray)} key="tags">
                <input type='text' {...register('tags', {required: true})} placeholder='Añade palabra clave'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
          <div>
            {user.tags && user.tags.map((tag, index) => <KeywordTag tag={tag} index={index} />)}
          </div>
        </div>
        <div>
          <h3>Formación académica</h3>
          {edit !== 9 ? <div onClick={() => setEdit(9)}>Editar</div> : ''}
          {edit === 9 ? 
            <div>
              <form onSubmit={handleSubmit(submitArray)} key="studies">
                <input type='text' {...register('studies.type')} placeholder='Añade tipo de estudios'/>
                <input type='text' {...register('studies.degree')}  placeholder='Añade detalle de estudios'/>
                <input type='text' {...register('studies.location')} placeholder='Añade centro de estudios'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
          {user.studies && user.studies.map((study) => <div><h4>{study.type}</h4><h5>{study.degree}</h5><p>{study.location}</p></div>)}
        </div>
      </div>}
    </>
  )
}

export default Index