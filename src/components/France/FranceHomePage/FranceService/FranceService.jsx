"use client"
import React from "react";

import seoMag from "./../../../../Img/HomeService/SEOMag.png";
import adsServ from "./../../../../Img/HomeService/adsService.png";
import webDesign from "./../../../../Img/HomeService/WebsiteDesign.png";
import content from "./../../../../Img/HomeService/Content.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
const FranceService = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";
  const card = [
    {
      id: 1,
      img: seoMag,
      head1: "Google & Bing",
      head2: "SEO",
      para: "In today's digital environment, SEO ensures increased conversions and aids in the growth of your company. Your company can rank on the first page of the SERP if you use the appropriate SEO tactics.",
      link: `/${countryCode}/seo-services-in-bangalore`,
    },
    {
      id: 2,
      img: adsServ,
      head1: "Search, Display & Video",
      head2: "Google Ads",
      para: "We ensure that your budget is managed and that your paid marketing Google Ad campaigns are boosted. A good keyword strategy combined with in-depth keyword research will help you get more customers.",
      link: `/${countryCode}/google-ads-service-in-bangalore`,
    },
    {
      id: 3,
      img: webDesign,
      head1: "Product & Services",
      head2: "Website Design",
      para: "From smartphones to desktops, we make your brand look stunning everywhere! Our responsive web design ensures effortless browsing, smooth navigation, and pixel-perfect performance across every screen size.",
      link: `/${countryCode}/website-designing-services-in-bangalore`,
    },
    {
      id: 4,
      img: content,
      head1: "SEO & Promotion",
      head2: "Content Writing",
      para: "Content is rightly regarded as the king of the marketing industry, as it is the only factor that contributes to the development of a strong online persona on search engines.",
      link: `/${countryCode}/content-writing-service-in-bangalore`,
    },
  ];
  return (
    <div className="homeService">
      <div className="homeServiceHead" id="Services">
        <h6> OUR SERVICES </h6>
        <h2>
          <span>Digital Marketing</span> Services in France
        </h2>
        <p>More Traffic = More Leads = More Sales with Digital Marketing !!</p>
      </div>
      <div className="homeServiceContent">
        {card.map((x) => (
          <div className="homeServiceCard" key={x.id}>
            <div className="homeServiceCardContent1">
              <Image src={x.img} alt={x.head1} loading="lazy" />
            </div>
            <div className="homeServiceCardContent2">
              <h5>{x.head1}</h5>
              <h3>{x.head2}</h3>
            </div>
            <div className="homeServiceCardContent3">
              <p>{x.para}</p>
            </div>
            <div className="homeServiceCardContent4">
              <Link href={x.link}>
                {" "}
                <button>
                  {" "}
                  <FaArrowRight className="servArrow" />
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranceService;
