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
              <input
                type="number"
                name="sections"
                value={formData.sections}
                onChange={handleChange}
                min="1"
              />
            </label>
          )}
          {formData.websiteType === "ecommerce" && (
            <label className="logo-contain-2-1">
              Number of Product Listings:
              <input
                type="number"
                name="productListings"
                value={formData.productListings}
                onChange={handleChange}
                min="1"
                className="input-width"
              />
            </label>
          )}
          {formData.websiteType && (
            <label className="logo-contain-2-1">
              Number of Revisions:
              <select
                name="numberOfRevisions"
                value={formData.numberOfRevisions}
                onChange={handleChange}
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
