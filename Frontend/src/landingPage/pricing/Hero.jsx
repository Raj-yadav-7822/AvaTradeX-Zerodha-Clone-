import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <>

    <div className="container text-center mt-5 mb-5"> 
    <div className='m-5 mb-4'>

        <h1 className='mt-5 mb-4 ' style={{fontSize:"45px",fontWeight:"500"}}>Charges</h1>
        <p className='fs-5' style={{color:"rgb(155, 155, 155)"}}> List of all charges and taxes</p>
        </div>
    </div>
  {/*  */}
  <div className="container custom-container">
  <div className="row p-4 mt-5">
    <div className="col-12 col-md-4 p-4 text-center">
      <img
        src="media/images/pricingEquity.svg"
        alt=""
        className="img-fluid custom-img"
      />
      <h3 className="mt-3">Free equity delivery</h3>
      <p>
        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0
        brokerage.
      </p>
    </div>

    <div className="col-12 col-md-4 p-4 text-center">
      <img
        src="media/images/intradayTrades.svg"
        alt=""
        className="img-fluid custom-img"
      />
      <h3 className="mt-3">Intraday and F&O trades</h3>
      <p>
        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday
        trades across equity, currency, and commodity trades. Flat ₹20 on all
        option trades.
      </p>
    </div>

    <div className="col-12 col-md-4 p-4 text-center">
      <img
        src="media/images/pricingEquity.svg"
        alt=""
        className="img-fluid custom-img"
      />
      <h3 className="mt-3">Free direct MF</h3>
      <p>
        All direct mutual fund investments are absolutely free — ₹ 0 commissions
        & DP charges.
      </p>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero
