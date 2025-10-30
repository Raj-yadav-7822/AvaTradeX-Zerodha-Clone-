import React from 'react'

const Hero = () => {

  return (
    <div className="container py-5">
    <div className="row text-center justify-content-center">
      {/* Hero Image - Responsive */}
      <div className="col-lg-8 col-md-10">
      <img  src="media/images/homeHero.png" alt="Hero Image" className="img-fluid mb-4 w-100 custom-hero-img" />
      </div>

      {/* Hero Text */}
      <div className="col-12">
        <h1 className="mt-3">Invest in everything</h1>
        <p className="text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button className="btn btn-primary fs-5 mt-3 px-4 py-2">
          Sign up for free
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero
