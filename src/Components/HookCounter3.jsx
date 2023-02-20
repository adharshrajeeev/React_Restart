import React,{useState} from 'react'

function HookCounter3() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <input type="text" value={name.firstName} onChange={e=>setName({firstName:e.target.value})}/>
        <input type="text" value={name.lastName}  onChange={e=>setName({lastName:e.target.value})}/>
        <h1>FirstName:{name.firstName}</h1>
        <h1>LastName:{name.lastName}</h1>
    </div>
  )
}

export default HookCounter3