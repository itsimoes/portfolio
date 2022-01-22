import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" >
          <Typed
            className="typed-logo"
            strings={["Ítalo Simões"]}
            typeSpeed={40}
          />
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
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" smooth={true} to="home" href="#" >
                Home                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth={true} to="about" offset={-110} href="#" >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth={true} to="services" offset={-110} href="#" >
                My Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth={true} to="experience" offset={-110} href="#" >
                My Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth={true} to="portfolio" offset={-110 } href="#" >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth={true} to="contacts" offset={-110} href="#" >
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
