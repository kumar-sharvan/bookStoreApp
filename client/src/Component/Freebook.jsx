import React from "react";
import free from "../assets/free.jpg";

const Freebook = () => {
  return (
    <div className="container mb-3">
      <h3 className="fw-bold">Free Offered Books</h3>
      <p className="fw-bold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        numquam consectetur perspiciatis esse necessitatibus soluta neque
        officia, quia cupiditate qui rerum doloribus odit corporis, molestiae
        recusandae laboriosam? Sapiente, nihil voluptatem?
      </p>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              {[...Array(3)].map((_, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <img src={free} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        Book {index + 1}{" "}
                        <span className="badge rounded-pill bg-warning text-dark">
                          Free
                        </span>
                      </h5>
                      <p className="card-text">
                        This is a card with supporting text below as a natural
                        lead-in to additional content.
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="badge rounded-pill bg-dark">₹0</span>
                      <button className="btn btn-primary btn-sm float-end">
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              {[...Array(3)].map((_, index) => (
                <div className="col-md-4" key={index + 3}>
                  <div className="card">
                    <img src={free} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        Book {index + 4}{" "}
                        <span className="badge rounded-pill bg-warning text-dark">
                          Free
                        </span>
                      </h5>
                      <p className="card-text">
                        This is a card with supporting text below as a natural
                        lead-in to additional content.
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="badge rounded-pill bg-dark">₹0</span>
                      <button className="btn btn-primary btn-sm float-end">
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Add more slides as needed */}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Freebook;
