import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm mx-3 mt-3"
      style={{
        background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
        borderRadius: "2rem",
        boxShadow: "0 4px 24px rgba(221,36,118,0.08)",
      }}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
          style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#fff",
            letterSpacing: "2px",
          }}
        >
          <span
            className="badge bg-light text-danger px-3 py-2"
            style={{ fontSize: "1.1rem", borderRadius: "1rem" }}
          >
            News-Portal
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link px-3 mx-2 ${
                  location.pathname === "/" ? "active fw-bold" : ""
                }`}
                style={{
                  color: "#fff",
                  borderRadius: "1rem",
                  transition: "all 0.3s ease",
                  ...(location.pathname === "/"
                    ? { backgroundColor: "rgba(255, 255, 255, 0.2)" }
                    : {
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }),
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link px-3 mx-2 ${
                  location.pathname === "/about" ? "active fw-bold" : ""
                }`}
                style={{
                  color: "#fff",
                  borderRadius: "1rem",
                  transition: "all 0.3s ease",
                  ...(location.pathname === "/about"
                    ? { backgroundColor: "rgba(255, 255, 255, 0.2)" }
                    : {
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }),
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link px-3 mx-2 ${
                  location.pathname === "/contact" ? "active fw-bold" : ""
                }`}
                style={{
                  color: "#fff",
                  borderRadius: "1rem",
                  transition: "all 0.3s ease",
                  ...(location.pathname === "/contact"
                    ? { backgroundColor: "rgba(255, 255, 255, 0.2)" }
                    : {
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }),
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
