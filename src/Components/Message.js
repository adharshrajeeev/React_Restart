import React from 'react'
import { useState } from 'react'
function Message() {
    const [message,setMessage]=useState('WELCOME VISITOR');
    const [subScribeBtn,setSubScribe]=useState('Subscribe');
    function handleSubScribe(){
        setMessage('Thank You for Subscribing');
        setSubScribe('UnSubScribe')
    }
  return (
    <div>
        <h1>{message}</h1>
        <button onClick={handleSubScribe}>{subScribeBtn}</button>
    </div>
  )
}

export default Message