import React from 'react';
import './App.css';
import {useState} from 'react'
function App() {
  const [toDos,setTodos] = useState([])
  const [deleted,setDeleted] = useState([])
  const [completed,setCompleted]=useState([]);

  const[toDo,setTodo] = useState('')
  console.log(toDos);
  return (

<div className='todo-container'>
       
       <div className='input-section'>
          <h1>Todo List</h1>
           <input type="text"   onChange={(event)=>setTodo(event.target.value)}/>
           <button><i class="fa-solid fa-circle-plus"  onClick={()=> setTodos([...toDos,{id:Date.now(),text:toDo}])}></i></button>
       </div>

       <div className='items'>

           <div className='added-item'>
             <h2>Pending</h2>
             {toDos.map((obj)=>{
        return(
        
        <ul>
                
        <li>
           
            <button onClick={()=>{
              setCompleted([...completed,obj])
              setTodos(toDos.filter((m)=>{
                return m.id!=obj.id
              }))
            }}>done</button>
            {obj.text}
            <span><i  className="fa-solid fa-trash" style={{color:'red'}} onClick={()=>{
                setDeleted([...deleted,obj])
                setTodos(toDos.filter((m)=>{
                  return m.id!=obj.id
                }))
            }}></i></span>

           
           
        </li>
    </ul>

        )
       
      }
)}
            
       </div>

       <div className='completed-item'>
           <h2>Completed</h2>
          {
           
           completed.map((obj)=>{
           return( <ul>
                
            <li>
           
                <button onClick={()=>{
                  setTodos([...toDos,obj])
                  setCompleted(completed.filter((m)=>{
                    return m.id!=obj.id
                  }))
                }}>redo</button>
               <strike> {obj.text} </strike>
                <span><i  className="fa-solid fa-trash" style={{color:'red'}} onClick={()=>{
                    // setDeleted([...deleted,obj])
                    setCompleted(completed.filter((m)=>{
                      return m.id!=obj.id
                    }))
                }}></i></span>
    
               
               
            </li>
        </ul>)
           })
          }
          
           
          
       </div>

       <div className='removed-item'>
           <h2>Removed</h2>
           {
           
           deleted.map((obj)=>{
           return( <ul>
                
            <li>
           
                <button onClick={()=>{
                  setTodos([...toDos,obj])
                  setDeleted(deleted.filter((m)=>{
                    return m.id!=obj.id
                  }))
                }}>Redo</button>
                {obj.text}
                <span></span>
    
               
               
            </li>
        </ul>)
           })
          }
           
           
       </div>

       </div>

   </div>
  );
}

export default App;