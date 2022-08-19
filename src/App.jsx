import React, {useState, useRef, useEffect} from 'react';
import ToDoList from './ToDoList';


const LocalStorageKey='todoApp.todos';
const App = () => {
     const [todos,setTodos]=useState([])
     const [idd,setidd]=useState(1);
     const todoRef=useRef();

     function toggleToDo(id){
          const newTodos=[...todos]
          const todo=newTodos.find(todo=> todo.id===id)
          todo.isChecked=!todo.isChecked
          setTodos(newTodos);
     }

     useEffect(()=>{
          const storedTodos=JSON.parse(localStorage.getItem(LocalStorageKey));
          if(storedTodos) setTodos(storedTodos);
     },[])

     useEffect(()=>{
          localStorage.setItem(LocalStorageKey,JSON.stringify(todos));
     },[todos])

     function handleAddToDo(e){
          const name=todoRef.current.value;
          if(name==="")return
          setTodos(prevTodo =>{
               setidd(idd+1);
               return[...prevTodo,{id:{idd},name:name,isChecked:false}]
          })
          todoRef.current.value=null;
     }

     function handleClear(){
          const arr=[...todos];
          const arr1=arr.filter((curr)=>{return(!curr.isChecked)});
          setTodos(arr1);
     }

  return (
    <div>
      <h1>hello</h1>
     <ToDoList todos={todos} toggleToDo={toggleToDo}/>
      <input ref={todoRef} type="text" />
      <button type='button' onClick={handleAddToDo}>Add-TODO</button>
      <button type='button' onClick={handleClear}>Clear Completed</button>
      <div > {(todos.filter((curr) => {return(!curr.isChecked)})).length} left to do</div>
    </div>
  )
}

export default App
