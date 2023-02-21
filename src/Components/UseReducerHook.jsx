import React, { useReducer} from 'react'

function valueReducer(state,action){
  if(action === 'increment'){

    return state+1;
  }else{
    return state -1 
;  }
}

function UseReducerHook() {
    // const [count,setCount]=useState(0);
    // const [bgColor,setbgColor]=useState('white');
      const [value,dispatch]=useReducer(valueReducer,0)
  return (
    <div>
        {/* <button onClick={()=>setCount(count + 1)}>Increment</button> 
        <button onClick={()=>setbgColor('green')}>Green</button>
        <h1 style={{background:bgColor}}>{count}</h1>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
         <button onClick={()=>setbgColor('blue')}>Blue</button> */}
         <button onClick={()=>dispatch('increment')}>Increment</button>
         <h1>{value}</h1>
         <button onClick={()=>dispatch('decerement')}>Decrement</button>
    </div>
  )
}

export default UseReducerHook