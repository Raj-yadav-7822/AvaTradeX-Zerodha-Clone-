import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-4" id="supportWrapper">
            <h3 className="text-white">Support Portal</h3>
            <a href="" className="text-white text-decoration-underline">Track tickets</a>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 col-md-12 mb-5">
              <h3 className="text-white mb-4">Search for an answer or browse help topics to create a ticket</h3>
              <div className="search-box mb-4">
                <input 
                  type="text" 
                  placeholder="Eg: how do I activate F&O, why is my order getting rejected ..." 
                  className="form-control" 
                />
              </div>
              <div className="quick-links">
                <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;
                <a href="">Track segment activation</a><br /><br />
                <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
                <a href="">Kite user manual</a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-4 mt-5 mt-lg-0">
              <h3 className="text-white mb-3">Featured</h3>
              <ol className="text-white">
                <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                <li><a href="">Rights Entitlements listing in April 2025</a></li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
