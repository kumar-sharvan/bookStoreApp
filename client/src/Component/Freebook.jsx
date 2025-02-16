import React from "react";
import free from "../assets/free.jpg";

const books = [
  {
    title: "The Great Gatsby",
    description:
      "A novel by F. Scott Fitzgerald about wealth, love, and the American Dream.",
    link: "https://www.google.com/search?q=The+Great+Gatsby+book",
  },
  {
    title: "Pride and Prejudice",
    description:
      "Jane Austen's timeless romance exploring love, class, and social expectations.",
    link: "https://www.google.com/search?q=Pride+and+Prejudice+book",
  },
  {
    title: "1984",
    description:
      "George Orwell's dystopian classic about surveillance, government control, and freedom.",
    link: "https://www.google.com/search?q=1984+book",
  },
  {
    title: "Moby Dick",
    description:
      "Herman Melville's tale of obsession and revenge against the legendary white whale.",
    link: "https://www.google.com/search?q=Moby+Dick+book",
  },
  {
    title: "To Kill a Mockingbird",
    description:
      "Harper Lee's novel about racial injustice in the Deep South, seen through a child's eyes.",
    link: "https://www.google.com/search?q=To+Kill+a+Mockingbird+book",
  },
  {
    title: "The Catcher in the Rye",
    description:
      "J.D. Salinger's novel about teenage rebellion and identity in a rapidly changing world.",
    link: "https://www.google.com/search?q=The+Catcher+in+the+Rye+book",
  },
];

const Freebook = () => {
  return (
    <div className="container mb-4">
      <h3 className="fw-bold text-center">📚 Free Books for Everyone!</h3>
      <p className="fw-bold text-center">
        Reading is a gateway to knowledge, imagination, and personal growth.
        Enjoy these free books and expand your knowledge!
      </p>

      <div className="row justify-content-center">
        {books.map((book, index) => (
          <div className="col-md-4 d-flex align-items-stretch mb-4" key={index}>
            <div className="card shadow-sm w-100">
              <img src={free} className="card-img-top" alt={book.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">
                  {book.title}{" "}
                  <span className="badge rounded-pill bg-warning text-dark">
                    Free
                  </span>
                </h5>
                <p className="card-text flex-grow-1">{book.description}</p>
              </div>
              <div className="card-footer bg-white">
                <span className="badge rounded-pill bg-dark">₹0</span>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm float-end"
                >
                  Read now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="fw-bold text-center mt-4">
        If you need more books, you can check: <br />
        📚{" "}
        <a
          href="https://www.gutenberg.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Gutenberg
        </a>{" "}
        (Free books in the public domain)
      </p>
    </div>
  );
};

export default Freebook;
