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
    let obj={
      text:e.target.value,
      status:false
    }
    setTodo(obj)  
  }
  
  const addItem = (event) =>{
    if(event.key === 'Enter' || event.target.id ==='addTodo' || event.target.id === 'editTodo'){
      if(todo.text !== ''){
          if(toggleSubmit){          
            todoArr.unshift(todo)
            localStorage.setItem('todos',JSON.stringify(todoArr))
            setTodoArr(todoArr)           
            setTodo({text:"",status:false});
          }else{
            setTodoArr(todoArr.map((item,key)=>{
              if(key === isEditItem){
                return(todo)
              }
              return item;
            }))
            setToggleSubmit(true)
            setTodo({text:"",status:false});
            setIsEditItem(null)
          }
      }else{
        sweetalert("Oops", "Please write todo first", "error")
      }
    }
  }

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
  
const editItem = (index) =>{
    let findTodo = todoArr.find((todo,key)=>index===key)
    setToggleSubmit(false)
    setTodo(findTodo);
    setIsEditItem(index)
  }
  
  return (
    <div className="app-content">
            <div>
                <h1>Todo App</h1>
            </div>
            <div className="input-wraper">
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
            <TodoList todoArr={todoArr} checkedItem={checkedItem} 
                      deleteItem={deleteItem} editItem={editItem} />
    </div>
    )
}

export default CreateTodo
