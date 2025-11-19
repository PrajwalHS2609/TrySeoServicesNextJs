import React from "react";
import {
  FaAddressBook,
  FaChartLine,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import {
  FaFaceSmile,
  FaHeadphonesSimple,
  FaIndianRupeeSign,
  FaTurnUp,
} from "react-icons/fa6";

const WebsiteServiceBenefits = () => {
  const card = [
    {
      id: 1,
      icon: <FaClock/>,
      title: "Online Presence 24/7",
      description:
        "If you have a website, customers can find you at any time and from any location. Even after business hours, your website continues to attract and keep new clients. It provides convenience to the user because they can obtain the information they require from the comfort of their own home.",
    },
    {
      id: 2,
      icon: <FaHandshake/>,
      title: "Market Expansion",
      description:
        "Because your website is available to anyone in the world, breaking down geographic boundaries has never been easier. Anyone, from any country, will be able to find your business and, as a result, become a potential customer.",
    },
    {
      id: 3,
      icon: <FaChartLine/>,
      title: "Assists Keep Up with Competitors",
      description:
        "To stay ahead of the competition, our website development in Bangalore designs you'll your website that's up to date on design trends.",
    },
    {
      id: 4,
      icon: <FaHeadphonesSimple/>,
      title: "Online Customer Service",
      description:
        "Our web design service in Bangalore offers an easier way to handle customer service. You may lessen customer support costs and save time and money by offering answers to frequently asked questions in a FAQ section, as well as providing much more information. This also implies that customers will receive a response immediately, saving time and promoting great customer relations in the long run.",
    },
    {
      id: 5,
      icon: <FaFaceSmile/>,
      title: "Provides a Better First Impression",
      description:
        "Having a properly designed website means that visitors will have a good impression of your site. Amateur websites may give the impression of being unprofessional and untrustworthy..",
    },
    {
      id: 6,
      icon: <FaIndianRupeeSign/>,
      title: "Boosts Revenue",
      description:
        "Having a properly designed website means that visitors will have a good impression of your site. Amateur websites may give the impression of being unprofessional and untrustworthy.",
    },
    {
      id: 7,
      icon: <FaAddressBook/>,
      title: "Enhances Search Rankings",
      description:
        "An out-of-date and unprofessional website will only affect your search ranking performance, so it's important to invest in a professional website design so that your website can continue to climb the search engine ranks.",
    },
    {
      id: 8,
      icon: <FaTurnUp/>,
      title: "Establishes Consistent Brand Identity",
      description:
        "Creating a consistent brand identity is essential for establishing business credibility and reliability, and having a professional website may help you express your brand's story more effectively.",
    },
  ];
  return (
    <div className="websiteServiceBenefits-container">
      <div className="websiteServiceBenefit-head">
        <h2>
          Benefits of <span>SEO Services</span>
        </h2>
      </div>
      {card.map((x) => (
        <div className="websiteServiceBenefits-card" key={x.id}>
          <span className="websiteServiceBenefits-cardIcon">{x.icon}</span>{" "}
          <div className="websiteServiceBenefits-cardContent">
            <h3>{x.title}</h3>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsiteServiceBenefits;
