
function usageReducers(state,action) {
    switch(action){
        case 'increment':return {...state,value:state.value+1 }
        case 'decrement':return {...state,value:state.value-1 }
        case 'green':return {...state,color:'green' }
        case 'blue':return {...state,color:'blue'  }
        default:break;
    }
  return state+action
}

export default usageReducers