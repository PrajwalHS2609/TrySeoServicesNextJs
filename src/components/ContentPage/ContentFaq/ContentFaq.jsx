import React from "react";
import ContentFaqAcc from "./ContentFaqAcc";
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg";

const ContentFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
      <div className="homeFaqHead">
          <h6>F.A.Q</h6>
          <h2>Most Trending & Popular Question</h2>
        </div>{" "}
        <ContentFaqAcc />
      </div>
      <div className="homeFaqContent2">
        <img src={homeFaq} alt="homeFaq" loading="lazy" />
      </div>
    </div>
  );
};

export default ContentFaq;
