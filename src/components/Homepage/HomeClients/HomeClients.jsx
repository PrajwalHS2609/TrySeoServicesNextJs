"use client";
import React, { useEffect, useState } from "react";
import "./HomeClients.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newLyf from "./../../../Img/clients/NewLyf-OverSeas.png";
import prizma from "./../../../Img/clients/Prizma-Academy.png";
import unichrone from "./../../../Img/clients/Unichrone.png";
import goodway from "./../../../Img/clients/Goodway-Attestation.png";
import gvg from "./../../../Img/clients/DrGVG-Aesthetic-Clinics.png";
import active4 from "./../../../Img/clients/Activ4Pets.png";
import kingsClub from "./../../../Img/clients/Kings-Club.png";
import boutique from "./../../../Img/clients/Mayukha-Boutique.png";
import rbc from "./../../../Img/clients/RBC-Paramedical-College.png";
import arra from "./../../../Img/clients/Arrasuites.png";
import mm from "./../../../Img/clients/MM.png";
import scent from "./../../../Img/clients/Scent.png";
import buildurspace from "./../../../Img/clients/BuildUrSpace.png";
import twirl from "./../../../Img/clients/twirl.png";
import nisarga from "./../../../Img/clients/Nisarga.png";
import Image from "next/image";
const HomeClients = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth > 768); // Adjust the width as needed
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="websiteClient">
      <div className="websiteClientHead">
        <h6>CLIENT</h6>
        <h2>
          <span>Success Stories:</span> Our Clients, Our Pride​
        </h2>
      </div>{" "}
      <div className="websiteClientMain">
        <div className="websiteClientMainContent">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="1s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="item">
                <Image src={newLyf} alt="newLyf" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={prizma} alt="prizma" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image
                  src={unichrone}
                  alt="unichrone"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={goodway} alt="goodway" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={gvg} alt="gvg" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={nisarga} alt="nisarga" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={active4} alt="" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={kingsClub} alt="" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={boutique} alt="boutique" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={rbc} alt="rbc" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={arra} alt="arra" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={mm} alt="mm" />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={scent} alt="scent" width={200} height={200} />
              </div>
            </div>
            <div>
              <div className="item">
                <Image
                  src={buildurspace}
                  alt="buildurspace"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div>
              <div className="item">
                <Image src={twirl} alt="twirl" width={200} height={200} />
              </div>
            </div>
          </Carousel>
        </div>
      </div>{" "}
    </div>
  );
};

export default HomeClients;
