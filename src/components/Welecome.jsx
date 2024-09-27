import React from 'react'
import css from "./Welecome.module.css"
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';


export default function Welecome() {


  const contextObj=useContext(TodoItemsContext);
  const todoItems =contextObj.todoItems;

  return todoItems.length === 0 && <p className={css.line}>
      Enjoy Your Day
    </p>
  
  
};
