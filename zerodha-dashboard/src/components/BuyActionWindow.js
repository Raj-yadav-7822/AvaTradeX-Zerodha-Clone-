import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, refreshHoldings }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  // ✅ Get backend base URL from .env (Render)
  const BASE_URL = import.meta.env.VITE_API_URL;

  // 🧠 Common function to handle Buy/Sell
  const handleOrder = async (mode) => {
    try {
      await axios.post(
        `${BASE_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode,
        },
        { withCredentials: true }
      );

      alert(`${mode} order placed successfully!`);

      // 🔄 Refresh holdings after successful order
      if (refreshHoldings) {
        refreshHoldings();
      }

      // Close popup
      closeBuyWindow();
    } catch (error) {
      console.error(`❌ Error placing ${mode} order:`, error);
      alert(
        error.response?.data?.message ||
          `Failed to place ${mode} order. Please try again.`
      );
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          {/* SELL button */}
          <button className="btn btn-red" onClick={() => handleOrder("SELL")}>
            Sell
          </button>

          {/* BUY button */}
          <button className="btn btn-blue" onClick={() => handleOrder("BUY")}>
            Buy
          </button>

          {/* Cancel button */}
          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
