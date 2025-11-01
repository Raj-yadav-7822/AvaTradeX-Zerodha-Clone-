import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import BuyActionWindow from "./BuyActionWindow";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  // ✅ Environment variable (for CRA)
 const BASE_URL = process.env.REACT_APP_API_URL || "https://avatradex-zerodha-clone.onrender.com"; 

  // 🔹 Fetch holdings from backend
  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/allHoldings`, {
        withCredentials: true,
      });
      setAllHoldings(res.data || []);
    } catch (err) {
      console.error("❌ Error fetching holdings:", err);
    }
  };

  // 🔁 Load holdings on mount
  useEffect(() => {
    fetchHoldings();
  }, []);

  // 📊 Graph data
  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const avg = stock.avg || 0;
              const price = stock.price || 0;
              const qty = stock.qty || 0;

              const curValue = price * qty;
              const pnl = curValue - avg * qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net || "-"}</td>
                  <td className={dayClass}>{stock.day || "-"}</td>
                  <td>
                    <button
                      className="btn btn-blue"
                      onClick={() => setSelectedStock(stock.name)}
                    >
                      Trade
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <VerticalGraph data={data} />

      {selectedStock && (
        <BuyActionWindow
          uid={selectedStock}
          refreshHoldings={() => {
            fetchHoldings();
            setSelectedStock(null);
          }}
          onCancel={() => setSelectedStock(null)}
        />
      )}
    </>
  );
};

export default Holdings;
