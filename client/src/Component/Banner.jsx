import React from "react";
import Books from "../assets/314.jpg";

const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>
            Hello, welcome here to learn something
            <span className="fw-bold" style={{ color: "#FF5733" }}>
              {" "}
              new everyday!!!
            </span>
          </h1>
          <p className="mt-4">
            The Books App is your ultimate reading companion, offering a vast
            collection of books across different genres, including fiction,
            non-fiction, self-help, educational, and more. Whether you're a
            casual reader or a book enthusiast, this app provides an immersive
            reading experience with features like offline reading, bookmarks,
            dark mode, font customization, and personalized recommendations.
            <br />
            Transform your reading habits with the Books App – explore, read,
            and grow your knowledge effortlessly! 📖✨
          </p>

          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button className="btn btn-warning mt-4 fw-bold">Send</button>
        </div>
        <div className="col-md-6">
          <img
            src={Books}
            alt="bookImg"
            className="img-fluid "
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
