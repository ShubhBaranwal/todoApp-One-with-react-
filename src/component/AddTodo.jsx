import React, { useRef, useState,useEffect } from 'react'

const AddTodo = ({addNewItems,edited}) => {
let [editedValue,setEditedValue]=useState(edited);
  
  let [categoryShow, setCategoryShow] = useState(false)

  let [category, setCotegory] = useState(["education", "family", "hospital", "doctor", "assignment", "exam", "company", "youtube", "social media", "password", "notes", "friend", "trawel", "contact", "vegitables", "fruits"]);


  

  let heading = useRef();
  let categoryInput=useRef();
  let dateTime=useRef();
  let description=useRef();

  useEffect(() => {
    if (editedValue) {
      heading.current.value = editedValue.heading;
      dateTime.current.value = editedValue.date;
      description.current.value = editedValue.otherDetails;
      categoryInput.current.value = editedValue.category;
    }
  }, [editedValue]);



  function handleChange() {
    setCategoryShow(true);
    let currentValue=categoryInput.current.value;

    
  }

function handelSendInCategory(e){
 categoryInput.current.value= e.target.value;

}

function handleSubmit() {
  let submittedData = {
    id: editedValue ? editedValue.id : Date.now(),
    heading: heading.current.value,
    date: dateTime.current.value,
    otherDetails: description.current.value,
    category: categoryInput.current.value
  };

  if (editedValue) {
    // Update existing item
    addNewItems(submittedData, true);
  } else {
    // Add new item
    addNewItems(submittedData);
  }
}



  


  return (
    <div className='p-5 container-fluid bg-primary h-100 p-5'>
      <div className='p-3 d-flex bg-dark w-100 h5 text-white shadow-lg flex-column gap-4  m-auto justify-content-center'>
        <div className="taskHeadingInput input d-flex flex-column gap-3">
          <label htmlFor="heading" className='text-center'>Task Heading:-</label>
          <input type="text" ref={heading} 
          placeholder='Enter Your Task Heading' className='shadow-lg w-75 m-auto py-2' />
        </div>
        <div className="taskdate input d-flex flex-column gap-3">
          <label htmlFor="heading" className='text-center'>Task Date:-</label>
          <input type="date" ref={dateTime} className='shadow-lg w-75 m-auto py-2' />
        </div>
        <div className="taskDescription input d-flex flex-column gap-3">
          <label htmlFor="heading" className='text-center'>Task Description:-</label>
          <textarea name="" ref={description} id="" placeholder='Enter Your Details' className='shadow-lg w-75 m-auto py-2'></textarea>
        </div>

        <div className="taskDescription input d-flex flex-column gap-3">
          <label htmlFor="heading" className='text-center'>Choose Category:-</label>
          <input type='text' onChange={handleChange} placeholder='Enter Your Details' ref={categoryInput} className='shadow-lg w-75 m-auto py-2' />
          {categoryShow ? <div className="categoryOption bg-white  text-danger m-auto d-flex flex-column w-75 p-2" >
            <div className="btn btn-dark btn-sm w-25 " onClick={() => { setCategoryShow(false) }}>%</div>
            {category.map((option, index) => {
              return <button key={index} className='m-1 btn btn-danger w-70' value={option} onClick={handelSendInCategory} >{option}</button>
            })

            }
          </div> : null


          }

        </div>

        <div className="taskDescription input d-flex flex-column gap-3">
        {editedValue ? (
            <button className='btn btn-warning shadow-lg w-75 m-auto py-2  fw-bolder' onClick={handleSubmit}>UPDATE</button>
          ) : (
            <button className='btn btn-warning shadow-lg w-75 m-auto py-2  fw-bolder' onClick={handleSubmit}>SUBMIT</button>
          )}        </div>


      </div>
    </div>
  )
}

export default AddTodo
