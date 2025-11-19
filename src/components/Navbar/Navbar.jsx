"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    // Cleanup to avoid multiple listeners
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav className={scroll ? "navbarContainer" : "navbarContainer1"}>
      <div className="navbarContent">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
