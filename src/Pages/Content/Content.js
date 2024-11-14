import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <main className="main">
      <div className="main-left">
        <div className="left-one">
          <h4>Sell on 1mdm.com</h4>
          <h1>
            Reach millions of B2B <br />
            buyers globally
          </h1>
        </div>
        <div className="left-two">
          <a href="#">Start selling</a>
          <a href="#">Chat with consultant</a>
        </div>
      </div>

      <div className="main-right">
        <div>
          <h3>26,000,000</h3>
          <p>active buyers globally</p>
        </div>
        <div>
          <h3>400,000</h3>
          <p>product inquiries daily</p>
        </div>
        <div>
          <h3>200</h3>
          <p>countries and regions represented</p>
        </div>
      </div>
    </main>
  );
};

export default Content;
