"use client"
import React from "react";
import { GiStumpRegrowth } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import homeAboutUs from "@/Img/homePgImgs/homeAboutUs.jpg";
import "./HomeAbout.css"
import Image from "next/image";
const HomeAbout = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  const icons = [
    { id: 1, txt: "Proven Growth", icon: GiStumpRegrowth },
    { id: 2, txt: "Custom Marketing", icon: RiTeamFill },
    { id: 3, txt: "Expert Team", icon: FaUserFriends },
    { id: 4, txt: "Trusted Partner", icon: FaBullhorn },
  ];
  return (
    <div className="homeAboutUs">
      <div className="homeAboutUsContent1">
        <Image src={homeAboutUs} alt="homeAboutUs" />
      </div>
      <div className="homeAboutUsContent2">
        <div className="homeAboutUsHeader">
          <h6>ABOUT US</h6>
          <h2>
            Everything Extraordinary Starts With{" "}
            <span>Exceptional Marketing</span>
          </h2>
          <p>
            At Tryservice.Com, we don’t just do marketing — we craft digital
            magic that transforms brands into powerhouses. Every click, every
            keyword, every campaign is designed to turn ordinary visibility into
            extraordinary growth.
          </p>
          <p>
            We believe that extraordinary results come from exceptional strategy
            — smart SEO, data-driven ads, stunning design, and compelling
            content that make your brand impossible to ignore. Whether you’re
            launching, scaling, or reinventing, we’re the force that puts you on
            top of search engines and in the hearts of customers.
          </p>
          <p>
            Because when marketing is done right — your brand doesn’t just get
            noticed, it becomes unforgettable.
          </p>
        </div>
        <div className="homeAboutUsCardContent">
          {icons.map((x) => {
            const Icon = x.icon;
            return (
              <div className="homeAboutUsCard" key={x.id}>
                <Icon className="homeAboutUsCard-icon" />
                <h5>{x.txt}</h5>
              </div>
            );
          })}
        </div>
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
    </div>
  );
};

export default HomeAbout;
