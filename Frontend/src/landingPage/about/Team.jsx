import React from 'react'

const Team = () => {
  return (
    <div className='container'>
      <div className="row mt-5 mb-5">
        <h1 className='fs-1 text-center'>
          People
        </h1>
        <div className="col-12 col-md-6 p-3 text-center">
          <img src="media/images/nithinKamath.jpg" alt="" style={{ borderRadius: "100%", width: "50%" }} />
          <h5 className='mt-4'>Rishi Yadav</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-12 mt-4 col-md-6 p-3 mt-3 text-muted">
          <p>Rishi Yadav bootstrapped and founded AvaTradeX in 2022 to overcome the hurdles he faced during his decade long stint as a trader. Today, AvaTradeX has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href=""> Homepage </a>/
            <a href="">TradingQnA</a> / <a href="">Twitter</a> </p>
        </div>
      </div>
    </div>
  )
}

export default Team