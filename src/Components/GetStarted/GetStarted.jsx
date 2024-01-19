import React from "react";
import "./GetStarted.css";

export  const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with HavenEstate</span>
          <span className="secondaryText">
            Subscribe to discover exclusive prices at HavenEstate. Find your
            dream residence today!
          </span>
          <button className="button">
            <a href="mailto:sikhwethamulanga@gmail.com">Get started</a>
          </button>
        </div>
      </div>
    </section>
  );
};
