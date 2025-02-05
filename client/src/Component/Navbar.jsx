import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext
import "./Navbar.css";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate(); // React Router DOM hook for navigation

  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme

  return (
    <div className="navbar-container">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary position-sticky"
        style={{ top: "0", zIndex: "1020" }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            Bookstore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" role="button">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                type="button"
                className="btn btn-light me-2"
                onClick={toggleTheme}
                style={{ display: "flex", alignItems: "center" }}
              >
                {theme === "light" ? (
                  <i className="bi bi-moon-fill"></i>
                ) : (
                  <i className="bi bi-sun-fill"></i>
                )}
              </button>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>

              {authUser ? (
                <Logout />
              ) : (
                <button
                  className="btn btn-dark fw-bold ms-2"
                  type="button"
                  onClick={() => navigate("/login")} // Navigate to Login
                >
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
