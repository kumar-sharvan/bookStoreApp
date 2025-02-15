import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import createRoot from React 18
import App from "./App";
import { ThemeProvider } from "./Component/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/AuthProvider";

// ✅ Create root and render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ThemeProvider>
      <App />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  </AuthProvider>
);
