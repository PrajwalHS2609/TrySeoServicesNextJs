"use client"
import React from "react";
import "./ServiceSidebar.css";
import bookImg from "@/Img/book1.png"
import Image from "next/image";
const ServiceBook = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="serviceBook-container">
      <div className="serviceBook-content">
        <h3>Book an Appointment</h3>
        <p>
          Ready to elevate your business? Partner with Tryservice.Com and
          kickstart your journey to digital success!
        </p>
        <button className="cssbuttons-io-button" onClick={handlePopUp}>
          Book Now
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
      </div>
      <div className="serviceBook-content">
        <Image src={bookImg} alt="book Img" />
      </div>
    </div>
  );
};

export default ServiceBook;
