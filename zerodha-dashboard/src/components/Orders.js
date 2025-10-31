import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🟢 Deployed backend base URL
  const BASE_URL = "https://avatradex-zerodha-clone.onrender.com";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("📦 Fetching all orders from backend...");

        const res = await axios.get(`${BASE_URL}/allOrders`, {
          withCredentials: true,
        });

        if (res.status === 200) {
          setOrders(res.data);
          console.log("✅ Orders fetched successfully:", res.data);
        } else {
          throw new Error("Server returned unexpected status: " + res.status);
        }
      } catch (err) {
        console.error("❌ Error fetching orders:", err);
        setError("Failed to load orders. Please try again.");
      } finally {
        // थोड़ा delay ताकि UI smooth लगे
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="loading">Loading orders...</p>;
  if (error) return <p className="error">{error}</p>;

  if (!orders || orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>No orders found yet.</p>
          <Link to={"/"} className="btn">
            Get Started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h2>All Orders</h2>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Stock Name</th>
              <th>Quantity</th>
              <th>Mode</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.name || "Unnamed Stock"}</td>
                <td>{order.qty || 0}</td>
                <td>{order.mode || "N/A"}</td>
                <td>{Number(order.price || 0).toFixed(2)}</td>
                <td>{Number(order.price * order.qty || 0).toFixed(2)}</td>
                <td>
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
