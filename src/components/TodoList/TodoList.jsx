import React from 'react'
import './TodoList.css'
// import sweetalert from 'sweetalert'

function TodoList(props) {
    let deleteItem = props.deleteItem;
    let editItem = props.editItem;
    let checkedItem = props.checkedItem;
    let todoArr = props.todoArr.length > 0 ? props.todoArr : JSON.parse(localStorage.getItem('todos'))
    
    
    
    return (
        <div className="items-container">
             { todoArr && todoArr.length >0 ?
        todoArr.map((item,index)=>{
         
          return(
        <div className="items">
          <div className="item-left">
         
            <input value={item.status} type="checkbox" checked={item.status}
                  onChange={()=>checkedItem(index)} />
            <p className={item.status ? "line-through" : null}>{item.text}</p>
            
          </div>
          <div className="item-right">
          {!item.status && <i onClick={()=>editItem(index)} className="fas fa-pencil-alt" title="Update Item"></i> }
          <i onClick={()=>deleteItem(index)} className="fas fa-trash-alt" title="Delete Item"></i>
          </div>
        </div>
          )
        }) : null
        }
        </div>
    )
}

export default TodoList
