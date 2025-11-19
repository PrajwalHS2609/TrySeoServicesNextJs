import React from "react";
import "./LpPetsNavbar.css";
import logo from "./../../../../Img/TSS.png";
import Image from "next/image";
const LpPetsLogo = () => {
  return (
    <div className="LpPetsLogo-logo">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default LpPetsLogo;
