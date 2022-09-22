import React,{useState} from 'react'

function Counter() {
    const[count,setCount] = useState(0);
    let colorName=(count>3 && count<=5) ? 'green' : (count>5 ? 'red' : 'black') ;
    if (count>5){alert("Count value is greater than 5")};
    
    const styleComponent={
      color:`${colorName}`
    }
    const handleChange = (event) => {
      setCount(event.target.value);
    }
    
    return (
      <div className = 'counter'>
        <input type = "text" value = {count} style = {styleComponent} 
        onChange = {handleChange}/>
        <button onClick={() => setCount(Number(count)+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
  )
}
export default Counter