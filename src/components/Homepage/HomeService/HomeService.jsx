import React from "react";
import seoMag from "./../../../Img/HomeService/SEOMag.png";
import adsServ from "./../../../Img/HomeService/adsService.png";
import webDesign from "./../../../Img/HomeService/WebsiteDesign.png";
import content from "./../../../Img/HomeService/Content.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import "./HomeService.css"
import Image from "next/image";
const HomeService = () => {
  const card = [
    {
      id: 1,
      img: seoMag,
      head1: "Google & Bing",
      head2: "SEO",
      para: "Transform your online presence into a growth engine! Smart SEO strategies boost your visibility, increase conversions, and take your brand straight to the top of search results — where real success begins.",
      link: "/seo-services-in-bangalore",
    },
    {
      id: 2,
      img: adsServ,
      head1: "Search, Display & Video",
      head2: "Google Ads",
      para: "Your ad budget deserves results, not guesses! We fine-tune every Google Ads campaign with laser-focused keyword strategies that attract real buyers and deliver measurable growth for your business.",
      link: "/google-ads-service-in-bangalore",
    },
    {
      id: 3,
      img: webDesign,
      head1: "Product & Services",
      head2: "Website Design",
      para: "From smartphones to desktops, we make your brand look stunning everywhere! Our responsive web design ensures effortless browsing, smooth navigation, and pixel-perfect performance across every screen size.",
      link: "/website-designing-services-in-bangalore",
    },
    {
      id: 4,
      img: content,
      head1: "SEO & Promotion",
      head2: "Content Writing",
      para: "Content isn’t just king — it’s the heartbeat of your digital empire. Powerful words and strategic storytelling build the strong online presence your brand deserves, ruling the search results with authority.",
      link: "/content-writing-service-in-bangalore",
    },
  ];

  return (
    <div className="homeService">
      <div className="homeServiceHead" id="Services">
        <h6> OUR SERVICES </h6>
        <h2>
          Transform Clicks into Customers with <br /> Powerful{" "}
          <span>Digital Marketing</span>{" "}
        </h2>
        <p>More Traffic = More Leads = More Sales with Digital Marketing !!</p>
      </div>{" "}
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

export default HomeService;
