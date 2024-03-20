import React, { useState } from 'react'
import TodoItems from './TodoItems';
import DetailsPage from './DetailsPage';

const Todo = ({ todoitems, handleDelete, hanldeEdit }) => {
  let [isDetailshow, setDetailsShow] = useState(false);
let [detailsItem,setDetails]=useState();


function handleDetailsPage(item,status){
  setDetailsShow(status)
setDetails(item);

}

  return (
    <div className='container-fluid todo-container'>
      
      {isDetailshow ?   <div className="row  p-5 d-flex justify-content-center align-content-center bg-danger text-white ">
        <div className="col-xl-7 px-5 col-md-8 col-sm-10 col-12 text-end fw-bold display-6 p-2 bg-dark" onClick={()=>setDetailsShow(false)}>❎</div>
        <DetailsPage  detailsItem={detailsItem} />
      </div> :
      <div className="row d-flex justify-content-between ">

      {todoitems.map((item, index) => {
        return <TodoItems item={item} key={index} handleDelete={handleDelete} hanldeEdit={hanldeEdit} handleDetailsPage={handleDetailsPage} />
      })
      
      }
      </div> 
      

      }
      

    </div>
  )
}

export default Todo
