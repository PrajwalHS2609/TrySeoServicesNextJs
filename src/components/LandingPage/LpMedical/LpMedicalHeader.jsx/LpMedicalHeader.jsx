"use client"
import React from "react";
import "./LpMedicalHeader.css";
const LpMedicalHeader = () => {

  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpMedicalHeader-container">
      <video src="/Vid/LpMedicalBannerVideo.mp4" autoPlay muted loop></video>
      {/* <img src={doc} alt="header-img" /> */}
      <div className="lpMedicalHeader-cover">
        <div className="lpMedicalHeader-content">
          <h6>Guaranteed Leads, Appointments & Results!</h6>
          <h2>Smart Marketing for Diagnostics Centers</h2>
          <p>
            TrySEOServices.Com delivers data-driven marketing that boosts your
            diagnostics center’s visibility, attracts quality patient leads, and
            increases footfalls through SEO, Google Ads, and social media —
            ensuring measurable growth, guaranteed consultations, and lasting
            patient trust.
          </p>
          <div className="lpMedicalHeader-btn">
            <button className="frutiger-button" onClick={handlePopUp}>
              <div className="inner">
                <span className="text">BOOK YOUR SESSION</span>
              </div>
            </button>{" "}
            <a href="tel:6360226773">GET CALLBACK </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpMedicalHeader;
