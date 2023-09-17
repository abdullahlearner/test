import React from "react";
import img4 from "../images/slider/img-4.png";

function Slider() {
  return (
    <section className="hero hero-style-4">
      <div className="hero-slider">
        <div className="slide">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 col-md-7 slide-caption">
                <div className="slide-top">
                  <span>Let’s Know Islam</span>
                </div>
                <div className="slide-title">
                  <h2>Ibrahim Academy Online</h2>
                </div>
                <div className="slide-subtitle">
                  <p>
                    We are the best Educational Organization. Let’s know about
                    Islam <br /> And the holy Quran!
                  </p>
                </div>
                <div className="btns">
                  <a href="about.html" className="theme-btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-vec">
            <img src={img4} alt="Ibrahim Academy Logo" />
            <div className="right-border">
              <div className="right-icon">
                <i className="fi flaticon-quran"></i>
              </div>
              <div className="right-icon">
                <i className="fi flaticon-taj-mahal-1"></i>
              </div>
              <div className="right-icon">
                <i className="fi flaticon-allah-word"></i>
              </div>
              <div className="right-icon">
                <i className="fi flaticon-muhammad-word"></i>
              </div>
              <div className="right-icon">
                <i className="fi flaticon-prayer"></i>
              </div>
              <div className="right-icon">
                <i className="fi flaticon-business-and-finance"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
