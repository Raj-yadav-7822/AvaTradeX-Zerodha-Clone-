import React, { useState } from "react";
import "./ChargesTable.css"
const ChargesTable = () => {
 
  const [activeTab, setActiveTab] = useState("Equity");

  const renderTable = () => {
    switch (activeTab) {
      case "Equity":
        return (
          <table className="table table-bordered text-center align-middle equity-table">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&amp;O - Futures</th>
                <th>F&amp;O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Brokerage</th>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <th>STT/CTT</th>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <ul className="list-unstyled m-0">
                    <li>0.125% of intrinsic value (buy & exercised)</li>
                    <li>0.1% on sell side (premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Transaction charges</th>
                <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                <td>NSE: 0.00173%<br />BSE: 0%</td>
                <td>NSE: 0.03503%<br />BSE: 0.0325%</td>
              </tr>
              <tr>
                <th>GST</th>
                <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <th>SEBI charges</th>
                <td colSpan="4">₹10 / crore</td>
              </tr>
              <tr>
                <th>Stamp charges</th>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );
      case "Currency":
        return (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Brokerage</th>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <th>STT/CTT</th>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <th>Transaction charges</th>
                <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                <td>NSE: 0.0311%<br />BSE: 0.001%</td>
              </tr>
              <tr>
                <th>GST</th>
                <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <th>SEBI charges</th>
                <td colSpan="2">₹10 / crore</td>
              </tr>
              <tr>
                <th>Stamp charges</th>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );
      case "Commodity":
        return (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Brokerage</th>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <th>STT/CTT</th>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <th>Transaction charges</th>
                <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                <td>MCX: 0.0418%<br />NSE: 0.001%</td>
              </tr>
              <tr>
                <th>GST</th>
                <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <th>SEBI charges</th>
                <td>
                  <strong>Agri:</strong> ₹1 / crore<br />
                  <strong>Non-agri:</strong> ₹10 / crore
                </td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <th>Stamp charges</th>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs mb-3">
        {["Equity", "Currency", "Commodity"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: "pointer" }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="table-responsive">{renderTable()}</div>
    </div>
  );
};

export default ChargesTable;
