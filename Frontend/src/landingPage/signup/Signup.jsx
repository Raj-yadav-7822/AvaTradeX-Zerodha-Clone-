import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ Added for SPA navigation
import "./Signup.css";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  // 🧠 Input change handler
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // 🚀 Signup function
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/signup", data, {
        withCredentials: true,
      });

      alert(res.data.message || "Signup successful!");
      console.log("✅ User created:", res.data);

      // 🧭 Redirect to dashboard (React route)
      window.location.href = "http://localhost:3000/";
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
          <Link to="/login" className="signup-link">Login</Link> {/* ✅ Fixed */}
        </p>
      </div>
    </div>
  );
};

export default Signup;
