import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Navbar.css";
import TSS from "@/Img/TSS.png"

const Logo = () => {
  return (
    <div className="logoContainer">
      <Link href="/">
        <Image src={TSS} alt="tss" />
      </Link>
    </div>
  );
};

export default Logo;
