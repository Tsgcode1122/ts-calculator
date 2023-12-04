import React, { useState, useEffect } from "react";
import BusinessCardForm from "./BusinessCardForm";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import "../styles.scss";
import downArrow from "../images/arrowcolor.png";
import useMoveUpDown from "../animation/useMoveUpDown";
import Footer from "./Footer";
const BusinessCardService = () => {
  useMoveUpDown(".down-arrow");
  const [receipt, setReceipt] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showThanksSection, setShowThanksSection] = useState(false);
  const defaultFormValues = {
    pageStyle: "front",
    includeQRCode: false,
    numberOfRevisions: "1",
  };

  const handleCalculate = (formData) => {
    const price = calculateBusinessCardPrice(formData);
    if (price > 0) {
      setReceipt({ ...formData, price });
      openModal();
    } else {
      console.warn("Total price is 0. Please adjust your selections.");
    }
  };

  const calculateBusinessCardPrice = (formData) => {
    let price = 0;

    if (formData.pageStyle === "front") {
      price += 45;
    } else if (formData.pageStyle === "front-and-back") {
      price += 50;
    }

    if (formData.includeQRCode) {
      price += 3;
    }

    price += calculateRevisionsPrice(formData.numberOfRevisions);

    return price;
  };

  const calculateRevisionsPrice = (numberOfRevisions) => {
    if (numberOfRevisions === "2") {
      return 2;
    } else if (numberOfRevisions === "4") {
      return 3;
    } else if (numberOfRevisions === "unlimited") {
      return 5;
    }
    return 0; // Default to no additional cost
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
          <h2>Business Card Design Service</h2>
          <img src={downArrow} className="down-arrow" />
        </div>
        <BusinessCardForm
          onCalculate={handleCalculate}
          defaultValues={defaultFormValues}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Business Card Receipt"
          className={"model"}
        >
          <div className="modal">
            <h3>Invoice</h3>
            <h4>Business Card Design</h4>
            {receipt && receipt.price > 0 ? (
              <div>
                <p className="ppp">
                  {" "}
                  <span>Total Price: </span>${receipt.price}
                </p>
                <p className="ppp">
                  <span>Page Style: </span>
                  {receipt.pageStyle}
                </p>
                <p className="ppp">
                  <span>Include QR Code:</span>{" "}
                  {receipt.includeQRCode ? "Yes" : "No"}
                </p>
                <p className="ppp">
                  <span>Number of Revisions:</span> {receipt.numberOfRevisions}
                </p>
              </div>
            ) : (
              <p>No valid receipt data.</p>
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

export default BusinessCardService;
