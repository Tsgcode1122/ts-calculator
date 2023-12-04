// Footer.jsx
import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <h2>Get in Touch</h2>
      <ul className="social-icons">
        <li className="insta">
          <a
            href="https://www.instagram.com/soft_graphics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="whats">
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li className="email">
          <a href="mailto:tsgcode201@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li className="github">
          <a
            href="https://github.com/Tsgcode1122"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="linkedin">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <h4>
        <a href="http://softwebsitedesigns.com/">
          Developed and designed by Tsg
        </a>
      </h4>
    </section>
  );
};

export default Footer;
