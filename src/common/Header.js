import React from "react";

function Header() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="icecream.html">
                  Icecream
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="login_bt">
                <a href="#">
                  Login{" "}
                  <span style={{ color: "#222222" }}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
              <div className="fa fa-search form-control-feedback"></div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
