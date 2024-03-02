import React, { useState } from 'react';
import { auth,db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import axios from 'axios';

function SendMsg() {
  const [message, setMessage] = useState("");

  const SendMsg = async(e) => {
    e.preventDefault();
    if(message.trim() === "" ){
      alert("Enter Msg no blank recipient can be send!");
      return;
    }
    const { uid, displayName , photoURL } = auth.currentUser ;
    await addDoc (collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar : photoURL,
      createdAt : serverTimestamp(), uid,
    });
    setMessage("");
  } 

  return (
    <form action="" className='send-message'
    onSubmit={(e) => SendMsg(e)} >
      <label htmlFor="message-input" hidden > Enter Msg </label>
      <input type="text"
        id="messageInput"
        name="messageInput"
        className="form-input__input"
       placeholder='type your msg here...' 
       value={message} onChange={(e) => setMessage(e.target.value)} />
       <button type='submit' > Send </button>
    </form>
  )
}

export default SendMsg