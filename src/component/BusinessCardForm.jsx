// BusinessCardForm.jsx
import React from "react";
import downArrow from "../images/arrowcolor.png";
const BusinessCardForm = ({ onCalculate, defaultValues }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      pageStyle: e.target.pageStyle.value,
      includeQRCode: e.target.includeQRCode.checked,
      numberOfRevisions: e.target.numberOfRevisions.value,
    };
    onCalculate(formData);
  };

  return (
    <section className="logo-cont">
      <form onSubmit={handleSubmit}>
        <div className="logo-contain-2">
          <div>
            <label className="logo-contain-2-1">
              Page Style:
              <select name="pageStyle" defaultValue={defaultValues.pageStyle}>
                <option value="front">Front</option>
                <option value="front-and-back">Front and Back</option>
              </select>
            </label>
          </div>
          <div>
            <label className="logo-contain-2-1">
              Include QR Code:
              <input
                type="checkbox"
                name="includeQRCode"
                defaultChecked={defaultValues.includeQRCode}
                style={{
                  color: formData.websiteType === "landing" ? "black" : "black",
                }}
              />
            </label>
          </div>
          <div>
            <label className="logo-contain-2-1">
              Number of Revisions:
              <select
                name="numberOfRevisions"
                defaultValue={defaultValues.numberOfRevisions}
                style={{
                  color: formData.websiteType === "landing" ? "black" : "black",
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="unlimited">Unlimited</option>
              </select>
            </label>
          </div>
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

export default BusinessCardForm;
