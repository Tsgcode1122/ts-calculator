// Home.jsx
import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDarkMode } from "./ DarkModeContext";
import downArrow from "../images/arrowcolor.png";
import "../styles.scss";
import "../hover.scss";
import useMoveUpDown from "../animation/useMoveUpDown";
import useBounceIn from "../animation/ useBounceIn";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
import Footer from "./Footer";

const Home = () => {
  useMoveUpDown(".down-arrow");
  useBottomToTopSwipe(".tsgup");
  useBottomToTopSwipe(".bounce-in");
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className={`home-container ${isDarkMode ? "dark-mode" : ""}`}>
        <h1 className="bounce-in">
          Visualize Your Project, Calculate Your Design Cost
        </h1>

        <div className="Cal-main">
          <ul className="cal-item">
            <h3>Choose a Design Service to Get Started</h3>
            <img src={downArrow} className="down-arrow" />
            <li className=" hvr-curl-top-right ">
              <Link to="/logo">Logo Design</Link>
            </li>
            <li className="hvr-curl-top-left">
              <Link to="/business-card">Business Card Design</Link>
            </li>
            <li className="hvr-curl-bottom-right">
              <Link to="/flyer">Flyer Design</Link>
            </li>
            <li className=" hvr-curl-bottom-left ">
              <Link to="/website">Website Design</Link>
            </li>
          </ul>
        </div>

        {/* Spinning box added here */}
        <div className="spin-box"></div>
        <div className="spin-box-2"></div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Home;
