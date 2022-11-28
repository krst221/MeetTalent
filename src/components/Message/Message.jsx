import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { getSender } from '../../redux/auth/auth.actions';
import './Message.scss'  //Container de las ofertas

const Message = ({message}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSender(message.user_send));
  }, [dispatch, message])

  console.log(JSON.parse(localStorage.getItem('sender')).picture);

  
  return (
    <div className='b-message' onClick={() => navigate(`/user/${JSON.parse(localStorage.getItem('user'))._id}/${JSON.parse(localStorage.getItem('sender'))._id}`)}>
      <img src={localStorage.getItem('sender') && JSON.parse(localStorage.getItem('sender')).picture} alt='' /><h3>{message.text}</h3>
    </div>
  )
}

export default Message