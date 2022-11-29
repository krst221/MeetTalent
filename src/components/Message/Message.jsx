import React, { useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { getSender } from '../../redux/auth/auth.actions';
import './Message.scss'  //Container de las ofertas

const Message = ({message}) => {

  const dispatch = useDispatch();
  const [sender, setSender] = useState([]);
  const [convo, setConvo] = useState(false);
  const {register, handleSubmit, reset} = useForm()

  useEffect(() => {
    dispatch(getSender(message.user_send)).then(value => {setSender(JSON.parse(value));})
  }, [dispatch, message])

<<<<<<< HEAD
    return (
    <div className='b-message'>
      <img src={localStorage.getItem("sender") && JSON.parse(localStorage.getItem('sender')).picture} alt='' /><h3>{message.text}</h3>
    </div>
=======
  const send = (formdata) => {
    reset();
  }
  
  return (
    <>
    <div className='b-message'>
    <div className='b-message-inbox' onClick={() => setConvo(!convo)}>
      <div className='b-message-inbox-user'><h3>{sender && sender.name}</h3><img src={sender && sender.picture} alt='' /></div><div className='b-message-inbox-text'><h3>{message.text}</h3></div>
    </div>      
    {convo ? 
        <form className='b-message-form' onSubmit={(handleSubmit(send))}>
          <textarea {...register("text", {required: true})}></textarea>
          <button type='submit'>Enviar</button>
        </form> : ''}
      </div>
    </>
>>>>>>> 8c96720d4d58984073d5d57886d2593a4f022ee6
  )
}

export default Message