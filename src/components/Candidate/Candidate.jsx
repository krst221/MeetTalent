import React from 'react'
import './Candidate.scss'

const Candidate = () => {  //User card mostrada en hachathon
  return (
    <div className='b-candidate-container'>
      <div className='b-candidate-radius'>
        
      </div>
      <div className='b-candidate-info-text'>
        <h3 className='b-candidate-text'>Antonio Robles</h3>
        <h5 className='b-candidate-text--sec'>Diseñador web</h5>
      </div>
      <div className='b-candidate-small'>
        <div>
          <h6 className='b-grey'>35 años</h6>
        </div>
        <div className='b-candidate-location-container'>
          <img className='b-candidate-icon' src='../../assets/location.svg' alt='location'></img>
          <h6 className='b-grey-2'>Madrid</h6>
        </div>
      </div>
    </div>
  )
}

export default Candidate
