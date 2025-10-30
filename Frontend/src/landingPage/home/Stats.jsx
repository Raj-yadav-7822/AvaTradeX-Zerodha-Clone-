import React from 'react';

import './Stats.css'; // Custom CSS

const Stats = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        {/* Left Column - Text Content (छोटी स्क्रीन पर पहले दिखेगा) */}
        <div className="col-lg-6 col-md-12 text-start px-lg-5 order-1 order-lg-1">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4 " style={{ color: "rgb(66, 66, 66)"}} >Customer-first always</h2>
          <p className="text-muted mb-4">
          That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4"  style={{ color: "rgb(66, 66, 66)"}}>No spam or gimmicks</h2>
          <p className="text-muted mb-4">
          No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4"  style={{ color: "rgb(66, 66, 66)"}}>The Zerodha universe</h2>
          <p className="text-muted mb-4">
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4"  style={{ color: "rgb(66, 66, 66)"}}>Do better with money</h2>
          <p className="text-muted ">
            With initiatives like <a href="#" className="text-decoration-none">Nudge</a> and  
            <a href="#" className="text-decoration-none"> Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right Column - Image (छोटी स्क्रीन पर नीचे आएगी) */}
        <div className="col-lg-6 col-md-12 text-start mt-4 order-2 order-lg-2">
          <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid stats-img" />
          <div className="mt-4 text-center">
            <a href="#" style={{textDecoration:"none"}} className=" mx-4">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#" style={{textDecoration:"none"}} className=" mx-4">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
