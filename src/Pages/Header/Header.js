import React from "react";
import "./Header.css";
import logo from "../../assets/logo-1.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="top-left">
          <p>World's Largest Medical Equipment Market Place</p>
        </div>
        <div className="top-right">
          <a href="#">My account |</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>
      <div className="line">
        <hr />
      </div>

      <div className="navbar-2">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Sell on 1MDM</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
