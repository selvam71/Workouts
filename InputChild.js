import React from 'react'

function InputChild({count}) {
  return ( 
    <div>
      <input type = 'text' value = {count}/>
    </div>
  )
}

export default InputChild