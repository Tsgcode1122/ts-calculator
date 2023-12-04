// CalculatorForm.js
import React, { useState, forwardRef, useImperativeHandle } from "react";

const CalculatorForm = forwardRef(({ onCalculate, logoType }, ref) => {
  const [formData, setFormData] = useState({
    textLogoComplexity: "simple",
    numberOfPeople: 1,
    numberOfRevisions: "1",
    numberOfElements: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue =
      name.includes("numberOf") && name !== "numberOfRevisions"
        ? Math.max(parseInt(value, 10), 1)
        : value;

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  // Use useImperativeHandle to expose a function to the parent component
  useImperativeHandle(ref, () => ({
    resetForm: () => {
      // You can add logic here to reset the form if needed
      setFormData({
        textLogoComplexity: "simple",
        numberOfPeople: 1,
        numberOfRevisions: "1",
        numberOfElements: 1,
      });
    },
  }));

  return (
    <>
      <section className="logo-cont">
        <form onSubmit={handleSubmit}>
          <div className="logo-contain-2">
            {logoType === "text" && (
              <div>
                {/* Additional fields for text-based logo */}
                <label className="logo-contain-2-1">
                  Text Logo Complexity:
                  <select
                    name="textLogoComplexity"
                    value={formData.textLogoComplexity}
                    onChange={handleChange}
                  >
                    <option value="simple">Simple</option>
                    <option value="moderate">Moderate</option>
                    <option value="complex">Complex</option>
                  </select>
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
            )}

            {logoType === "cartoon" && (
              <div>
                <label className="logo-contain-2-1">
                  Number of People in the Design:
                  <input
                    type="number"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    min="1"
                    className="input-width"
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
            )}

            {logoType === "illustration" && (
              <div>
                <label className="logo-contain-2-1">
                  Number of Character in the Illustration:
                  <input
                    type="number"
                    name="numberOfElements"
                    value={formData.numberOfElements}
                    onChange={handleChange}
                    min="1"
                    className="input-width"
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
            )}
          </div>
          <div className="final-button">
            <button type="submit" className="btn">
              Calculate
            </button>
          </div>
        </form>
      </section>
    </>
  );
});

export default CalculatorForm;
