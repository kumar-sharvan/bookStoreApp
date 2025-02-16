import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { useAuth } from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Router>
        <div>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route
              path="/courses"
              element={authUser ? <Courses/> : <Navigate to="/signup"/>}
            ></Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
