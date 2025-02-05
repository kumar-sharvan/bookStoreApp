import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const Footer = () => {
  const { theme } = useContext(ThemeContext); // Access theme

  return (
    <div className={`footer-container ${theme}`}>
      <footer className={`text-center bg-body-tertiary ${theme}`}>
        <div className="container pt-4">
          <section className="mb-4">
            {/* Social Media Links */}
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </section>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            <h2>Made with ❤️ By Sharvan</h2>© {new Date().getFullYear()}{" "}
            Copyright:
            <a className="text-body" href="https://codingdoubts.in/">
              codingdoubts.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
