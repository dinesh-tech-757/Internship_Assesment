import React from "react";
import "./Content2.css";
import logozz from "../../assets/logo-2.png";

const Content2 = () => {
  return (
    <>
      <section className="content2">
        <div className="header">
          <h1>Grow your business with a suite of tools built for you</h1>
        </div>
      </section>
      <section className="flop">
        <div className="link">
          <ul>
            <li className="active">Custom storefront</li>
            <li>Advertising tools</li>
            <li>Data and analytics</li>
            <li>Customers support</li>
          </ul>
        </div>

        <div className="cnt">
          <h1>Set up a store that showcases your brand</h1>
          <p>
            Differentiate yourself from the competition with a full store
            dedicated to your products- no coding or design skills necessary!
          </p>
        </div>

        <div className="img">
          <img src={logozz} alt="" />
        </div>
      </section>
    </>
  );
};
export default Content2;
