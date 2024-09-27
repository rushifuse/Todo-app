import React from 'react'
import TodoItem from "./TodoItem"
import css from "./TodoItems.module.css"
import { useContext } from 'react' ;
import { TodoItemsContext } from '../store/todo-items-store';



const TodoItems = ({ onDeleteClick}) =>{

const {todoItems}=useContext(TodoItemsContext);

 
  return (



    <div className={css.itemsContainer}>

        {todoItems.map((item)=>(
        <TodoItem 
        name={item.name}  
        date={item.date}

        key={item.name}
         
        ></TodoItem>
        
        
        
        
        ))}


    
 
    </div>
  );
};

export default TodoItems;

