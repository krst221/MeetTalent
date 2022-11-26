import React from 'react'
import Candidate from '../../../components/Candidate/Candidate'
import NavBar from '../../../components/NavBar/NavBar'
import './Candidates.scss'

const Candidates = () => {
  return (
    <div className='b-candidates-container'>
      <div className='b-candidates-header'>
        <h5 className='b-offer-title'>Ofertas</h5>
      </div>
      <Candidate></Candidate>
      <Candidate></Candidate>
      <Candidate></Candidate>
      <div className='b-position-nav'>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default Candidates