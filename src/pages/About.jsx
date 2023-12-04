// About.jsx
import React, { useState, useEffect } from "react";
import blackabout from "../images/blackabout.jpg";
import whiteabout from "../images/whiteabout.jpg";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import Footer from "../component/Footer";

const About = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  useZoomInAnimation(".about-context");
  useZoomInAnimation(".about-show");
  useZoomInAnimation(".about-hide");
  return (
    <>
      <section className="about-section">
        <div className="about-context">
          <h1>About TS Calculator</h1>
          <p>
            The TS Calculator is a tool designed for customers to calculate the
            price based on their input. Whether you're planning a logo design,
            website development, or other services, our calculator helps you
            estimate the cost of your project.
          </p>
          <p>
            This is the About page content. Feel free to explore the features
            and benefits of our calculator to make informed decisions about your
            project requirements.
          </p>
        </div>
        <div className="about-img">
          <img src={blackabout} className="about-show" />
          <img src={whiteabout} className="about-hide" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
