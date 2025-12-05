import React from "react";
import FranceWhatHeader from "./FranceWhatHeader";
import homeWhatWe from "./../../../../Img/homePgImgs/homeWhatWeDo.jpg";
import Image from "next/image";

const FranceWhat = () => {
  return (
    <div className="homeWhatWeContainer">
      <div className="homeWhatWeContent1">
        <FranceWhatHeader />
      </div>
      <div className="homeWhatWeContent2">
        <Image src={homeWhatWe} alt="homeWhatWe" />
      </div>
    </div>
  );
};

export default FranceWhat;
