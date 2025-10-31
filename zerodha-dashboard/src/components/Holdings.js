import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import BuyActionWindow from "./BuyActionWindow";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  // 🟢 Backend Base URL (Render)
  const BASE_URL = "https://avatradex-zerodha-clone.onrender.com";

  //  Fetch holdings from backend
  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/allHoldings`, {
        withCredentials: true,
      });
      setAllHoldings(res.data || []);
    } catch (err) {
      console.error("Error fetching holdings:", err);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  //  Graph data
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

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />

      {/*  Show Buy/Sell window */}
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
