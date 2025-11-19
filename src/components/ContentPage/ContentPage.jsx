import React from "react";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import "./ContentPage.css";
import ContentFaq from "./ContentFaq/ContentFaq";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ContentServicePackage from "./ContentService/ContentServicePackage";
import ContentServiceWhy from "./ContentService/ContentServiceWhy";
import ContentServiceBenefits from "./ContentService/ContentServiceBenefits";
import ContentServiceSubHead from "./ContentService/ContentServiceSubHead";
import ContentServiceHead from "./ContentService/ContentServiceHead";
import ServiceSidebarBrochure from "./../ServiceSidebar/ServiceSidebarBrochure";
import ServiceSidebarLinks from "./../ServiceSidebar/ServiceSidebarLinks";
import ServiceBook from "./../ServiceSidebar/ServiceBook";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

const ContentPage = () => {
  return (
    <div className="contentPage">
      <ServiceHeader
        vid="/Vid/SEOContentWriting.mp4"
        beforeTitle="We Craft Your "
        highlight="Digital "
        afterTitle="Presence"
        para="For High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
      />{" "}
      <BreadCrumb txt="Content Writing" />
      <div className="component-container">
        <div className="component-main">
          <ContentServiceHead />
          <div className="component-mainContent">
            <ContentServiceSubHead />
            <ContentServiceWhy />
            <ContentServiceBenefits />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <ContentServicePackage />
      <HomeTestimonial />
      <ContentFaq />
    </div>
  );
};

export default ContentPage;
