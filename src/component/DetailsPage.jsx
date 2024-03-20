import React from 'react'

const DetailsPage = ({detailsItem}) => {
    console.log("page",detailsItem);
    return (
        <>
          <div className="col-xl-7 px-5 col-md-8 col-sm-10 col-12  d-flex justify-content-between align-item-center p-2 bg-dark">
              <h3>Task Name:-</h3>
              <h5>{detailsItem.heading}</h5>         
          </div>
          <div className="col-xl-7 px-5 col-md-8 col-sm-10 col-12 d-flex justify-content-between align-item-center p-2 bg-dark">
              <h3>Task Date:-</h3>
              <h5>{detailsItem.date}</h5>         
          </div>
          <div className="col-xl-7 px-5 col-md-8 col-sm-10 col-12 d-flex justify-content-between align-item-center p-2 bg-dark">
              <h3>Category:-</h3>
              <h5>{detailsItem.category}</h5>         
          </div>
          <div className="col-xl-7 px-5 col-md-8 col-sm-10 col-12 d-flex justify-content-between align-item-center p-2 bg-dark">
              <h3>Details:-</h3>
              <h5>{detailsItem.otherDetails}</h5>         
          </div>
        </>
    
  )
}

export default DetailsPage


