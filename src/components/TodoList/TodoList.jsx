import React,{useState} from 'react'
import './TodoList.css'

let completedItems;
let activeItems;

function TodoList(props) {
    let deleteItem = props.deleteItem;
    let editItem = props.editItem;
    let checkedItem = props.checkedItem;
    let todoArr = props.todoArr.length > 0 ? props.todoArr : JSON.parse(localStorage.getItem('todos'))
    let [category,setCategory] = useState('All')  
    
    // --------find all items---------
      let allItems = todoArr && todoArr.length >0 ?
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

      const displayAll = () =>{
        setCategory("All")
      }

      // --------completed task------------
      const displayCompleted = () =>{
        setCategory("Completed")
       completedItems = todoArr && todoArr.length >0 ?
        todoArr.map((item,index)=>{         
          return(
            item.status &&
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

      // ---------Active task-----------
      const displayActive = () =>{
        setCategory("Active")
       activeItems = todoArr && todoArr.length >0 ?
        todoArr.map((item,index)=>{         
          return(
            !item.status &&
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
    
      // ----------rendering------------
    return (
        <div className="items-container">
          <div className="list-buttons">
            <button className={category === "Active" ? "changebg button" : "button"} onClick={displayActive}>Active</button>
            <button className={category === "All" ? "changebg button" : "button"} onClick={displayAll} autoFocus>All</button>
            <button className={category === "Completed" ? "changebg button" : "button"} onClick={displayCompleted}>Completed</button>            
          </div>
          
             {category === 'All' && allItems}
             {category === 'Completed' && completedItems}
             {category === 'Active' && activeItems} 
              
        </div>
    )
}

export default TodoList
