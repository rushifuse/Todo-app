import React, { useState,  useRef, useContext } from 'react'
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from '../store/todo-items-store';



export default function AddTodo() {

const {addNewItem} = useContext(TodoItemsContext);


const [todoName , setTodoName]=useState("");
const [dueDate , newDueDate]=useState("");

const todoNameElement = useRef();
const dueDateElement = useRef();

  const handleAddButtonClicked =(event) =>
  {
     event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value="";
    dueDateElement.current.value="";

    addNewItem(todoName,dueDate);
   
  }

  return (
    <div className="container items-container">
      <div className="row rn-row">
    <div className="col-6">
      <input type="text" placeholder="Enter todo here" ref={todoNameElement}/>
    </div>

    <div className="col-4">
<input type="date" ref={dueDateElement}/>
    </div>

    <div className="col-1">
    <button type="button" className="btn btn-success rn-button css.add"  onClick={handleAddButtonClicked}>
      
      
    <BiMessageAdd />

    </button>
    </div>
  </div>


    </div>
  )
}
