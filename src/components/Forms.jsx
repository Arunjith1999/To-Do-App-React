import React, {  useState } from 'react'
function Forms() {
   
 const [colour,Setcolor] = useState('white')
  return (
    <div>
    <h1 style={{color :colour}}>Heading</h1>
   <button onClick ={()=>
           Setcolor('green')}>Green</button>
   <button onClick={()=>
            Setcolor('red')}>Blue</button>
    </div>
 

  )
}

export default Forms
