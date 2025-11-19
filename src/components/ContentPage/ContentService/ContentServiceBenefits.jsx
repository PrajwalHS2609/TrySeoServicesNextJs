import React from "react";
import {
  FaHandshake,
  FaLocationArrow,
  FaMagnifyingGlass,
  FaMicrophone,
  FaPhone,
} from "react-icons/fa6";

const ContentServiceBenefits = () => {
  const card = [
    {
      id: 1,
      icon: <FaMagnifyingGlass />,
      title: "Increases Search Engine Optimization (SEO)",
      description:
        "SEO is the method of boosting the traffic your website acquires from search engines. The best way to improve your SEO is to hire freelance content writing in Bangalore to create SEO-friendly content.",
    },
    {
      id: 2,
      icon: <FaHandshake />,
      title: "Boost in Sales",
      description:
        "The consumer's decision-making process will be influenced by good content. Whether you're running an eCommerce or service-based business, well-written content can help you sell your product by presenting it in the best possible way.",
    },
    {
      id: 3,
      icon: <FaMicrophone />,
      title: "A Voice for your Brand",
      description:
        "Your website will reflect your business, allowing customers to understand more about you and what you represent as a business. Maintaining a consistent voice across your website and other digital marketing content will help you establish a strong brand image in your customers' minds.",
    },
    {
      id: 4,
      icon: <FaPhone />,
      title: "Boost Conversation Rates",
      description:
        "A well-written, engaging piece of content will help you ensure that the person completes the survey. The conversation rate is the percentage of visitors to your website who complete a specific goal.",
    },
    {
      id: 5,
      icon: <FaLocationArrow />,
      title: "Reach New Audiences",
      description:
        "Engaging, well-written content will always succeed, especially if you use a few SEO-friendly content development tactics.",
    },
  ];
  return (
    <div className="serviceBenefits-container">
      <div className="serviceBenefit-head">
        <h2>Benefits of Content Writing Services</h2>
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

export default ContentServiceBenefits;
