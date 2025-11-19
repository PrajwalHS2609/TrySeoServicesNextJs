import React from "react";
import { FaSmile } from "react-icons/fa";
import { FaArrowPointer, FaBoltLightning, FaLink } from "react-icons/fa6";

const ContentServiceWhy = () => {
  const card = [
    { id: 1, icon: <FaArrowPointer />, title: "Generates High CTR" },
    { id: 2, icon: <FaLink />, title: "Generate Backlinks" },
    {
      id: 3,
      icon: <FaBoltLightning />,
      title: "Enables you to Incorporate Keywords",
    },
    { id: 4, icon: <FaSmile />, title: "Offers a Great User Experience" },
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

export default ContentServiceWhy;
