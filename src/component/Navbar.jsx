import React, { useState } from 'react'

const Navbar = ({handleShowMain}) => {



  return (
    <div className='bg-dark text-white py-3 d-flex justify-content-around'>
<h3>      Todo-List-Application
</h3>
<div>

      <button className='btn btn-danger btn-lg' onClick={()=>handleShowMain("Todo")}>Add Task</button>
      <button className='btn btn-primary btn-lg' onClick={()=>handleShowMain("todo-form")}>Task</button>
</div>
    </div>
  )
}

export default Navbar
