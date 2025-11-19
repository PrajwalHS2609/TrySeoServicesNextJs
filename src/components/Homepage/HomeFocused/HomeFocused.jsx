import React from "react";
import "./HomeFocused.css";
import {
  FaStethoscope,
  FaHospital,
  FaBed,
  FaMugHot,
  FaDumbbell,
  FaPlane,
  FaPassport,
  FaBookOpen,
  FaChild,
  FaChalkboard,
  FaSpa,
  FaCar,
  FaGem,
  FaCamera,
  FaShoppingBag,
} from "react-icons/fa";
import {
  FaCakeCandles,
  FaChampagneGlasses,
  FaHouseChimney,
  FaPersonSwimming,
  FaScrewdriverWrench,
} from "react-icons/fa6";

const HomeFocused = () => {
  const icons = [
    { id: 1, icon: <FaStethoscope />, txt: "Vet & Doctors" },
    { id: 2, icon: <FaHospital />, txt: "Clinic & Hospitals" },
    { id: 3, icon: <FaBed />, txt: "Hotel & Resorts" },
    { id: 4, icon: <FaMugHot />, txt: "Cafe & Restaurants" },
    { id: 5, icon: <FaPersonSwimming />, txt: "Gym & Yoga Center" },
    { id: 6, icon: <FaDumbbell />, txt: "Tour & Travels" },
    { id: 7, icon: <FaPlane />, txt: "Visa & Attestations" },
    { id: 8, icon: <FaPassport />, txt: "School & Colleges" },
    { id: 9, icon: <FaBookOpen />, txt: "Kidergartens" },
    { id: 10, icon: <FaChild />, txt: "Coaching Institute" },
    { id: 11, icon: <FaChalkboard />, txt: "" },
    { id: 12, icon: <FaSpa />, txt: "" },
    { id: 13, icon: <FaCar />, txt: "" },
    { id: 14, icon: <FaScrewdriverWrench />, txt: "" },
    { id: 15, icon: <FaCakeCandles />, txt: "" },
    { id: 16, icon: <FaChampagneGlasses />, txt: "" },
    { id: 17, icon: <FaGem />, txt: "" },
    { id: 18, icon: <FaCamera />, txt: "" },
    { id: 19, icon: <FaHouseChimney />, txt: "" },
    { id: 20, icon: <FaShoppingBag />, txt: "" },
  ];
  return (
    <div className="homeFocused">
      <div className="homeServiceHead" id="Services">
        <h2>
          <span>SEO</span> Strategies Designed for Your Growth!
        </h2>
        <p>
          Maximize your business impact with SEO strategies designed to boost
          visibility, connect with your ideal audience, and deliver real,
          measurable growth. Smart, precise, and results-focused—SEO made to
          succeed for you!
        </p>
      </div>
      <div className="homeFocusedMain">
        {icons.map((x) => (
          <div className="homeFocusedCard" key={x.id}>
            <span className="homeFocusCardIco">{x.icon}</span>
            <h6>{x.txt}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFocused;
