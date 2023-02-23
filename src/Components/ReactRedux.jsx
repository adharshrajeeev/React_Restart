import React, { useEffect, useState } from 'react'

function ReactRedux() {
  const [state,setState]=useState(0);
useEffect(()=>{
  console.log("inside useeffect");
})
  return (
    <div>
        <button onClick={()=>setState(state+1)}>increment</button>
        <h1>{state}</h1>
        <button onClick={()=>setState(state-1)}>decrement</button>
    </div>
  )
}

export default ReactRedux