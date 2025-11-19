import React from "react";
import "./../Footer.css";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";

const FooterSocial = () => {
  return (
    <div className="footerSocial">
      <li>
        {" "}
        <a href="https://www.facebook.com/tryservice">
          {" "}
          <FaFacebook className="footerSocialIco" />
        </a>
      </li>
      <li>
        {" "}
        <a href="https://x.com/tryservice">
          {" "}
          <FaXTwitter className="footerSocialIco" />
        </a>
      </li>
      <li>
        {" "}
        <a href="https://www.linkedin.com/company/tryservice/">
          {" "}
          <FaLinkedin className="footerSocialIco" />
        </a>
      </li>
      <li>
        {" "}
        <a href="https://www.instagram.com/tryservice/">
          {" "}
          <FaInstagram className="footerSocialIco" />
        </a>
      </li>
      <li>
        {" "}
        <a href="https://www.youtube.com/@tryservice">
          {" "}
          <FaYoutube className="footerSocialIco" />
        </a>
      </li>
    </div>
  );
};

export default FooterSocial;
