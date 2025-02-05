import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">About Us</h1>
                <p className="card-text">
                  Welcome to our bookstore! At Book Haven, we believe that a
                  good book can change your life. Founded in 2025, our mission
                  is to provide a vast collection of books for all ages and
                  interests.
                </p>
                <p className="card-text">
                  Whether you’re looking for the latest bestseller, a timeless
                  classic, or a unique find, our shelves are filled with stories
                  that will inspire, entertain, and educate. We’re passionate
                  about reading, and we’re here to help you discover the perfect
                  book.
                </p>
                <p className="card-text">
                  Thank you for visiting our store. We look forward to sharing
                  our love of books with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
