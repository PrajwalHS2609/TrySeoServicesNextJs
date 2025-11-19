import React from "react";
import "./LpPetsFooter.css";
import logo from "./../../../../Img/TSS.png";
import Image from "next/image";
const LpPetsFooter = () => {
  return (
    <div className="lpPetsFooter-container">
      <div className="footerLine"></div>
      <div className="lpPetsFooter-wrapper">
        <div className="lpPetsFooter-content">
          <Image src={logo} alt="logo" />
        </div>
        <div className="lpPetsFooter-content">
          <p>© 2023 TrySEOServices.Com All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LpPetsFooter;
