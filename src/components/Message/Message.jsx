import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getSender } from '../../redux/auth/auth.actions';
import './Message.scss'  //Container de las ofertas

const Message = ({message}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSender(message.user_send));
  }, [dispatch, message])

    return (
    <div className='b-message'>
      <img src={localStorage.getItem("sender") && JSON.parse(localStorage.getItem('sender')).picture} alt='' /><h3>{message.text}</h3>
    </div>
  )
}

export default Message