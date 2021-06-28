import React, {useState} from 'react'
import './CreateTodo.css'
import TodoList from '../TodoList/TodoList';
import sweetalert from 'sweetalert'

const getLocalItems = ()=>{
  let todos = localStorage.hasOwnProperty("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  return todos;
}

function CreateTodo() {

  const [todoArr,setTodoArr] = useState(getLocalItems());
  const [todo,setTodo] =useState({text:"",status:false});
  
  let [toggleSubmit,setToggleSubmit] = useState(true)
  let [isEditItem,setIsEditItem] = useState(null)

  const inputHandle =(e)=>{
    console.log("call input handle");
    let obj={
      text:e.target.value,
      status:false
    }
    setTodo(obj)  
  }
  
  // ---------add a new item or edit an existing item----------------
  const addItem = (event) =>{
    console.log("call add item");
    if(event.key === 'Enter' || event.target.id ==='addTodo' || event.target.id === 'editTodo'){
      if(todo.text !== ''){
          if(toggleSubmit){    
            console.log("Inside if case")      
            todoArr.unshift(todo)
            localStorage.setItem('todos',JSON.stringify(todoArr))
            setTodoArr(todoArr)           
            setTodo({text:"",status:false});
          }else{
            setTodoArr(
              todoArr.map((item,key)=>{
                if(key === isEditItem){
                  todoArr[isEditItem].text=todo.text
                  return todoArr[isEditItem]
                }
                return item
              })
            )
            localStorage.setItem('todos',JSON.stringify(todoArr))
            setTodo({text:"",status:false});
            setIsEditItem(null)
            setToggleSubmit(true)
          }          
      }else{
        sweetalert("Oops", "Please write todo first", "error")
      }
    }
  }

  // -------mark completed item------------
  const checkedItem =(i) =>{
    if(todoArr[i].status !== true){
      todoArr[i].status = true
      localStorage.setItem('todos',JSON.stringify(todoArr))
      setTodoArr(getLocalItems())
      sweetalert("Good job","Todo completed",'success')
    }else{
      todoArr[i].status = false
      localStorage.setItem('todos',JSON.stringify(todoArr))
      setTodoArr(getLocalItems())
    }
  }

  // --------delete item------------
  const deleteItem =(index)=>{
    sweetalert({
        title:"Are you sure?",
        text:"Once deleted, you will not be able to recover this file! ",
        icon:"warning",
        buttons:true,
        dangerMode:true
    }).then(res=>{
        if(res){
            todoArr.splice(index,1)           
            localStorage.setItem('todos',JSON.stringify(todoArr))
            setTodoArr(getLocalItems())
        }
    })
  }
  
  // -------------edit an item-----------------
const editItem = (index) =>{
    let newEditItem = todoArr.find((todo,key)=>index===key)
    setToggleSubmit(false)
    setTodo(newEditItem);
    setIsEditItem(index)    
  }
  
  // --------rendering-------------
  return (
    <div className="content-wraper"> 
            <div>
                <h1>Todo App</h1>
            </div>
            <div className="input-wraper" data-aos="fade-left">
                <div className="input">
                    <input value={todo.text} onKeyPress={addItem} onChange={(e)=>inputHandle(e)} type="text" placeholder="Add items..."/>
                    {
                        toggleSubmit ?
                            <i onClick={addItem} id="addTodo" className="fas fa-plus" title="Add item"></i>
                        :
                            <i onClick={addItem} id="editTodo" className="fas fa-pencil-alt" title="Update Item"></i>
                    }            
                </div>
            </div>
            <div className="app-content" data-aos="fade-right">
              <TodoList todoArr={todoArr} checkedItem={checkedItem} 
                      deleteItem={deleteItem} editItem={editItem} />
            </div>  
    </div>
    )
}

export default CreateTodo
