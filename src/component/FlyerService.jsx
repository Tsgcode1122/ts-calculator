// FlyerService.jsx
import React, { useState, useEffect } from "react";
import FlyerCalculatorForm from "./FlyerCalculatorForm";
import Modal from "react-modal";
import Footer from "./Footer";
import { FaTimes } from "react-icons/fa";
import downArrow from "../images/arrowcolor.png";
import useMoveUpDown from "../animation/useMoveUpDown";
const FlyerService = () => {
  useMoveUpDown(".down-arrow");
  const [totalPrice, setTotalPrice] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showThanksSection, setShowThanksSection] = useState(false);
  const handleCalculate = (formData) => {
    const price = calculateFlyerPrice(formData);
    setTotalPrice(price);
    setReceipt({ ...formData, price });
    openModal();
  };

  const calculateFlyerPrice = (formData) => {
    let price;

    if (formData.numberOfPages === 1) {
      price = formData.numberOfPages * 50; // $50 for one page
    } else if (formData.numberOfPages >= 2) {
      price = formData.numberOfPages * 45; // $45 per page for 3 or more pages
    }

    price += calculateRevisionsPrice(formData.numberOfRevisions);

    return price || 0;
  };

  const calculateRevisionsPrice = (numberOfRevisions) => {
    const revisions = parseInt(numberOfRevisions, 10) || 0;

    if (revisions === 2) {
      return 2;
    } else if (revisions === 4) {
      return 3;
    } else if (numberOfRevisions === "unlimited") {
      return 6;
    }
    return 0;
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
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
          <h2>Flyer Design Service</h2>
          <img src={downArrow} className="down-arrow" />
        </div>
        <FlyerCalculatorForm onCalculate={handleCalculate} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Flyer Receipt"
        >
          <div className="modal">
            <h3>Invoice</h3>
            <h4>Flyer Design</h4>
            <p className="ppp">
              {" "}
              <span>Total Price:</span> ${receipt ? receipt.price : ""}
            </p>
            {receipt && (
              <div>
                <p className="ppp">
                  <span>Number of Pages: </span>
                  {receipt.numberOfPages}
                </p>
                <p className="ppp">
                  <span>Number of Revisions: </span>
                  {receipt.numberOfRevisions}
                </p>
              </div>
            )}
            <button onClick={closeModal}>Close</button>
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

export default FlyerService;
