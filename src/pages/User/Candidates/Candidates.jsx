import React, { useEffect, useState } from 'react'
import Candidate from '../../../components/Candidate/Candidate'
import Loading from '../../../components/Loading/Loading'
import NavBar from '../../../components/NavBar/NavBar'
import Search from '../../../components/Search/Search'
import { UserViewContext } from '../../../shared/contexts/UserViewContext'
import './Candidates.scss'

const Candidates = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [filter, setFilter] = useState("location");
  const [showName, setShowName] = useState("name")

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')))
    setUsersFiltered(JSON.parse(localStorage.getItem('users')))
    localStorage.setItem('userid', null);
  }, [])

  const searchUsers = (text, filter) => {
    let filtered = [];
    if(showName === "name") filtered = users.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
    else if (showName === "location") filtered = users.filter((user) => user.location.city.toLowerCase().includes(text.toLowerCase()));
    else if (showName === "job") filtered = users.filter((user) => user.job.toLowerCase().includes(text.toLowerCase()));
    setUsersFiltered(filtered)
  }
  
  return (
    <UserViewContext.Provider value={{user, setUser}}>
      <>
        {users.length < 1 ? <Loading /> : 
          <>
            <div className='b-candidates-container'>
              <div className='b-candidates-header'>
                <h5 className='b-offer-title'>Candidatos</h5>
              </div>
              <Search filter={filter} setSearch={searchUsers}></Search>
              <div className='b-candidates-filters'>
                <h5 className= {`b-offers-links ${showName === "name" ? "dark" : ""}`} onClick={() => setShowName("name")}>Nombre</h5>
                <h5 className={`b-offers-links ${showName === "location" ? "dark" : ""}`} onClick={() => setShowName("location")}>Localización</h5>
                <h5 className={`b-offers-links ${showName === "job" ? "dark" : ""}`} onClick={() => setShowName("job")}>Trabajo</h5>
              </div>
              <div className='b-candidates-container--list'>
                {usersFiltered.map((user, index) => <Candidate key={index} user={user}></Candidate>)}
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