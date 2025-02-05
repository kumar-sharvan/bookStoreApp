import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./Component/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/AuthProvider";

ReactDOM.render(
  // Outer Provider: AuthProvider
  <AuthProvider>
    {/* Inner Provider: ThemeProvider */}
    <ThemeProvider>
      {/* Main Application */}
      <App />
      {/* Toast Notifications */}
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById("root")
);
