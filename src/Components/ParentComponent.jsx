import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const greetParent=()=>{
        alert("HELLO PARTENT")
    }
  return (
    <div>
        <ChildComponent greetHandler={greetParent}/>
    </div>
  )
}

export default ParentComponent