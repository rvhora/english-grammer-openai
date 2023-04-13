import React from "react";
//import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppContext";

const Navbar = () => {
  const { darkTheme, changeTheme } = useGlobalContext();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo} width="50" alt="app_logo" /> */}
          <span className="logo-span">English Grammer Check</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li> */}
          </ul>
          <div className="d-flex">
            <div className="theme-changer">
              <i
                className={`${darkTheme ? "fas fa-sun" : "far fa-moon"}`}
                onClick={changeTheme}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
