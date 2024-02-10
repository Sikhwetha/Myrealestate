import React from "react";
import "./Services.css";
import inter from "../../Video/Inter.mp4";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="main">
        <video src={inter} autoPlay muted loop />
      </div>

      <div className="services-container">
        <header>
          <h1>TrendHomes</h1>
          <p>Your Premier Online Destination for Stylish Living Spaces</p>
        <Link to='/ourservices'>
        <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
        </Link>
        </header>
      </div>
    </div>
  );
};

export default Services;
