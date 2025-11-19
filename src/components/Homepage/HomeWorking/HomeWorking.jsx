import React from "react";
import "./HomeWorking.css";
import { FaBriefcase, FaBinoculars, FaPlaneDeparture } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const HomeWorking = () => {
  const card = [
    {
      id: 1,
      workingCardColor: "colorOrange",
      workingStepsColor: "colorBlue",
      steps: "Step1",
      head: "Business Requirements",
      para: "Identify the company goals and how they relate to the Web presence to drive more positive and desired results for your business, like traffic, leads, and revenue.",
      cardIcon: <FaBriefcase />,
    },
    {
      id: 2,
      workingCardColor: "colorBlue",
      workingStepsColor: "colorOrange",
      steps: "Step2",
      head: "Competitor Analysis",
      para: "It’s a process of researching and analyzing the marketing strategies of the companies operating in a given market. What other brands in your niche are doing to acquire and retain customers.",
      cardIcon: <FaBinoculars />,
    },
    {
      id: 3,
      workingCardColor: "colorOrange",
      workingStepsColor: "colorBlue",
      steps: "Step3",
      head: "Building Road Map",
      para: "Acts as a solid foundation for all your online marketing efforts. It lets you plot a course for optimal growth and lays out the exact tactics to enable you to reach your goals.",
      cardIcon: <FaMapLocationDot />,
    },
    {
      id: 4,
      workingCardColor: "colorBlue",
      workingStepsColor: "colorOrange",
      steps: "Step4",
      head: "Launching Your 1st Campaign",
      para: "Setting campaign goals and objectives, Defining your target audience, Identifiying distribution channels, Allocating Budget, Tracking & Reporting.",
      cardIcon: <FaPlaneDeparture />,
    },
  ];

  return (
    <div className="homeWorking">
      <div className="homeWorkingHead">
        <h2>
          <span> Smart, Scalable, and Ready</span> – The Working Module Built
          for Every Business Need!
        </h2>
        <p>
          Unlock seamless growth with a smart, scalable working module designed
          to adapt to every business. Streamline operations, boost efficiency,
          and achieve results—no matter your industry or size.
        </p>
      </div>

      <div className="homeWorkingMain">
        {card.map((x) => (
          <div className="homeWorkingCard" key={x.id}>
            <div className="homeWorkingCard1" id={x.workingCardColor}>
              <div className="homeWorkingCardItem"></div>
              <span className="homeWorkingCardIco">{x.cardIcon}</span>
            </div>

            <div className="homeWorkingCard2">
              <h3>{x.head}</h3>
              <p>{x.para}</p>
            </div>

            <div className="homeWorkingCard3">
              <div className="homeWorkingSteps" id={x.workingStepsColor}>
                <h5>{x.steps}</h5>
              </div>
            </div>
          </div>
        ))}
        <div className="homeWorkingMainLine"></div>
      </div>
    </div>
  );
};

export default HomeWorking;
