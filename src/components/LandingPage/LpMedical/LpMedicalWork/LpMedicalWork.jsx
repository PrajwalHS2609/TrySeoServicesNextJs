"use client"
import React from "react";
import "./LpMedicalWork.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import bulb from "./../../../../Img/lpMedical/Work/light-bulb.png";
import megaphone from "./../../../../Img/lpMedical/Work/megaphone.png";
import rocket from "./../../../../Img/lpMedical/Work/rocket.png";
import cursor from "./../../../../Img/lpMedical/Work/click-cursor.png";
import review from "./../../../../Img/lpMedical/Work/good-review.png";
import Image from "next/image";

const LpMedicalWork = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpMedicalWork-container">
      <div className="lpMedicalWork-wrapper">
        <div className="lpMedicalWork-content">
          <h2>
            Discover Your <span>Diagnostic’s</span> Growth Gaps
          </h2>
          <p>
            We begin by analyzing your diagnostic’s unique services, challenges,
            and opportunities, crafting a customized strategy designed
            specifically to achieve your growth goals.
          </p>
        </div>
        <div className="lpMedicalWork-content">
          <div className="lpMedicalWork-item">
            <Image src={bulb} alt="bulb" />
            <b>Goals & Strategy</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <Image src={cursor} alt="cursor" />
            <b>Audience & Platforms</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <Image src={megaphone} alt="megaphone" />
            <b>Create Content & Campaigns</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <Image src={rocket} alt="rocket" />
            <b>Launch & Track</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <Image src={review} alt="review" />
            <b>Review & Results</b>
          </div>
        </div>
        <button className="frutiger-button">
          <div className="inner">
            <span className="text" onClick={handlePopUp}>
              BOOK NOW
            </span>
          </div>
        </button>{" "}
      </div>
    </div>
  );
};

export default LpMedicalWork;
