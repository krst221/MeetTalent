/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Message from '../Message/Message'
import './GalleryMessages.scss'
import Search from '../Search/Search'

const GalleryMessages = ({inbox}) => {

  const [usersFiltered, setUsersFiltered] = useState([])
  const [finbox, setFinbox] = useState(inbox);

  useEffect(() => {
    setUsersFiltered(JSON.parse(localStorage.getItem('users')).filter((user) => user.name.toLowerCase() !== JSON.parse(localStorage.getItem('user')).name.toLowerCase()));
  }, [])

  const searchUsers = (title) => {
    const filtered = [...usersFiltered].filter((user) => user.name.toLowerCase().includes(title.toLowerCase()))
    for(let i = 0; i < filtered.length ; i++){
      const messages = [...inbox].filter((user) => user.user_send === filtered[i]._id);
      setFinbox(messages);
    }
    if(title.length < 1) setFinbox(inbox);
  }

    return (
      <>
        <div className='b-offers-search' style={{marginBottom: "20px"}}>
          <Search setSearch={searchUsers}></Search>
        </div>
        <div className='b-component-galleryoffers'>
          <div className='b-offers-boxes-container'>
            {[...finbox].reverse().map((mail, index) => <Message key={index} message={mail}></Message>)}
          </div>
        </div>
    </>
  )
}

export default GalleryMessages