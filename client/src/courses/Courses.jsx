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
        console.log(response);
        setBook(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getBook();
  }, []);
  return (
    <>
      <Navbar />{" "}
      <div className="container my-5">
        <div>
          <h2 className="text-center ">
            We're provided some delighted books{" "}
            <span style={{ color: "#FF5733" }} className="fw-bold">
              Here
            </span>{" "}
            for you!
          </h2>
          <p className="text-center mt-3 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ab perspiciatis tempora quae praesentium laudantium provident
            reiciendis ullam! Ab consequatur at eius neque non facilis
            laboriosam voluptas aperiam ipsam inventore.
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn btn-danger d-block mb-5 m-auto fw-bold ">
              Back
            </button>
          </Link>
        </div>
        <div className="row">
          {book.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">
                    <strong>Price:</strong>{" "}
                    {item.price === 0 ? "Free" : `$${item.price}`}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {item.category}
                  </p>
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
