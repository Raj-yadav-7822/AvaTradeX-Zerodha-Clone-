import React from 'react'

const Pricing = () => {
  return (
    <div className="container mt-4 ">
    <div className="row align-items-center text-center text-md-start">
      
      {/* Left Section */}
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h1 className="mb-3">Unbeatable pricing</h1>
        <p>
          We pioneered the concept of discount broking and price transparency in India. 
          Flat fees and no hidden charges.
        </p>
        <a style={{ textDecoration: "none" }} href="#">
          See pricing &nbsp; <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      {/* Empty Column for spacing in large screens */}
      <div className="col-lg-2 d-none d-lg-block"></div>

      {/* Right Section - Pricing Boxes */}
      <div className="col-lg-6 col-md-6 mb-5">
        <div className="row g-3">
          
          {/* Card 1 */}
          <div className="col-12 col-sm-6 text-center">
            <div className="p-4 border rounded-3">
              <h1 className="mb-3 ">₹0</h1>
              <p>Free equity delivery </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 text-center">
            <div className="p-4 border rounded-3">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Pricing
