import React from 'react'
import BackButton from '../../../components/BackButton/BackButton'
import Candidate from '../../../components/Candidate/Candidate'
import NavBar from '../../../components/NavBar/NavBar'
import './Candidates.scss'

const Candidates = () => {
  return (
    <div className='b-candidates-container'>
      <div className='b-candidates-header'>
        <BackButton src="../../../assets/back.svg"></BackButton>
        <h5 className='b-offer-title'>Ofertas</h5>
        <span className='b-p'>s</span>
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