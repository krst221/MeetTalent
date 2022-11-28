import React, {useContext, useEffect, useState } from 'react'
import tw from '../../../../img/twitter.svg'
import fb from '../../../../img/facebook.svg'
import ig from '../../../../img/instagram.svg'
import pen from '../../../../img/pencil.svg'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import ImageUser from '../../../../components/ImageUser/ImageUser'
import KeywordTag from '../../../../components/KeywordTag/KeywordTag'
import Loading from '../../../../components/Loading/Loading'
import { modifyUserValue } from '../../../../redux/auth/auth.actions'
import { modifyUserArray } from '../../../../redux/auth/auth.actions'
import { deleteArrayElement } from '../../../../redux/auth/auth.actions'
import { UserContext } from '../../../../shared/contexts/UserContext'
import './Index.scss'
import BackButton from '../../../../components/BackButton/BackButton'
import Heart from '../../../../components/Heart/Heart'
import axios from "axios"

const Index = () => {

  const {user, setUser} = useContext(UserContext);
  const [edit, setEdit] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  useEffect( () => { 
    async function manolo() {
      const result = await axios.post("http://api.openweathermap.org/geo/1.0/direct?q=Madrid&limit=4&appid=10be50e007815d012a0be63fec397b6a")
      console.log(result);
    }
    manolo()
  
  }, [])
  

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
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    formData._id = user._id;
    dispatch(modifyUserArray(formData));
    setEdit(0);
    reset();
  }

  const deleteTag = (tag) => {
    const newUser = {...user, tags: [...user.tags.filter((a) => a !== tag)]}
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    dispatch(deleteArrayElement(newUser));
    setEdit(0);
    reset();
  }

  const deleteStudy = (study) => {
    const newUser = {...user, studies: [...user.studies.filter((a) => a.degree !== study.degree )]}
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    dispatch(deleteArrayElement(newUser));
    setEdit(0);
    reset();
  }

  return (
    <>
      {user.length < 1 ? <Loading /> :
      <>
        <div className='b-profile'>
          <div className='b-profile-header'>
            <div className='white'>
              <BackButton src="../../../assets/back.svg"></BackButton>
            </div>
            <h3 className='b-profile-title'>Mi perfil</h3>
            <div className='white'>
              <Heart src="../../../assets/heart.svg"></Heart>
            </div>
          </div> 
          <div className='b-profile--detail'>
          <img src={pen} className='b-edit--pen' alt='' onClick={() => setEditMode(!editMode)}/>    
            <div className='b-profile--detail--container'>    
              <div className='b-profile--image'><ImageUser src={user.picture} /></div>
              {editMode && edit !== 1 ? <div className='b-edit' onClick={() => setEdit(1)}>Editar</div> : ''}
              {edit === 1 ? 
                <div className='b-profile--detail--form right'>
                  <form onSubmit={handleSubmit(submit)} key="picture">
                    <input type='text' {...register('picture', {required: true})} defaultValue={user.picture} placeholder='Edita URL de la imagen'/>
                    <button type='submit'>Aceptar cambios</button>
                  </form>
                </div> : ''}
            </div>
            <div className='b-profile--detail--container'>
              <h2>{user.name}</h2>
              {editMode && edit !== 2 ? <div className='b-edit' onClick={() => setEdit(2)}>Editar</div> : ''}
              {edit === 2 ? 
                <div className='b-profile--detail--form'>
                  <form onSubmit={handleSubmit(submit)} key="name">
                    <input type='text' {...register('name', {required: true})} defaultValue={user.name} placeholder='Edita nombre'/>
                    <button type='submit'>Aceptar cambios</button>
                  </form>
                </div> : ''}
            </div>
            <div className='b-profile--detail--container'>
              <h3>{user.job}</h3>
              {editMode && edit !== 3 ? <div className='b-edit' onClick={() => setEdit(3)}>Editar</div> : ''}
              {edit === 3 ? 
                <div className='b-profile--detail--form'>
                  <form onSubmit={handleSubmit(submit)} key="job">
                    <input type='text' {...register('job', {required: true})} defaultValue={user.job} placeholder='Edita ocupación'/>
                    <button type='submit'>Aceptar cambios</button>
                  </form>
                </div> : ''}
            </div>
            <div className='b-container--sn'>
              <img src={tw} alt='' className='b-icon--sn' />
              <img src={ig} alt='' className='b-icon--sn' />
              <img src={fb} alt='' className='b-icon--sn' />
            </div>
            <div className='b-profile--detail--list'>
              <h4>Datos personales</h4>
              <div className='b-profile--detail--container'>
                {user.age > 0 ? <p>📅 {user.age} años</p> : <p>📅 Edad indefinida</p>}
                {editMode && edit !== 4 ? <div className='b-edit' onClick={() => setEdit(4)}>Editar</div> : ''}
                {edit === 4 ? 
                  <div className='b-profile--detail--container'>
                    <form onSubmit={handleSubmit(submit)} key="age" className='b-profile--detail--form'>
                      <input type='number' {...register('age', {required: true})} defaultValue={user.age} placeholder='Edita edad'/>
                      <button type='submit'>Aceptar cambios</button>
                    </form>
                  </div> : ''}
              </div>
              <div className='b-profile--detail--container'>
                {user.location ? <p>🌆 {user.location.city}{user.location.detail ? <>, {user.location.detail}</> : '' }{user.location.zip ? <>, {user.location.zip}</> : '' }</p> : ''}
                {editMode && edit !== 5 ? <div className='b-edit' onClick={() => setEdit(5)}>Editar</div> : ''}
                {edit === 5 ? 
                  <div className='b-profile--detail--form'>
                  <form onSubmit={handleSubmit(submit)} key="location">
                      <input type='text' {...register('location.city')} defaultValue={user.location.city} placeholder='Edita ciudad'/>
                      <input type='text' {...register('location.detail')} defaultValue={user.location.detail} placeholder='Edita detalle de ciudad'/>
                      <input type='number' {...register('location.zip')} defaultValue={user.location.zip} placeholder='Edita código postal'/>
                      <button type='submit'>Aceptar cambios</button>
                    </form>
                  </div> : ''}
              </div> 
              <div className='b-profile--detail--container'>
                <p>✉ {user.email}</p>
                {editMode && edit !== 6 ? <div className='b-edit' onClick={() => setEdit(6)}>Editar</div> : ''}
                {edit === 6 ? 
                  <div className='b-profile--detail--form'>
                    <form onSubmit={handleSubmit(submit)} key="email">
                      <input type='email' {...register('email', {required: true})} defaultValue={user.email} placeholder='Edita correo'/>
                      <button type='submit'>Aceptar cambios</button>
                    </form>
                  </div> : ''}
              </div>
              <div className='b-profile--detail--container'>
                {user.phone ? <p>📞 {user.phone}</p> : <p>📞 Teléfono indefinido</p>}
                {editMode && edit !== 7 ? <div className='b-edit' onClick={() => setEdit(7)}>Editar</div> : ''}
                {edit === 7 ? 
                  <div className='b-profile--detail--form'>
                    <form onSubmit={handleSubmit(submit)} key="phone">
                      <input type='number' {...register('phone', {required: true})} defaultValue={user.phone} placeholder='Edita número de teléfono'/>
                      <button type='submit'>Aceptar cambios</button>
                    </form>
                  </div> : ''}
              </div>
            </div>
            <div className='b-profile--vert'>
              <h4>Palabras clave del perfil</h4>
              {editMode && edit !== 8 ? <div className='b-edit' onClick={() => setEdit(8)}>Editar</div> : ''}
              {edit === 8 ? 
                <div className='b-profile--detail--form'>
                  <form onSubmit={handleSubmit(submitArray)} key="tags">
                    <input type='text' {...register('tags', {required: true})} placeholder='Añade palabra clave'/>
                    <button type='submit'>Aceptar cambios</button>
                  </form>
                </div> : ''}
              <div className='b-profile--detail--tags'>
                {user.tags && user.tags.map((tag, index) => <div key={index} onClick={() => deleteTag(tag)}><KeywordTag tag={tag} index={index} /></div>)}
              </div>
            </div>
            <div className='b-profile--vert'>
              <h4>Formación académica</h4>
              {editMode && edit !== 9 ? <div className='b-edit' onClick={() => setEdit(9)}>Editar</div> : ''}
              {edit === 9 ? 
                <div className='b-profile--detail--form'>
                  <form onSubmit={handleSubmit(submitArray)} key="studies">
                    <input type='text' {...register('studies.type')} placeholder='Añade tipo de estudios'/>
                    <input type='text' {...register('studies.degree')}  placeholder='Añade detalle de estudios'/>
                    <input type='text' {...register('studies.location')} placeholder='Añade centro de estudios'/>
                    <button type='submit'>Aceptar cambios</button>
                  </form>
                </div> : ''}
                <div className='b-profile--detail--tags'>
                  {user.studies && user.studies.map((study, index) => <div className='b-profile--study' key={index} onClick={() => deleteStudy(study)}><h4>{study.type}</h4><h5>{study.degree}</h5><p>{study.location}</p></div>)}
                </div>
            </div>
          </div>
        </div>
      </>}
    </>
  )
}

export default Index