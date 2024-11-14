import React from "react";
import "./PlayVideo.css";

const PlayVideo = () => {
  return (
    <main className="video-main">
      <div className="top">
        <p>
          1mdm.com is a leading ecommerce platform that <br />
          helps SMEs go global
        </p>
      </div>
      <div className="content">
        <div className="content-left">
          <iframe
            src="https://www.youtube.com/embed/TN7iJyc5Uks"
            title="YouTube video"
          ></iframe>
        </div>
        <div className="content-right">
          <p>Connect with millions of business buyers from around the world.</p>
          <p>
            Get the tools and know-how to build a successful ecommerce presence
            for your business.
          </p>
          <p>
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </p>
        </div>
      </div>

      <section className="banner">
        <h1>
          Largest number of products & categories of <br />
          medical devices on a single place - 1mdm.com
        </h1>
        <p>
          Connect with buyers worldwide for your product & start selling now.
        </p>
      </section>
    </main>
  );
};

export default PlayVideo;
