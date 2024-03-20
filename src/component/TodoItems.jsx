import React from 'react'

const TodoItems = ({item,handleDelete,hanldeEdit,handleDetailsPage}) => {

  function handleEditItems(){
    hanldeEdit(item.id)
  }


function handleDeleteItem(){
    
    handleDelete(item.id)
}


function handleDetailsItem(){
  console.log(item);
  handleDetailsPage(item,true)
}

    return (
    <div className='bg-dark col-xl-2 shadow-lg p-3 col-md-3 col-sm-4 col-11  m-1 text-white'>
<div className="icon d-flex justify-content-end">
    <button className='btn btn-sm btn-primary' onClick={handleEditItems}>E</button>
    <button className='btn btn-sm btn-danger' onClick={handleDeleteItem}>D</button>
</div>
      <h5>{item.heading}</h5>
      <h6>{item.date}</h6>
      <button className='btn btn-primary btn-sm'>{item.category}</button>
      <button className='btn btn-danger btn-sm' onClick={handleDetailsItem}>Details</button>
    </div>
  )
}

export default TodoItems
