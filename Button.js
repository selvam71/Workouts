import React,{useState} from 'react'
import Input from './Input';

function Button() {
    const [count,setCount] = useState(0);
    const handleIncrement = () => {
     setCount(prevCount => prevCount+1)
    }
    const handleDecrement = () => {
     setCount(prevCount => prevCount-1)
    }
    const handleReset = () => {
      setCount(0)
    } 
  return (
    <div className='counter'>
         <Input count = {count} />
        <button onClick = {handleIncrement}>+</button>
        <button onClick = {handleDecrement}>-</button>
        <button onClick = {handleReset}>Reset</button>
       
        
    </div>
  )
}
export default Button