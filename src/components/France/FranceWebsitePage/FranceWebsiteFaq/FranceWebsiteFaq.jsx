import React from 'react'
import FranceWebsiteFaqHead from './FranceWebsiteFaqHead'
import homeFaq from "./../../../../Img/homePgImgs/homeFaq.jpg";
import FranceWebsiteFaqAcc from './FranceWebsiteFaqAcc';
import Image from 'next/image';

const FranceWebsiteFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <FranceWebsiteFaqHead />
        <FranceWebsiteFaqAcc />
      </div>
      <div className="homeFaqContent2">
        <Image src={homeFaq} alt="homeFaq"  />
      </div>
    </div>
  )
}

export default FranceWebsiteFaq
