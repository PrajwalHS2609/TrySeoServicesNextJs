import React from "react";
import "./SanityHeader.css";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
const SanityHeader = (props) => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="slugHeader-container">
      <img src={props.img} alt={props.alt} />
      <div className="slugHeader-cover">
        <h1>{props.headTitle}</h1>
        <div className="slugHeader-btn">
          {" "}
            <button className="cssbuttons-io-button" onClick={handlePopUp}>
              Get Started
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          <Link href={`/contact-us`}>
            <button className="cssbuttons-io-button">
              Contact Us
              <div className="icon">
                <FaPhoneAlt className="headerContact-icon" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SanityHeader;
