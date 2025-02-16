import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newError = {};
    // email validation
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Enter a valid email address.";
    }

    // password validation
    if (!formData.password.trim()) {
      newError.password = "Password is required";
    } else if (formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters long";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post("https://bookstoreapp-hi6p.onrender.com/user/login", {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("token", JSON.stringify(response.data.user));

        if (response.data) {
          toast.success(response.data.message, { autoClose: 1000 });

          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
        console.log(error);
      }
    }
  };

  return (
    <div className="main-container bg-light vh-100 d-flex justify-content-center align-items-center">
      <ToastContainer />
      <div className="card shadow-lg p-4 w-50">
        <div className="card-body">
          <h1 className="text-center fw-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {error.email && <div className="text-danger">{error.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="form-control"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {error.password && (
                <div className="text-danger">{error.password}</div>
              )}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-3 text-muted">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
