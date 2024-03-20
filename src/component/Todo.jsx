import React from 'react'
import TodoItems from './TodoItems';

const Todo = ({todoitems,handleDelete,hanldeEdit}) => {



  return (
    <div className='container-fluid todo-container'>
      <div className="row d-flex justify-content-between ">

{todoitems.map((item,index)=>{
  return <TodoItems  item={item} key={index} handleDelete={handleDelete} hanldeEdit={hanldeEdit}/>  
})

}
</div>

    </div>
  )
}

export default Todo
