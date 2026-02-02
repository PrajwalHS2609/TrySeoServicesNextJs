import React from "react";
import './Loader.css'
const Loader = () => {
  return (
 <div className="loader-wrapper" aria-label="Loading">
      <div className="pulse-bars">
        <span></span><span></span><span></span>
      </div>
      {/* <p className="loader-text">Optimizing experience…</p> */}
    </div>
  );
};

export default Loader;
