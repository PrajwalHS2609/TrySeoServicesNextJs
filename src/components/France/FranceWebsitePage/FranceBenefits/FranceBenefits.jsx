"use client";
import React from "react";

import {
  FaAddressBook,
  FaChartLine,
  FaClock,
  FaFaceSmile,
  FaHandshake,
  FaHeadphonesSimple,
  FaIndianRupeeSign,
  FaTurnUp,
} from "react-icons/fa6";
const FranceBenefits = () => {
  const card = [
    {
      id: 1,
      icon: <FaClock />,
      title: "Online Presence 24/7",
      description:
        "Having a website means that customers can discover you anytime and from anywhere. Even outside of business hours, your site remains a magnet for attracting and retaining new clients. It offers users the convenience of accessing the information they need right from the comfort of their own homes.",
    },
    {
      id: 2,
      icon: <FaHandshake />,
      title: "Market Expansion",
      description:
        "Since your website is accessible to people globally, overcoming geographic barriers has become simpler than ever. Individuals from any nation can discover your business, which in turn increases the chances of them becoming potential customers.",
    },
    {
      id: 3,
      icon: <FaChartLine />,
      title: "Assists Keep Up with Competitors",
      description:
        "Our web design service in France offers an easier way to handle customer service. You may lessen customer support costs and save time and money by offering answers to frequently asked questions in a FAQ section, as well as providing much more information. This also implies that customers will receive a response immediately, saving time and promoting great customer relations in the long run.",
    },
    {
      id: 4,
      icon: <FaHeadphonesSimple />,
      title: "Online Customer Service",
      description:
        "Our web design service in Bangalore offers an easier way to handle customer service. You may lessen customer support costs and save time and money by offering answers to frequently asked questions in a FAQ section, as well as providing much more information. This also implies that customers will receive a response immediately, saving time and promoting great customer relations in the long run.",
    },
    {
      id: 5,
      icon: <FaFaceSmile />,
      title: "Provides a Better First Impression",
      description:
        "A professionally designed website leaves a lasting positive impression on visitors, reflecting credibility and trustworthiness, while poorly designed sites risk appearing amateurish and diminishing your brand’s reputation.",
    },
    {
      id: 6,
      icon: <FaIndianRupeeSign />,
      title: "Boosts Revenue",
      description:
        "A sleek, professionally designed website attracts more visitors, boosts engagement, and drives higher revenue, turning your online presence into a powerful engine for business growth.",
    },
    {
      id: 7,
      icon: <FaAddressBook />,
      title: "Enhances Search Rankings",
      description:
        "An outdated or unprofessional website can hurt your search rankings. Investing in a professional website design ensures your site stays competitive and continues to rise in search engine results.",
    },
    {
      id: 8,
      icon: <FaTurnUp />,
      title: "Establishes Consistent Brand Identity",
      description:
        "Building a consistent brand identity is key to credibility and trust. A professional website brings your brand story to life, engaging your audience and reinforcing your business’s reliability.",
    },
  ];
  return (
    <div className="websiteServiceBenefits-container">
      <div className="websiteServiceBenefit-head">
        <h2>
          Transform Your Brand with a Cutting-Edge <span>Website</span>
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

export default FranceBenefits;
