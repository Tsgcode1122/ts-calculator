// FlyerCalculatorForm.jsx
import React, { useState } from "react";

const FlyerCalculatorForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    numberOfPages: 1,
    frontAndBack: false,
    numberOfRevisions: "1", // Default to 1 revision
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkboxes, use the checked value; for other inputs, use the value
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component for calculation
    onCalculate(formData);
  };

  return (
    <section className="logo-cont">
      <form onSubmit={handleSubmit}>
        <div className="logo-contain-2">
          <label className="logo-contain-2-1">
            Number of Pages:
            <input
              type="number"
              name="numberOfPages"
              value={formData.numberOfPages}
              onChange={handleChange}
              min="1"
            />
          </label>

          <label className="logo-contain-2-1">
            Number of Revisions:
            <select
              name="numberOfRevisions"
              value={formData.numberOfRevisions}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="unlimited">Unlimited</option>
            </select>
          </label>
        </div>
        <div className="final-button">
          <button type="submit" className="btn">
            Calculate
          </button>
        </div>
      </form>
    </section>
  );
};

export default FlyerCalculatorForm;
