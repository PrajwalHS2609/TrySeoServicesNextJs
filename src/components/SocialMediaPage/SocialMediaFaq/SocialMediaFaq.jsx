import React from "react";
import SocialMediaFaqAcc from "./SocialMediaFaqAcc";
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg";
import Image from "next/image";

const SocialMediaFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <div className="homeFaqHead">
          <h6>F.A.Q</h6>
          <h2>Most Trending & Popular Question</h2>
        </div>{" "}
        <SocialMediaFaqAcc />
      </div>
      <div className="homeFaqContent2">
        <Image src={homeFaq} alt="homeFaq" />
      </div>
    </div>
  );
};

export default SocialMediaFaq;
