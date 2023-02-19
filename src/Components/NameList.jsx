import React from 'react'

function NameList() {
    const names=['bruce','clark','diana','mary','susan']
  return (
    <div>
        {
            names.map((name)=>{
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
  )
}

export default NameList