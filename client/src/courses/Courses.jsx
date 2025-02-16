import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Courses = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:3000/book");
        const updatedBooks = response.data.map((item, index) => ({
          ...item,
          name: bookNames[index % bookNames.length], // Assign new book names
          title: bookDescriptions[index % bookDescriptions.length], // Assign descriptions
        }));
        setBook(updatedBooks);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getBook();
  }, []);

  const bookNames = [
    "The Power of Habit",
    "Atomic Habits",
    "Deep Work",
    "The 5 AM Club",
    "Mindset: The New Psychology of Success",
    "The Subtle Art of Not Giving a F*ck",
    "Think and Grow Rich",
    "Rich Dad Poor Dad",
    "The Psychology of Money",
  ];

  const bookDescriptions = [
    "Discover how habits shape our lives and how to break bad ones while forming good ones.",
    "A proven framework for making small, everyday improvements that lead to remarkable results.",
    "Master the ability to focus in a distracted world and produce high-quality work.",
    "Wake up early, transform your mornings, and maximize productivity with this life-changing routine.",
    "Learn how your mindset affects success and how to cultivate a growth-oriented attitude.",
    "Explore a refreshing approach to personal growth by focusing on what truly matters.",
    "One of the most influential books on wealth-building and achieving financial independence.",
    "A must-read financial literacy book teaching the difference between assets and liabilities.",
    "Understand the behavioral aspects of money and how to make smart financial decisions.",
  ];

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div>
          <h2 className="text-center">
            Explore our latest book collection{" "}
            <span style={{ color: "#FF5733" }} className="fw-bold">
              Here
            </span>
          </h2>
          <p className="text-center mt-3 mb-3">
            📚 <strong>Find the Best Books for Growth</strong> 📚 <br />
            Dive into these insightful books, covering topics like productivity,
            success, mindset, and financial literacy.
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn btn-danger d-block mb-5 m-auto fw-bold">
              Back
            </button>
          </Link>
        </div>

        <div className="row">
          {book.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm" style={{ minHeight: "450px" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">
                    <strong>Price:</strong>{" "}
                    {item.price === 0 ? "Free" : `₹${item.price}`}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {item.category}
                  </p>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      item.name
                    )}+book`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success mt-auto"
                  >
                    View on Google Books
                  </a>
                </div>
                <div className="card-footer">
                  <span className="badge rounded-pill bg-dark">
                    ₹{item.price}
                  </span>
                  <button className="btn btn-primary btn-sm float-end">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
