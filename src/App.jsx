import { useState } from "react"
import AddTodo from "./component/AddTodo"
import Navbar from "./component/Navbar"
import Todo from "./component/Todo"

function App() {
let [edited,SetEditedItems]=useState()

  let dummyTodo=[
    {
     id:1,
     heading:"make notes",
     date:"12/20.2023",
     otherDetails:"combiflame zerodoll sp zentec dollo",
     category:"education"
    },   
    {
     id:2,
     heading:"take medicine",
     date:"12/20.2023",
     otherDetails:"combiflame zerodoll sp zentec dollo",
     category:"education"
    },   
    {
     id:3,
     heading:"math exam",
     date:"12/20.2023",
     otherDetails:"combiflame zerodoll sp zentec dollo",
     category:"education"
    },   
    {
     id:4,
     heading:"science syllabus",
     date:"12/20.2023",
     otherDetails:"combiflame zerodoll sp zentec dollo",
     category:"education"
    },   
   ]

let [show,setShow]=useState("Todo");
let [todoitems,setTodoItems]=useState(dummyTodo)
function handleShowMain(value){
     setShow(value)
}


function hanldeEdit(editid){

  let findWhichItemEdited=todoitems.find((item)=>{
    return item.id==editid;
  })

  setShow("Todo")
  console.log(findWhichItemEdited);
SetEditedItems(findWhichItemEdited);

}



function handleDelete(id){


let findWhichItemDelete=todoitems.filter((item)=>{
  return item.id!==id
})
setTodoItems(findWhichItemDelete)

}


function addNewItems(items){

let newTodoItems=[...todoitems,items]
setTodoItems(newTodoItems)
}



  return (
    <div className="">
<Navbar handleShowMain={handleShowMain}/>
{show=="Todo" ?  <AddTodo addNewItems={addNewItems} edited={edited}/> :<Todo todoitems={todoitems} hanldeEdit={hanldeEdit} handleDelete={handleDelete}/> 

}

    </div>
  )
}

export default App
