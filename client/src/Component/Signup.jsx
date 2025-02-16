import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        name,
        email,
        password,
      });
      if (response) {
        toast.success("User created successfully!", { position: "top-right" });
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="main-container bg-primary vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg p-4 w-50">
          <div className="card-body">
            <h1 className="text-center fw-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>

            <p className="text-center mt-3 text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
