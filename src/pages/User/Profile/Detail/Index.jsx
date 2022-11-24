import React, {useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import ImageUser from '../../../../components/ImageUser/ImageUser'
import KeywordTag from '../../../../components/KeywordTag/KeywordTag'
import Loading from '../../../../components/Loading/Loading'
import { modifyUserValue } from '../../../../redux/auth/auth.actions'
import './Index.scss'

const Index = () => {

  const user = useState(JSON.parse(localStorage.getItem('user')));
  const [edit, setEdit] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (formData) => {
    formData._id = user._id;
    dispatch(modifyUserValue(formData));
    setEdit(0);
    reset();
  }

  return (
    <>
      {user.length < 1 ? <Loading /> : 
      <div>
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
                <input type='text'{...register('name', {required: true})} defaultValue={user.name} placeholder='Edita nombre'/>
                <button type='submit'>Aceptar cambios</button>
              </form>
            </div> : ''}
        </div>
        <div>
          <h2>{user.job}</h2>
          {edit !== 3 ? <div onClick={() => setEdit(3)}>Editar</div> : ''}
          {edit === 3 ? 
            <div>
              <input type='text' defaultValue={user.job} placeholder='Edita ocupación'/>
              <button type='submit' onClick={() => setEdit(0)}>Aceptar cambios</button>
            </div> : ''}
        </div>
        <span>Twitter</span>        <span>Instagram</span>        <span>Facebook</span>
        <h3>Datos personales</h3>
        <div>
          {user.age > 0 ? <p>{user.age} años</p> : <p>Edad indefinida</p>}
          {edit !== 4 ? <div onClick={() => setEdit(4)}>Editar</div> : ''}
          {edit === 4 ? 
            <div>
              <input type='number' defaultValue={user.age} placeholder='Edita edad'/>
              <button type='submit' onClick={() => setEdit(0)}>Aceptar cambios</button>
            </div> : ''}
        </div>
        <div>
          {user.location ? <p>{user.location.city}</p> : ''}
          {edit !== 5 ? <div onClick={() => setEdit(5)}>Editar</div> : ''}
          {edit === 5 ? 
            <div>
              <input type='text' defaultValue={user.location.city} placeholder='Edita ciudad'/>
              <input type='text' defaultValue={user.location.detail} placeholder='Edita detalle de ciudad'/>
              <input type='number' defaultValue={user.location.zip} placeholder='Edita código postal'/>
              <button type='submit' onClick={() => setEdit(0)}>Aceptar cambios</button>
            </div> : ''}
        </div>
        <div>
          <p>{user.email}</p>
          {edit !== 6 ? <div onClick={() => setEdit(6)}>Editar</div> : ''}
          {edit === 6 ? 
            <div>
              <input type='email' defaultValue={user.email} placeholder='Edita correo'/>
              <button type='submit' onClick={() => setEdit(0)}>Aceptar cambios</button>
            </div> : ''}
        </div>
        <div>
          {user.phone ? <p>{user.phone}</p> : <p>Teléfono indefinido</p>}
          {edit !== 7 ? <div onClick={() => setEdit(7)}>Editar</div> : ''}
          {edit === 7 ? 
            <div>
              <input type='number' defaultValue={user.phone} placeholder='Edita número de teléfono'/>
              <button type='submit' onClick={() => setEdit(0)}>Aceptar cambios</button>
            </div> : ''}
        </div>
        <div>
          <h3>Palabras clave del perfil</h3>
          {edit !== 8 ? <div onClick={() => setEdit(8)}>Editar</div> : ''}
          {edit === 8 ? 
            <div>
              <input type='text' placeholder='Añade palabra clave'/>
              <button type='submit' onClick={() => setEdit(0)}>Aceptar cambios</button>
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
              <input type='text' placeholder='Añade tipo de estudios'/>
              <input type='text' placeholder='Añade detalle de estudios'/>
              <input type='text' placeholder='Añade centro de estudios'/>
              <button type='submit' onClick={() => setEdit(0)}>Aceptar cambios</button>
            </div> : ''}
          {user.studies && user.studies.map((study) => <div><h4>{study.type}</h4><h5>{study.degree}</h5><p>{study.location}</p></div>)}
        </div>
      </div>}
    </>
  )
}

export default Index