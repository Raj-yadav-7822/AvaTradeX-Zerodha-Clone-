import React from 'react'
import './Award.css'
const Award = () => {
  return (
    <div className="container mt-5">
    <div className="row align-items-center">
      {/* Image Section */}
      <div className="col-lg-6 col-md-12 text-center">
        <img src="media/images/largestBroker.svg" alt="Largest Broker" className="img-fluid award-img" />
      </div>

      {/* Text & List Section */}
      <div className="col-lg-6 col-md-12 mt-4 mb-4">
        <h1>Largest stock broker in India</h1>
        <p className="mb-4 mt-4">
          2+ million Zerodha clients contribute to over 15% of all retail
          order volumes in India daily by trading and investing in:
        </p>

        {/* Lists in 2 Columns */}
        <div className="row">
          <div className="col-6">
            <ul >
              <li> <p>Futures and Options</p> </li>
              <li> <p> Commodity derivatives</p></li>
              <li> <p> Currency derivatives</p></li>
            </ul>
          </div>
          <div className="col-6">
            <ul >
              <li> <p>Stocks & IPOs</p> </li>
              <li> <p> Direct mutual funds</p></li>
              <li><p>Bonds and Govt. Securities</p> </li>
            </ul>
          </div>
        </div>

        {/* Press Logos Image */}
        <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid mt-4 press-logos" />
      </div>
    </div>
  </div>
  )
}

export default Award
