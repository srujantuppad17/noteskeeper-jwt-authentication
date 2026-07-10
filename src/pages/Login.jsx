import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  BookOpen,
} from "lucide-react";

const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        "http://localhost:4005/api/v1/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      navigate("/");

    } catch (err) {

      alert(
        err.response?.data?.message || "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* LEFT SIDE */}

        <div className="auth-left">

          <div className="auth-logo">

            <BookOpen
size={90}
color="white"
strokeWidth={2.3}
/>

          </div>

          <h1>NOTES KEEPER</h1>

          <p className="tagline">
  Your Notes. Anytime. Anywhere.
</p>

         <div className="feature">
🔒 Secure JWT Authentication
</div>

<div className="feature">
⚡ Lightning Fast Notes
</div>

<div className="feature">
☁ Cloud Powered Storage
</div>

        </div>

        {/* RIGHT SIDE */}

        <div className="auth-right">

          <h2>Welcome Back</h2>

          <p className="auth-subtitle">
            Login to continue
          </p>

          <form onSubmit={handleSubmit}>

            <div className="auth-input-box">

              <Mail
                className="auth-input-icon"
                size={20}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="auth-input-box">

              <Lock
  className="auth-input-icon"
  size={20}
/>

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="auth-eye-btn"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >

                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

              </button>

            </div>

            <button
              className="auth-login-btn"
              type="submit"
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>
                        <div className="auth-bottom-link">
              Don't have an account?{" "}
              <Link to="/signup">
                Sign Up
              </Link>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;