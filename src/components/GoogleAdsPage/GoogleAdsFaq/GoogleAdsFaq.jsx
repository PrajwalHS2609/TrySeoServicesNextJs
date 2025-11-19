import React from "react";
import GoogleAdsFaqAcc from "./GoogleAdsFaqAcc";
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg";
import Image from "next/image";

const GoogleAdsFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <div className="homeFaqHead">
          <h6>F.A.Q</h6>
          <h2>Most Trending & Popular Question</h2>
        </div>{" "}
        <GoogleAdsFaqAcc />
      </div>
      <div className="homeFaqContent2">
        <Image src={homeFaq} alt="homeFaq" />
      </div>
    </div>
  );
};

export default GoogleAdsFaq;
