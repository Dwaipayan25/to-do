import React,{useState} from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = (props) => {
     
  return (
    <div>
          {props.todos.map(todo => {
               return (<ToDoItem todoo={todo} toggleToDo={props.toggleToDo}/>)
          })}
    </div>
  )
}

export default ToDoList
