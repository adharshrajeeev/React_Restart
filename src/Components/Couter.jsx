import React, { useState } from 'react'

function Couter() {
    const [count,setCount]=useState(0);

  return (
    <div>
       <h1>Couter:{count}</h1> 
       <button onClick={()=>setCount(count+1)}>ADD</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Clear</button>
        </div>
  )
}

export default Couter