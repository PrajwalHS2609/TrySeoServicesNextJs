import React from "react";
import businessImg from "./../../../../Img/lpMedical/diagnositics.png";
import "./LpMedicalBusiness.css";
import Image from "next/image";
const LpMedicalBusiness = () => {
  return (
    <div className="lpMedical-container" id="about-us">
      <div className="lpMedical-content">
        <div className="lpMedical-heading">
          <h2>
            We make your <span>business stand out</span>
          </h2>
          <p>
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical digital solutions.
          </p>
        </div>
      </div>
      <div className="lpMedical-content">
        <div className="lpMedical-vidContainer">
          <Image src={businessImg} alt="business Img"  />
        </div>
        <div className="lpMedical-keyContainer">
          <ul>
            <li>
              <h3>150K+</h3>
              <p>Clicks in Just 24 Months</p>
            </li>
            <li>
              <h3>10,000+</h3>
              <p>Monthly Organic Visitors</p>
            </li>
            <li>
              <h3>1,000+</h3>
              <p>Top Rankings for Competitive Keyword</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LpMedicalBusiness;
