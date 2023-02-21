import  { useReducer} from 'react'
import usageReducers from '../Reducers/usageReducers'



function UseReducerHook() {
  const initialState={
    value:0,
    color:'white'
  }
    // const [count,setCount]=useState(0);
    // const [bgColor,setbgColor]=useState('white');
      const [state,dispatch]=useReducer(usageReducers,initialState)
  return (
    <div>
        {/* <button onClick={()=>setCount(count + 1)}>Increment</button> 
        <button onClick={()=>setbgColor('green')}>Green</button>
        <h1 style={{background:bgColor}}>{count}</h1>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
         <button onClick={()=>setbgColor('blue')}>Blue</button> */}
         <button onClick={()=>dispatch('increment')}>Increment</button>
         <button  onClick={()=>dispatch('green')}>Green</button>
         <h1 style={{background:state.color}}>{state.value}</h1>
         <button onClick={()=>dispatch('decrement')}>Decrement</button>
         <button  onClick={()=>dispatch('blue')}>Blue</button>

    </div>
  )
}

export default UseReducerHook