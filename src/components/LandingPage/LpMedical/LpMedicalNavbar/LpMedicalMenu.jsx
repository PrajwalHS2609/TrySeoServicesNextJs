"use client"
import React from "react";
import "./LpMedicalNavbar.css";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import { FaX } from "react-icons/fa6";
const LpMedicalMenu = () => {
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  return (
    <div className="menuContainer">
      <div className="menuContainerWrapper">
        <li>
          <Link href={"/"} >
            Home
          </Link>
        </li>
        <li>
          <Link href={"#services"} >
            {" "}
            Services
          </Link>
        </li>
        <li>
          <Link href={"#aboutUs"} >
            {" "}
            About Us
          </Link>
        </li>
        <li>
          <Link href={"#testimonials"} >
            Testimonials
          </Link>
        </li>
        <li>
          <Link href={"#contactUs"} >
            Contact Us
          </Link>
        </li>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=916360226773"
        className="whatsappBtnMenu"
      >
        <button className="button-29" role="button">
          <FaWhatsapp className="nav-whatsappIcon" />
          Message Me
        </button>
      </a>

      <div className="lpMedical-respMenuBar">
        <IoMenu onClick={showSideBar} className="lpMedicalMenuIcon" />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FaX className="closeX" onClick={hideSideBar} />
          <div className="innerMenu">
            {/* <li className="">
              <a id="menuLink" href="tel:6362946008" onClick={hideSideBar}>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
                +91 6362946008{" "}
              </a>{" "}
            </li> */}
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} href={"/"}>
                Home{" "}
              </Link>
            </li>
            <li className="respDropDown">
              {" "}
              <Link href={"#services"}  onClick={hideSideBar}>
                Services{" "}
              </Link>{" "}
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} href={"#aboutUs"}>
                About Us
              </Link>
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} href={"#testimonial"}>
                Testimonials{" "}
              </Link>
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} href={"#contactUs"}>
                Contact Us
              </Link>
            </li>

            <li>
              <a href="https://api.whatsapp.com/send?phone=916360226773">
                <button className="button-29" role="button" id="respWhatsappBtn">
                  <FaWhatsapp className="nav-whatsappIcon" />
                  Message Me
                </button>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpMedicalMenu;
