import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from '../store/todo-items-store';


export default function TodoItem({name,date}) {

const  {itemDelete} = useContext(TodoItemsContext);

  return (
   <>
   
   <div className="container">
      <div className="row rn-row">
    <div className="col-6">
  {name}
    </div>

    <div className="col-4">
    {date}
    </div>

    <div className="col-2">
    <button type="button" className="btn btn-danger rn-button" onClick={()=>deleteItem(name)}>
      
    <MdDelete />

    </button>
    </div>
  </div>

    </div>

   
   </>
  )
}



TodoItem.propTypes = {
    name:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired
  };


