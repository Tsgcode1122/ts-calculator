// WebsiteService.jsx
import React, { useState, useEffect } from "react";
import WebsiteForm from "./WebsiteForm";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import downArrow from "../images/arrowcolor.png";
import useMoveUpDown from "../animation/useMoveUpDown";
import "../styles.scss";
import Footer from "./Footer";
const WebsiteService = () => {
  useMoveUpDown(".down-arrow");
  const [receipt, setReceipt] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showThanksSection, setShowThanksSection] = useState(false);
  const defaultFormValues = {
    websiteType: "",
    sections: 1,
    productListings: 1,
    numberOfRevisions: "1",
  };

  const handleCalculate = (formData) => {
    const price = calculateWebsitePrice(formData);
    setReceipt({ ...formData, price });
    openModal();
  };

  // ...

  // ...

  const calculateWebsitePrice = (formData) => {
    let price = 0;

    if (formData.websiteType === "landing") {
      price += 50;
      price += formData.sections * 50;

      if (formData.sections > 2) {
        price -= 10;
      }
    } else if (formData.websiteType === "ecommerce") {
      price += 300;
      price += formData.productListings * 2;
    } else if (formData.websiteType === "booking") {
      price += 250;
    } else if (formData.websiteType === "appointment") {
      price += 290;
    }

    price += calculateRevisionsPrice(formData.numberOfRevisions);

    return price || 0;
  };

  // ...

  const calculateRevisionsPrice = (numberOfRevisions) => {
    // Implement pricing logic based on the number of revisions
    // You can customize this based on your requirements
    if (numberOfRevisions === "1") {
      return 5;
    } else if (numberOfRevisions === "2") {
      return 7;
    } else if (numberOfRevisions === "4") {
      return 10;
    } else if (numberOfRevisions === "unlimited") {
      return 12;
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
          <h2>Website Design Service</h2>
          <img src={downArrow} className="down-arrow" />
        </div>
        <WebsiteForm
          onCalculate={handleCalculate}
          defaultValues={defaultFormValues}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Website Receipt"
        >
          <div className="modal">
            <h3>Receipt</h3>
            <h4>Website Design</h4>
            <p className="ppp">
              {" "}
              <span>Total Price:</span> ${receipt ? receipt.price : ""}
            </p>
            {receipt && (
              <div>
                <p className="ppp">
                  <span>Website Type:</span> {receipt.websiteType}
                </p>
                {receipt.websiteType === "landing" && (
                  <p className="ppp">
                    <span>Number of Sections: </span> {receipt.sections}
                  </p>
                )}
                {receipt.websiteType === "ecommerce" && (
                  <p className="ppp">
                    <span>Number of Product Listings: </span>{" "}
                    {receipt.productListings}
                  </p>
                )}
                <p className="ppp">
                  <span>Number of Revisions:</span>
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

export default WebsiteService;
