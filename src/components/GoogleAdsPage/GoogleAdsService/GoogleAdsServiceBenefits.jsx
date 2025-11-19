import React from "react";
import {
  FaBullhorn,
  FaChartBar,
  FaEarthAmericas,
  FaEnvelope,
  FaPeopleArrows,
} from "react-icons/fa6";

const GoogleAdsServiceBenefits = () => {
  const card = [
    {
      id: 1,
      icon: <FaPeopleArrows />,
      title: "Boost Brand Awareness",
      description:
        "Because the top positions on search engine result pages acquire the majority of impressions and clicks, ranking in these positions can result in massive traffic improvements for your website.",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Reach Greater Client through their Gmail Inbox",
      description:
        "When it comes to ROI, SEO gives trackable and quantifiable results. Our effective SEO services in Bangalore enable you to monitor almost every aspect of your SEO campaign, including rankings, traffic, and conversions.",
    },
    {
      id: 3,
      icon: <FaEarthAmericas />,
      title: "Reconnect with Site Visitors of your Website",
      description:
        "SEO enables you to target customers who are actively looking for your products and services online. It generates more qualified visitors than many other marketing tactics, resulting in cost savings for businesses.",
    },
    {
      id: 4,
      icon: <FaBullhorn />,
      title: "Remarketing on the Show Network",
      description:
        "SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines.",
    },
    {
      id: 5,
      icon: <FaChartBar />,
      title: "Brand Awareness",
      description:
        "As the top position rankings generate considerable impressions, having your website in these top positions on the result pages means more visibility.",
    },
  ];
  return (
    <div className="serviceBenefits-container">
      <div className="serviceBenefit-head">
        <h2>
          Benefits of <span>SEO Services</span>
        </h2>
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

export default GoogleAdsServiceBenefits;
