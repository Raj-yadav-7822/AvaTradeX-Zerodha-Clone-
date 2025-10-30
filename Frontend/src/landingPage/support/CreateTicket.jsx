import React from "react";
import "./CreateTicket.css";

const CreateTicket = () => {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 mb-5 anchor">
          <h3>To create a ticket, select a relevant topic</h3>

          <div className="col-12 col-md-4 mt-4">
            <h5>
              <i className="fa-solid fa-circle-plus"></i> Account Opening
            </h5>
            <a href="">Resident individual</a> <br />
            <a href="">Minor</a> <br />
            <a href="">Non Resident Indian (NRI)</a> <br />
            <a href="">Company, Partnership, HUF and LLP</a> <br />
            <a href="">Glossary</a>
          </div>

          <div className="col-12 col-md-4 mt-4">
            <h5>
              <i className="fa-solid fa-user"></i> Your AvaTradeX Account
            </h5>
            <a href="">Your Profile</a> <br />
            <a href="">Account modification</a> <br />
            <a href="">
              Client Master Report (CMR) and Depository Participant (DP)
            </a> <br />
            <a href="">Nomination</a> <br />
            <a href="">Transfer and conversion of securities</a>
          </div>

          <div className="col-12 col-md-4 mt-4">
            <h5>
              <i className="fa-solid fa-grip-lines-vertical"></i> Kite
            </h5>
            <a href="">IPO</a> <br />
            <a href="">Trading FAQs</a> <br />
            <a href="">Margin Trading Facility (MTF) and Margins</a> <br />
            <a href="">Charts and orders</a> <br />
            <a href="">Alerts and Nudges</a> <br />
            <a href="">General</a>
          </div>

          <div className="col-12 col-md-4 mt-4">
            <h5>
              <i className="fa-solid fa-square"></i> Funds
            </h5>
            <a href="">Add money</a> <br />
            <a href="">Withdraw money</a> <br />
            <a href="">Add bank accounts</a> <br />
            <a href="">eMandates</a>
          </div>

          <div className="col-12 col-md-4 mt-4">
            <h5>
              <i className="fa-solid fa-circle-notch"></i> Console
            </h5>
            <a href="">Portfolio</a> <br />
            <a href="">Corporate actions</a> <br />
            <a href="">Funds statement</a> <br />
            <a href="">Reports</a> <br />
            <a href="">Profile</a> <br />
            <a href="">Segments</a>
          </div>

          <div className="col-12 col-md-4 mt-4">
            <h5>
              <i className="fa-solid fa-coins"></i> Coin
            </h5>
            <a href="">Understanding mutual funds and Coin</a> <br />
            <a href="">Coin app</a> <br />
            <a href="">Coin web</a> <br />
            <a href="">Transactions and reports</a> <br />
            <a href="">National Pension Scheme (NPS)</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
