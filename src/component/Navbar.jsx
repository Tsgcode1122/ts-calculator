// Navbar.jsx
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "../styles.scss";
import { useDarkMode } from "./ DarkModeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <nav className={`navbar ${isDarkMode ? "dark-mode" : ""} `}>
        <div className="Logo">
          <Link to="/" className={`nav-logo  ${isDarkMode ? "dark-mode" : ""}`}>
            <span>TS</span> Calculator
          </Link>
        </div>
        <div className="Menu-button">
          <Link to="/" className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}>
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
          >
            About
          </Link>
          <Link
            to="/faqs"
            className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
          >
            FAQs
          </Link>
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
        <Outlet />
      </nav>
      <div className="Nav-height"></div>
    </>
  );
};

export default Navbar;
