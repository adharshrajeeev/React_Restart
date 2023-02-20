import React,{useState} from 'react'

function HookUseState() {

    const [items,setItems]=useState([])
    function addItem(){
        setItems([...items,{
           id:items.lenght,
           value:Math.floor(Math.random()* 10) +1   
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {
                items.map(item=>{
                  return  <li key={item.id}>{item.value}</li>
                })
            }
        </ul>
    </div>
  )
}

export default HookUseState