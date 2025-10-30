import React from 'react';

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        {/* Image Section */}
        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 order-1 order-lg-2">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-lg-5 offset-lg-1 order-2 order-lg-1">
          <h2 className="text-muted mb-3">{productName}</h2>
          <p className="text-secondary mb-4">{productDescription}</p>

          <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
            <a href={learnMore} className="text-decoration-none">
              Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
