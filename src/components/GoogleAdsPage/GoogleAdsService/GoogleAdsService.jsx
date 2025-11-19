import React from "react";
import {
  FaBrain,
  FaIndianRupeeSign,
  FaMagnifyingGlass,
  FaRectangleAd,
  FaRectangleList,
  FaShoePrints,
  FaUserSecret,
  FaWrench,
} from "react-icons/fa6";
const GoogleAdsService = () => {
  const card = [
    {
      id: 1,
      icon: <FaMagnifyingGlass />,
      title: "Keyword Research and Selection",
    },
    { id: 2, icon: <FaRectangleAd />, title: "Competitive Research" },
    { id: 3, icon: <FaUserSecret />, title: "Text and Image Ads Creation" },
    { id: 4, icon: <FaBrain />, title: "Ideas to Optimize Landing Pages" },
    { id: 5, icon: <FaIndianRupeeSign />, title: "PPC Cost Management" },
    {
      id: 6,
      icon: <FaWrench />,
      title: "Ad Campaign Modification and Improvements",
    },
    { id: 7, icon: <FaShoePrints />, title: "Conversion Tracking" },
    { id: 8, icon: <FaRectangleList />, title: "Monthly Performance Report" },
  ];
  return (
    <div className="service-container">
      {card.map((x) => (
        <div className="service-card" key={x.id}>
          <span className="service-cardIcon">{x.icon}</span>{" "}
          <div className="service-cardContent">
            <h3>{x.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleAdsService;
