import React from 'react'

const ToDoItem = (props) => {

     function handleToDoClick(){
          props.toggleToDo(props.todoo.id)
     }

  return (
    <div>
    <label htmlFor="">
     <input type="checkbox" checked={props.todoo.isChecked}
          onChange={handleToDoClick}
     />
     {props.todoo.name}
    </label>
      
    </div>
  )
}

export default ToDoItem
