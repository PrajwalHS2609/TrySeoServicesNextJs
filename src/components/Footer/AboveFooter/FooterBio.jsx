import React from "react";
import TSS from "./../../../Img/TSS.png";
import Link from "next/link";
import Image from "next/image";
const FooterBio = () => {
  return (
    <div className="footerBio">
      <div className="footerBioImg">
        <a href="https://tryservice.com/">
          {" "}
          <Image src={TSS} alt="" />
        </a>
      </div>
      <p>
        TrySeoService Digital Marketing Agency Theme Is fully responsible, Build
        whatever you like with the TrySeoService, TrySeoService is the creative,
        modern WordPress Theme suitable for Your Business Marketing.
      </p>
      <Link href={"/contact-us"}>
        {" "}
        <button>Contact Us Now</button>
      </Link>
    </div>
  );
};

export default FooterBio;
