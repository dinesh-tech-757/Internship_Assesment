import React from "react";
import "./Banner.css";
import profile from "../../assets/profile.webp";

const Banner = () => {
  return (
    <>
      <section className="hii">
        <div className="head">
          <h1>Success stories from 1mdm.com sellers</h1>
        </div>
        <div className="slide">
          <p>
            LTA International Global Services LLC is a Florida-based export
            management company that sells top Medical device products from major
            US brands to importers and distributors around the globe. Founded in
            1994 by Loyd, LTA's long-standing expertise in logistics and pricing
            has made it one of the most successful international trade
            businesses in the USA.
          </p>
          <img src={profile} alt="" />
        </div>
      </section>
      <footer className="foot">
        <div className="head">
          <h1>Ready to Grow Your Business?</h1>
        </div>
        <div className="btn">
          <button>Start selling</button>
          <button>Chat with consultant</button>
        </div>
      </footer>
    </>
  );
};

export default Banner;
