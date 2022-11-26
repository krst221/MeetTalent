import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Candidate.scss'

const Candidate = ({user}) => {  //User card mostrada en hachathon

  const navigate = useNavigate();

  return (
    <div className='b-candidate-container' onClick={() => navigate(`/user/candidates/${user._id}`)}>
      <img className='b-candidate-radius' src={user.picture} alt=''/>
      <div className='b-candidate-info-text'>
        <h3 className='b-candidate-text'>{user.name}</h3>
        <h5 className='b-candidate-text--sec'>{user.job}</h5>
      </div>
      <div className='b-candidate-small'>
        <div>
          {user.age ? <h6 className='b-grey'>{user.age} años</h6> : ''}
        </div>
        <div className='b-candidate-location-container'>
          <img className='b-candidate-icon' src='../../assets/location.svg' alt='location'></img>
          <h6 className='b-grey-2'>{user.location.city}</h6>
        </div>
      </div>
    </div>
  )
}

export default Candidate
