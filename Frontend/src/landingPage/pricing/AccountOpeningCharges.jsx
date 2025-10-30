import React from 'react';
import './AccountOpeningCharges.css';

const AccountOpeningCharges = () => {
  return (
    <div className="container mt-5">
      <h4 className="mb-4">Charges for account opening</h4>
      <table className="table table-bordered responsive-shrink">
        <thead className="table-light">
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountOpeningCharges;
