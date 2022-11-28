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
  )
}

export default Message