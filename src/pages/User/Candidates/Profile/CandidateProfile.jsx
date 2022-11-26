import React, {useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import tw from '../../../../img/twitter.svg'
import fb from '../../../../img/facebook.svg'
import ig from '../../../../img/instagram.svg'
import { useDispatch } from 'react-redux'
import ImageUser from '../../../../components/ImageUser/ImageUser'
import KeywordTag from '../../../../components/KeywordTag/KeywordTag'
import Loading from '../../../../components/Loading/Loading'
import { getUserById} from '../../../../redux/auth/auth.actions'
import BackButton from '../../../../components/BackButton/BackButton'
import Heart from '../../../../components/Heart/Heart'

const CandidateProfile = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserById(id, navigate));
  }, [dispatch, navigate, id])
  
  console.log(localStorage.getItem('userid'));

  return (
    <>
      {localStorage.getItem('userid') === 'null' ? <Loading /> :
      <>
        <div className='b-profile'>
          <div className='b-profile-header'>
            <div className='white'>
              <BackButton num={-3} src="../../../assets/back.svg"></BackButton>
            </div>
            <h3 className='b-profile-title'>Candidatos</h3>
            <div className='white'>
              <Heart src="../../../assets/heart.svg"></Heart>
            </div>
          </div> 
          <div className='b-profile--detail'>
            <div className='b-profile--detail--container'>    
              <div className='b-profile--image'><ImageUser src={JSON.parse(localStorage.getItem('userid')) ? JSON.parse(localStorage.getItem('userid')).picture : ''} /></div>
            </div>
            <div className='b-profile--detail--container'>
              <h2>{JSON.parse(localStorage.getItem('userid')) ? JSON.parse(localStorage.getItem('userid')).name : ''}</h2>
            </div>
            <div className='b-profile--detail--container'>
              <h3>{JSON.parse(localStorage.getItem('userid')) ? JSON.parse(localStorage.getItem('userid')).job : ''}</h3>
            </div>
            <div className='b-container--sn'>
              <img src={tw} alt='' className='b-icon--sn' />
              <img src={ig} alt='' className='b-icon--sn' />
              <img src={fb} alt='' className='b-icon--sn' />
            </div>
            <div className='b-profile--detail--list'>
              <h4>Datos personales</h4>
              <div className='b-profile--detail--container'>
                {JSON.parse(localStorage.getItem('userid')) && JSON.parse(localStorage.getItem('userid')).age > 0 ? <p>📅 {JSON.parse(localStorage.getItem('userid')).age} años</p> : <p>📅 Edad indefinida</p>}
              </div>
              <div className='b-profile--detail--container'>
                {JSON.parse(localStorage.getItem('userid')) && JSON.parse(localStorage.getItem('userid')).location ? <p>🌆 {JSON.parse(localStorage.getItem('userid')).location.city}{JSON.parse(localStorage.getItem('userid')).location.detail ? <>, {JSON.parse(localStorage.getItem('userid')).location.detail}</> : '' }{JSON.parse(localStorage.getItem('userid')).location.zip ? <>, {JSON.parse(localStorage.getItem('userid')).location.zip}</> : '' }</p> : ''}
              </div> 
              <div className='b-profile--detail--container'>
                <p>✉ {JSON.parse(localStorage.getItem('userid')) && JSON.parse(localStorage.getItem('userid')).email}</p>
              </div>
              <div className='b-profile--detail--container'>
                {JSON.parse(localStorage.getItem('userid')) && JSON.parse(localStorage.getItem('userid')).phone ? <p>📞 {JSON.parse(localStorage.getItem('userid')).phone}</p> : <p>📞 Teléfono indefinido</p>}
              </div>
            </div>
            <div className='b-profile--vert'>
              <h4>Palabras clave del perfil</h4>
              <div className='b-profile--detail--tags'>
                {JSON.parse(localStorage.getItem('userid')) && JSON.parse(localStorage.getItem('userid')).tags && JSON.parse(localStorage.getItem('userid')).tags.map((tag, index) => <div key={index}><KeywordTag tag={tag} index={index} /></div>)}
              </div>
            </div>
            <div className='b-profile--vert'>
              <h4>Formación académica</h4>
                <div className='b-profile--detail--tags'>
                  {JSON.parse(localStorage.getItem('userid')) && JSON.parse(localStorage.getItem('userid')).studies && JSON.parse(localStorage.getItem('userid')).studies.map((study, index) => <div className='b-profile--study' key={index} ><h4>{study.type}</h4><h5>{study.degree}</h5><p>{study.location}</p></div>)}
                </div>
            </div>
          </div>
        </div>
      </>}
    </>
  )
}

export default CandidateProfile