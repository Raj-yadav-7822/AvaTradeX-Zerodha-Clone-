import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The AvaTradeX Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        {/* Helper class to handle image responsiveness */}
        {[
          {
            src: "media/images/zerodhaFundhouse.png",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
          },
          {
            src: "media/images/sensibullLogo.svg",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
          },
          {
            src: "media/images/tijoriLogo.svg",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
          },
          {
            src: "media/images/streakLogo.png",
            text: "Systematic trading platform that allows you to create and backtest strategies without coding."
          },
          {
            src: "media/images/smallcaseLogo.png",
            text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
          },
          {
            src: "media/images/dittoLogo.png",
            text: "Personalized advice on life and health insurance. No spam and no mis-selling."
          },
        ].map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 p-3 mt-4" key={index}>
            <img
              src={item.src}
              alt=""
              className="img-fluid"
              style={{ width: "60%", maxWidth: "50%" }}
            />
            <p className="text-small text-muted mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary fs-5 px-4 py-2"
          style={{ width: "200px" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
