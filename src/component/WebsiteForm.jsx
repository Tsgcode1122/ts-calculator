// WebsiteForm.jsx
import React, { useState } from "react";

const WebsiteForm = ({ onCalculate, defaultValues }) => {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };
  const handleDecreaseElements = () => {
    setFormData((prevData) => ({
      ...prevData,
      sections: Math.max(prevData.sections - 1, 1),
    }));
  };

  const handleIncreaseElements = () => {
    setFormData((prevData) => ({
      ...prevData,
      sections: prevData.sections + 1,
    }));
  };
  const handleDecrease = () => {
    setFormData((prevData) => ({
      ...prevData,
      productListings: Math.max(prevData.productListings - 1, 1),
    }));
  };

  const handleIncrease = () => {
    setFormData((prevData) => ({
      ...prevData,
      productListings: prevData.productListings + 1,
    }));
  };
  return (
    <section className="logo-cont">
      <form onSubmit={handleSubmit}>
        <div className="logo-contain-2">
          <label className="logo-contain-2-1">
            Website Type:
            <select
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              style={{
                color: formData.websiteType === "landing" ? "black" : "black",
              }}
            >
              <option value="">Select...</option>
              <option value="landing">Landing Page Website</option>
              <option value="ecommerce">E-commerce Website</option>
              <option value="booking">Booking Website</option>
              <option value="appointment">Appointment Website</option>
            </select>
          </label>
          {formData.websiteType === "landing" && (
            <label className="logo-contain-2-1">
              Number of Sections:
              <div className="input-width">
                <span>{formData.sections}</span>
                <div className="button-box">
                  <button type="button" onClick={handleIncreaseElements}>
                    &#9650; {/* Unicode for up arrow */}
                  </button>
                  <button type="button" onClick={handleDecreaseElements}>
                    &#9660; {/* Unicode for down arrow */}
                  </button>
                </div>
              </div>
            </label>
          )}
          {formData.websiteType === "ecommerce" && (
            <label className="logo-contain-2-1">
              Number of Product Listings:
              <div className="input-width">
                <span>{formData.productListings}</span>
                <div className="button-box">
                  <button type="button" onClick={handleIncrease}>
                    &#9650; {/* Unicode for up arrow */}
                  </button>
                  <button type="button" onClick={handleDecrease}>
                    &#9660; {/* Unicode for down arrow */}
                  </button>
                </div>
              </div>
            </label>
          )}
          {formData.websiteType && (
            <label className="logo-contain-2-1">
              Number of Revisions:
              <select
                name="numberOfRevisions"
                value={formData.numberOfRevisions}
                onChange={handleChange}
                style={{
                  color: formData.websiteType === "landing" ? "black" : "black",
                }}
              >
                <option value="1">1 Revision</option>
                <option value="2">2 Revisions</option>
                <option value="4">4 Revisions</option>
                <option value="unlimited">Unlimited Revisions</option>
              </select>
            </label>
          )}
        </div>
        <div className="final-button">
          <button type="submit" disabled={!formData.websiteType}>
            Calculate
          </button>
        </div>
      </form>
    </section>
  );
};

export default WebsiteForm;
