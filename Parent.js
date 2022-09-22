import React,{useState} from 'react'
import ButtonChild from './ButtonChild'
import InputChild from './InputChild'

function Parent(){
  const [count,setCount] = useState(0);
  const handleIncrement = ()=>{
    setCount(count+1);
  } 
  const handleDecrement = ()=>{
    setCount(count-1);
  } 
  const handleReset = () =>{
    setCount(0);
  } 
  return (
    <div> 
        <h1>Count:{count}</h1>
        <InputChild count = {count}/>
        <ButtonChild increment={handleIncrement} 
        decrement={handleDecrement} reset={handleReset}/>
    </div>
  )
}

export default Parent 