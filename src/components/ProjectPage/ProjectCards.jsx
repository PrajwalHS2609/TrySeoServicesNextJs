import React from "react";
import "./ProjectPage.css";
import Image from "next/image";
import project1 from "../../Img/Projects/ForeignEmbassy.png";
import project2 from "../../Img/Projects/Petsclinc.png";
// import project3 from "../../Img/Projects/ForeignEmbassy.png";

import Link from "next/link";
const ProjectCards = () => {
  const card = [
    {
      img: project1,
      title: "Foreign Embassy Attestation",
      link: "https://foreignembassyattestation.com/"
    },
    {
      img: project2,
      title: "Pets Clinic",
      link: "https://petclinics.co.in/"
    },
  ];
  return (
    <div className="projectCard-container">
      {card.map((x, id) => (
        <Link href={x.link} key={id}>
          <div className="projectCard-content">
            <div className="projectCard-cover">
              <h4>{x.title}</h4>
            </div>

            <Image src={x.img} alt={x.title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;
