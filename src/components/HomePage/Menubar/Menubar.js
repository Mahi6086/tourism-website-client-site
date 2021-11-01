import React from "react";
import "./Menubar.css";
import logo from "../../../images/logo-1.png";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";

const Menubar = () => {
  const { handleLogout, user } = useAuth();
  return (
    <div className="p-3 sticky-lg-top" style={{ backgroundColor: "#FAF5EE" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/home" className="nav-link">
              <div className="">
                <img src={logo} alt="" />
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto fs-4 ">
                <Link to="/tours" className="nav-link text-dark fw-bolder mt-3">
                  Tours
                </Link>

                <Link to="/about" className="nav-link text-dark fw-bolder mt-3">
                  About
                </Link>

                <Link
                  to="/contact"
                  className="nav-link text-dark fw-bolder mt-3"
                >
                  Contact
                </Link>

                {/*    <Link
                  to="/admin"
                  className="nav-link text-dark fw-bolder mt-3 me-2"
                >
                  <span className="">
                    <i className="fas fa-user-shield me-1"></i>
                  </span>
                  Admin
                </Link> */}
                {user.email && (
                  <Link
                    to="/admin"
                    className="nav-link text-dark fw-bolder mt-3 me-2"
                  >
                    <span className="">
                      <i className="fas fa-user-shield me-1"></i>
                    </span>
                    Admin
                  </Link>
                )}

                {user.email ? (
                  <div
                    className="pb-3"
                    style={{
                      backgroundColor: "tomato",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="btn text-dark btn-lg h-25 ms-1 fw-bolder fs-4"
                    >
                      logOut
                      <i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
                    </button>
                  </div>
                ) : (
                  <Link to="/register">
                    <div
                      className="pb-3 mt-1"
                      style={{
                        backgroundColor: "tomato",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      <button
                        type="button"
                        className="btn text-dark btn-lg  ms-1 fw-bolder fs-4 mt-2  h-25"
                      >
                        <i class="fas fa-user-plus text-dark me-2"></i>Register
                      </button>
                    </div>
                  </Link>
                )}
                <div
                  style={{ marginTop: "17px" }}
                  className="ms-2  d-flex justify-content-center align-items-center"
                >
                  <img
                    className="rounded rounded-circle w-25"
                    src={user.photoURL}
                    alt=""
                  />
                  <a
                    href="#login"
                    className=" text-dark fw-bolder text-decoration-none ms-2"
                  >
                    {user.displayName}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;
