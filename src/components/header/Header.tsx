import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import logo from "../../assets/images/logo/q_logo.png";
export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-custom sticky-dark"
        id="navbar-sticky"
      >
        <div className="container">
          <a className="logo text-uppercase" href="#">
            <img src={logo} alt="" className="logo-image" />
          </a>

          {/* <h5 className="logo-title">QUANTALIUM</h5> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
              <li className="nav-item dropdown">
                {/* <a
                  href="https://web.testdrvsc.com/"
                  target="_blank"
                  className="nav-link"
                >
                  Products
                </a> */}
              </li>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      target="_blank"
                      href="https://web.testdrvsc.com/"
                    >
                      Driving School Cloud
                    </a>
                  </li>
                </ul>
              </div>
              {/* <li className="nav-item">
                <a href="/#about" className="nav-link">
                  About Us
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a href="/#features" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="/#contact" className="nav-link">
                  Contact Us
                </a>
              </li> */}
            </ul>
            <ul className="navbar-nav navbar-center text-center mb-2 mt-2">
              <li className="nav-item">
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
