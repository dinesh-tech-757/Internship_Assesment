import React from "react";
import "./Footer.css";
import img from "../../assets/logo-white.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div>
          <img src={img} alt="" />
          <p>One Medical Devices</p>
          <p>Market Place</p>
        </div>

        <div>
          <h3>Platform</h3>
          <ul>
            <li>sell on 1MDM</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Brands</li>
          </ul>
        </div>

        <div>
          <h3>Press Room</h3>
          <li>Images & B-roll</li>
          <h3>Policies</h3>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Delivery Information</li>
        </div>

        <div>
          <h3>Reach Us</h3>
          <li>Corporate Information</li>
          <li>ContactUs</li>
        </div>
      </section>
      <footer className="copyr">
        <p>&copy; 2024 1MDM ✔ by SuperLabs</p>
      </footer>
    </>
  );
};

export default Footer;
