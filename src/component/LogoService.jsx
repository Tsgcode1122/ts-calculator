// LogoService.js
// LogoService.js
import React, { useState, useEffect } from "react";
import CalculatorForm from "./CalculatorForm";
import Modal from "react-modal";
import Navbar from "./Navbar";
import "../styles.scss";
import { FaTimes } from "react-icons/fa";
import Footer from "./Footer";
import downArrow from "../images/arrowcolor.png";
import useMoveUpDown from "../animation/useMoveUpDown";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

Modal.setAppElement("#root");

const LogoService = () => {
  useMoveUpDown(".down-arrow");
  const [totalPrice, setTotalPrice] = useState(null);
  const [logoType, setLogoType] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showThanksSection, setShowThanksSection] = useState(false);
  const handleCalculate = (formData) => {
    const price = calculateLogoPrice(formData);
    const selectedPackage = getSelectedPackage(formData.numberOfRevisions);
    setTotalPrice(price);
    setReceipt({ ...formData, price, selectedPackage });
    setModalIsOpen(true);
  };

  const calculateLogoPrice = (formData) => {
    const basePrice = 25;
    let price = basePrice;

    if (logoType === "text") {
      price += calculateTextLogoPrice(formData.textLogoComplexity);
      price += calculateRevisionsPrice(formData.numberOfRevisions);
    } else if (logoType === "cartoon") {
      price = calculateCartoonLogoPrice(formData);
      price += calculateRevisionsPrice(formData.numberOfRevisions);
    } else if (logoType === "illustration") {
      price = 40 + calculateIllustrationLogoPrice(formData);
      price += calculateRevisionsPrice(formData.numberOfRevisions);
    }

    return price;
  };

  const calculateCartoonLogoPrice = (formData) => {
    const { numberOfPeople } = formData;

    // Default multiplier
    let multiplier = 45;

    // Adjust multiplier based on the number of people
    if (numberOfPeople > 1 && numberOfPeople <= 3) {
      multiplier = 38;
    } else if (numberOfPeople > 3) {
      multiplier = 35;
    }

    // Calculate the price
    return 35 + numberOfPeople * multiplier;
  };
  const calculateTextLogoPrice = (complexity) => {
    if (complexity === "simple") {
      return 25;
    } else if (complexity === "moderate") {
      return 40;
    } else if (complexity === "complex") {
      return 50;
    }
  };

  const calculateIllustrationLogoPrice = (formData) => {
    const { numberOfElements } = formData;

    // Default multiplier
    let multiplier = 50;

    if (numberOfElements > 1 && numberOfElements <= 3) {
      multiplier = 45;
    } else if (numberOfElements > 3) {
      multiplier = 37;
    }

    // Calculate the price
    return numberOfElements * multiplier;
  };

  const calculateRevisionsPrice = (numberOfRevisions) => {
    const revisions = parseInt(numberOfRevisions, 10) || 0;

    if (revisions === 2) {
      return 5;
    } else if (revisions === 4) {
      return 7;
    } else if (numberOfRevisions === "unlimited") {
      return 10;
    }
    return 0;
  };

  const getSelectedPackage = (numberOfRevisions) => {
    if (numberOfRevisions === "2") {
      return "(2 Revisions Package)";
    } else if (numberOfRevisions === "4") {
      return "(4 Revisions Package)";
    } else if (numberOfRevisions === "unlimited") {
      return "(Unlimited Revisions Package)";
    }
    return "(Default Package)";
  };

  const handleLogoTypeChange = (type) => {
    setLogoType(type);
  };

  const closeReceiptModal = () => {
    setModalIsOpen(false);
  };
  const closeThanksSection = () => {
    setShowThanksSection(false);
  };

  useEffect(() => {
    const delay = 4000; // 10 seconds
    const timer = setTimeout(() => {
      setShowThanksSection(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [modalIsOpen]);
  // page reload
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="logo-service">
        <div className="logo-container">
          <h2>Logo Design Service</h2>
          <img src={downArrow} className="down-arrow" />
          <label className="logo-contain-1">
            Select Logo Type:
            <select
              onChange={(e) => handleLogoTypeChange(e.target.value)}
              style={{
                color: formData.websiteType === "landing" ? "black" : "black",
              }}
            >
              <option value="">Select...</option>
              <option value="text">Text-based Logo</option>
              <option value="cartoon">Cartoon-based Logo</option>
              <option value="illustration">Illustration-based Logo</option>
            </select>
          </label>
        </div>

        {logoType && (
          <CalculatorForm onCalculate={handleCalculate} logoType={logoType} />
        )}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeReceiptModal}
          contentLabel="Receipt Modal"
        >
          <div className="modal">
            <h3>Invoice</h3>
            {receipt && (
              <>
                <p className="ppp">
                  <span>Total Price: </span> ${receipt.price} -{" "}
                  {receipt.selectedPackage}
                </p>
                <p className="ppp">
                  {" "}
                  <span>Logo Type:</span> {logoType}
                </p>
                {logoType === "illustration" && (
                  <>
                    <p className="ppp">
                      <span> Number of Elements in the Illustration:</span>{" "}
                      {receipt.numberOfElements}
                    </p>
                    <p className="ppp">
                      <span>Number of Revisions: </span>
                      {receipt.numberOfRevisions}
                    </p>
                  </>
                )}
                {logoType === "text" && (
                  <>
                    <p className="ppp">
                      <span>Text Logo Complexity: </span>{" "}
                      {receipt.textLogoComplexity}
                    </p>
                    <p className="ppp">
                      <span> Number of Revisions:</span>
                      {receipt.numberOfRevisions}
                    </p>
                  </>
                )}
                {logoType === "cartoon" && (
                  <>
                    <p className="ppp">
                      <span>Number of People in the Design:</span>{" "}
                      {receipt.numberOfPeople}
                    </p>
                    <p className="ppp">
                      <span>Number of Revisions:</span>{" "}
                      {receipt.numberOfRevisions}
                    </p>
                  </>
                )}
                <p>
                  <span> The following package comes with the price:</span>
                </p>
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline /> {receipt.selectedPackage}
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline /> Files (PNG, JPEG, PDF) which
                    can be used for Cloth printing, flyer, transparent
                    background
                  </li>
                </ul>
              </>
            )}
            <button onClick={closeReceiptModal}>Back</button>
          </div>
          {showThanksSection && (
            <div className="thanks-section">
              <button className="close-thanks" onClick={closeThanksSection}>
                <FaTimes />
              </button>
              <p>
                Thanks for checking out our pricing! 🌟 Click below to proceed
                and explore more or follow us on Instagram for updates and
                inspiration.
              </p>
              <a
                href="https://www.instagram.com/soft_graphics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Proceed on Instagram
              </a>
            </div>
          )}
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default LogoService;
