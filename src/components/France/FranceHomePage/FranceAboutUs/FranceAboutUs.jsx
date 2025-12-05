import React from "react";

import homeAboutUs from "./../../../../Img/homePgImgs/homeAboutUs.jpg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import FranceAboutUsHeader from './FranceAboutUsHeader';
import FranceAboutUsWrapper from './FranceAboutUsWrapper';
const FranceAboutUs = () => {
  return (
    <div className="homeAboutUs">
      <div className="homeAboutUsContent1">
        <img src={homeAboutUs} alt="homeAboutUs" />
      </div>
      <div className="homeAboutUsContent2">
        <FranceAboutUsHeader />
        <FranceAboutUsWrapper />
        <Link href={"/"}>
          <button>
            Discover More <FaArrowRight className="homeArrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FranceAboutUs;
