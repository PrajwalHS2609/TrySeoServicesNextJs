import React from "react";
import { FaPenToSquare, FaRectangleAd, FaUsersLine } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";

const SmsService = () => {
  const card = [
    { id: 1, icon: <FaPenToSquare/>, title: "Campaign Creation" },
    { id: 2, icon: <FaUsersLine/>, title: "Segmentation" },
    { id: 3, icon: <FaRectangleAd/>, title: "A/B Testing" },
    { id: 4, icon: <AiOutlineLineChart/>, title: "Analytics and Reporting" },
  ];
  return (
    <div className="service-container">
      <h2>Comprehensive SMS & WhatsApp Marketing Services</h2>
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

export default SmsService;
