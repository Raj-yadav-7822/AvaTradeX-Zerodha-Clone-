import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  // 🧠 State to hold form data
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  // ✅ Backend URL (fixed one — Render app ke actual domain)
  // Example: const API_URL = "https://avatradex-zerodha-clone.onrender.com";
  // Replace this below URL with YOUR Render backend URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://avatradex-zerodha-clone.onrender.com";

  // 🧠 Input change handler
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // 🚀 Signup handler
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      console.log("🟢 Sending signup request to:", `${API_URL}/signup`);
      const res = await axios.post(`${API_URL}/signup`, data, {
        withCredentials: true,
      });

      alert(res.data.message || "Signup successful!");
      console.log("✅ User created:", res.data);

      // 🧭 Redirect to login page (after signup success)
      navigate("/login");
    } catch (error) {
      console.error("❌ Signup error:", error);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={data.email}
            onChange={handleChange}
            className="signup-input"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
            className="signup-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            className="signup-input"
            required
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
