import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  // 🔹 State for form data, error, loading
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Vite environment variables (from Vercel)
  const API_URL = import.meta.env.VITE_API_URL;
  const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("🟡 Sending login request to:", `${API_URL}/login`);

      // 🔸 First request (handle Render sleep)
      let response;
      try {
        response = await axios.post(`${API_URL}/login`, formData, {
          withCredentials: true,
        });
      } catch (firstError) {
        console.warn("⚠️ First request failed (maybe Render cold start), retrying...");
        // Retry once after short delay
        await new Promise((r) => setTimeout(r, 2000));
        response = await axios.post(`${API_URL}/login`, formData, {
          withCredentials: true,
        });
      }

      console.log("✅ Login successful:", response.data);

      // 💾 Save token + user info in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // 🌐 Redirect to deployed dashboard (from .env)
      window.location.href = DASHBOARD_URL;
    } catch (err) {
      console.error("❌ Login error:", err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
