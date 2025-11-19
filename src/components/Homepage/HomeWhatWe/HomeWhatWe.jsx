"use client";
import React from "react";
import "./HomeWhatWe.css";
import homeWhatWe from "@/Img/homePgImgs/homeWhatWeDo.jpg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const HomeWhatWe = () => {
  return (
    <div className="homeWhatWeContainer">
      <div className="homeWhatWeContent1">
        <div className="homeWhatWeHeader">
          <h6>WHAT WE DO</h6>
          <h2>SEO Analytics & Strategy Skill</h2>
          <p>
            <span> Tryservice.Com </span>is a one-stop platform for all your
            web related requirements. We consider that customized site
            development is a life-changing activity and we do everything we can
            to help companies to establish a space that puts them on par with
            their competition and offers them a much-needed worldwide edge
            through Digital marketing in Bangalore.
          </p>
          <p>
            Our Digital marketing service in Bangalore includes everything you
            require and more to bolster your business and make the most of the
            growing market with our specific and custom designers, and a team
            that compiles all the relevant information over time, in a manner
            that can greatly accentuate your business.
          </p>
          <p>
            Our expertise in Search Engine Optimization and App Development will
            make it incredibly simple for you to achieve exactly what you want,
            beginning a new era of absolute creation that can be used to
            differentiate your company. We are always on top of it all, creating
            websites that fully reflect your requirements, whether it’s Digital
            Marketing or Search Engine Optimization, App Development, or even
            Software Creations.
          </p>
          <div className="homeWhatWeBtn">
            <Link href="#Services">
              {" "}
              <button>
                Explore Our Services <FaArrowRight className="homeArrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="homeWhatWeContent2">
        <Image src={homeWhatWe} alt="homeWhatWe" width={200} height={200}/>
      </div>
    </div>
  );
};

export default HomeWhatWe;
