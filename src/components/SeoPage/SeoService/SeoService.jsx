import React from "react";
import {
  FaBinoculars,
  FaChartLine,
  FaHandshake,
  FaTrafficLight,
} from "react-icons/fa6";

const SeoService = () => {
  const card = [
    { id: 1, icon: <FaBinoculars />, title: "Visibility & Rankings" },
    { id: 2, icon: <FaTrafficLight />, title: "Web Traffic" },
    { id: 3, icon: <FaHandshake />, title: "Trustworthy" },
    { id: 4, icon: <FaChartLine />, title: "Growth" },
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

export default SeoService;
