import React from "react";
import "./PopUp.css";
import PopUpForm from "./PopUpForm";
const PopUp = () => {
  return (
    <div className="popup">
      <div className="popUpContainer">
        <PopUpForm />
      </div>
    </div>
  );
};

export default PopUp;
