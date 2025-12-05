import React from "react";
import { FaComputerMouse, FaEarthAmericas, FaMobileScreen, FaShieldHalved } from "react-icons/fa6";
const FranceHowItWorks = () => {
    const card = [
      { id: 1, icon: <FaShieldHalved />, title: "A Solid Website" },
      { id: 2, icon: <FaComputerMouse />, title: "Usability" },
      { id: 3, icon: <FaEarthAmericas />, title: "Build Trust" },
      { id: 4, icon: <FaMobileScreen />, title: "Mobile Design" },
    ];
  return (
    <div className="websiteServiceHow-container">
      {card.map((x) => (
        <div className="websiteServiceHow-card" key={x.id}>
          <span className="websiteServiceHow-cardIcon">{x.icon}</span>{" "}
          <div className="websiteServiceHow-cardContent">
            <h3>{x.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FranceHowItWorks;
