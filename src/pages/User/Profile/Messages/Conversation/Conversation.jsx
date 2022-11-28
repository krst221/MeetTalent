import React from 'react'
import { useParams } from 'react-router'
import './Conversation.scss'

const Conversation = () => {
  const {idr, ids} = useParams();
  console.log(idr, ids);
  return (
    <div>Conversation</div>
  )
}

export default Conversation