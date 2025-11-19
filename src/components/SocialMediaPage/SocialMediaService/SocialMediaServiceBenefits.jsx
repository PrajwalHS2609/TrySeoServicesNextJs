import React from "react";
import {
  FaEarthAmericas,
  FaHashtag,
  FaIndianRupeeSign,
  FaPeopleArrows,
  FaPhoneVolume,
  FaThumbsUp,
} from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";

const SocialMediaServiceBenefits = () => {
  const card = [
    {
      id: 1,
      icon: <FaPeopleArrows />,
      title: "Increased Brand Awareness",
      description:
        "Social media platforms provide a vast audience for small businesses to showcase their products or services. By maintaining an active presence, you can increase brand visibility and recognition.",
    },
    {
      id: 2,
      icon: <FaHashtag />,
      title: "Targeted Marketing",
      description:
        "Social media platforms allow businesses to target specific demographics, interests, and behaviors. This ensures that your marketing efforts reach the most relevant audience.",
    },
    {
      id: 3,
      icon: <FaIndianRupeeSign />,
      title: "Cost-Effective",
      description:
        "Social media advertising is often more cost-effective than traditional advertising channels. Small businesses with limited budgets can still achieve significant results through targeted ads.",
    },
    {
      id: 4,
      icon: <FaThumbsUp />,
      title: "Engagement and Interaction",
      description:
        "Social media fosters engagement and interaction with your audience. Responding to comments, messages, and feedback can help build relationships and trust with customers.",
    },
    {
      id: 5,
      icon: <FaPhoneVolume />,
      title: "Lead Generation",
      description:
        "Many social platforms offer lead generation tools, helping businesses gather valuable contact information for potential customers.",
    },
    {
      id: 6,
      icon: <FaChartPie />,
      title: "Measurable Results",
      description:
        "Social media marketing provides detailed analytics, enabling businesses to measure the performance of their campaigns and adjust strategies accordingly.",
    },
    {
      id: 7,
      icon: <FaEarthAmericas />,
      title: "Global Reach",
      description:
        "Social media has a global reach, allowing small businesses to expand their customer base beyond their immediate locality.",
    },
  ];

  return (
    <div className="serviceBenefits-container">
      <div className="serviceBenefit-head">
        <h2>Benefits of Social Media Marketing Services</h2>
      </div>
      {card.map((x) => (
        <div className="serviceBenefits-card" key={x.id}>
          <span className="serviceBenefits-cardIcon">{x.icon}</span>{" "}
          <div className="serviceBenefits-cardContent">
            <h3>{x.title}</h3>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaServiceBenefits;
