import React, { useEffect, useState } from 'react'
import Candidate from '../../../components/Candidate/Candidate'
import Loading from '../../../components/Loading/Loading'
import NavBar from '../../../components/NavBar/NavBar'
import { UserViewContext } from '../../../shared/contexts/UserViewContext'
import './Candidates.scss'

const Candidates = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')))
    localStorage.setItem('userid', null);
  }, [])
  
  return (
    <UserViewContext.Provider value={{user, setUser}}>
      <>
        {users.length < 1 ? <Loading /> : 
          <>
            <div className='b-candidates-container'>
              <div className='b-candidates-header'>
                <h5 className='b-offer-title'>Candidatos</h5>
              </div>
              <div className='b-candidates-container--list'>
                {users.map((user, index) => <Candidate key={index} user={user}></Candidate>)}
              </div>
              <div className='b-position-nav'>
                <NavBar></NavBar>
              </div>
            </div>
          </>
        }
      </>
    </UserViewContext.Provider>
  )
}

export default Candidates