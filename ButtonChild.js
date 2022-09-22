import React from 'react'
export const counterContext = React.createContext();
function ButtonChild({increment,decrement,reset}) {
  

  return (
    <div>
       <button onClick = {()=>increment()}>+</button>
       <button onClick = {()=>decrement()}>-</button>
       <button onClick = {()=>reset()}>Reset</button>
    </div>
   
  )
}

export default ButtonChild