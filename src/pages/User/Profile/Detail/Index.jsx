import React, { useEffect } from 'react'
import ImageUser from '../../../../components/ImageUser/ImageUser'
import './Index.scss'

const Index = () => {

  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log(user);
  }, [])
  
  return (
    <div>
      <ImageUser />
    </div>
  )
}

export default Index