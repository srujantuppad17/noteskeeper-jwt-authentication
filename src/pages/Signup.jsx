import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4005/api/v1/auth/register",
        formData
      );

      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="blob blob1"></div>
<div className="blob blob2"></div>
<div className="blob blob3"></div>
      <div className="signup-card">

        {/* Left Side */}
        <div className="left-side">
          <h1>CREATE AN ACCOUNT 🚀</h1>

          <p>
            Welcome to your secure Notes application. Register to start
            managing your notes with JWT authentication.
          </p>

          <div className="feature">✅ Secure JWT Authentication</div>
          <div className="feature">✅ Password Encryption</div>
          <div className="feature">✅ Fast React Frontend</div>
          <div className="feature">✅ MongoDB Backend</div>
        </div>

        {/* Right Side */}
        <div className="right-side">
          <h2>Sign Up</h2>

          <p className="subtitle">
            Create a new account
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="signup-btn"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <div className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Signup;