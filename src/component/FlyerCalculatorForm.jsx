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
  const handleDecreasePages = () => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfPages: Math.max(prevData.numberOfPages - 1, 1),
    }));
  };

  const handleIncreasePages = () => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfPages: prevData.numberOfPages + 1,
    }));
  };
  return (
    <section className="logo-cont">
      <form onSubmit={handleSubmit}>
        <div className="logo-contain-2">
          <label className="logo-contain-2-1">
            Number of Pages:
            <div className="input-width">
              <span>{formData.numberOfPages}</span>
              <div className="button-box">
                <button type="button" onClick={handleIncreasePages}>
                  &#9650; {/* Unicode for up arrow */}
                </button>
                <button type="button" onClick={handleDecreasePages}>
                  &#9660; {/* Unicode for down arrow */}
                </button>
              </div>
            </div>
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
