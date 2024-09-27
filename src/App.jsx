import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welecome from "./components/Welecome";
import { TodoItemsContext } from "./store/todo-items-store";



function App() {
  

  const [todoItems, setTodoItem] = useState([]);

  const addNewItem = (newName, newDate) => {
    const newTodoItems = [...todoItems, { name: newName, date: newDate }];
    setTodoItem(newTodoItems);
    
  };



const itemDelete = (todoItemName) =>
{
  const newTodoItems=todoItems.filter ( (items)=>

    items.name !== todoItemName
  )
   
  
setTodoItem(newTodoItems);

}



  return (

<TodoItemsContext.Provider 

value={
  {
    todoItems ,
  addNewItem,
  itemDelete,

}
}>
   
    <center className="todo-container"> 
      <AppName />

         <hr/>
      <AddTodo />
       <Welecome></Welecome>
      <TodoItems/>
    </center>
    </TodoItemsContext.Provider>

  );
}

export default App;
