import React, { Suspense } from "react";
import "./SocialMediaPage.css";
import HomeTestimonial from './../Homepage/HomeTestimonial/HomeTestimonial';
import SocialMediaFaq from "./SocialMediaFaq/SocialMediaFaq";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import SocialMediaServiceHead from "./SocialMediaService/SocialMediaServiceHead";
import SocialMediaServiceSubHead from "./SocialMediaService/SocialMediaServiceSubHead";
import SocialMediaServiceBenefits from "./SocialMediaService/SocialMediaServiceBenefits";
import SocialMediaPackage from "./SocialMediaService/SocialMediaPackage";
import ServiceHeader from "../ServiceHeader/ServiceHeader";
import ServiceBook from "./../ServiceSidebar/ServiceBook";
import ServiceSidebarBrochure from "../ServiceSidebar/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../ServiceSidebar/ServiceSidebarLinks";

const SocialMediaPage = () => {
  return (
    <div className="socialMediaPage">
      <ServiceHeader
        vid="/Vid/SEOSocialMedia.mp4"
        beforeTitle="We Boost Your "
        highlight="Brand Visibility "
        afterTitle=""
        para="In the ever-evolving digital landscape, social media has emerged as a powerful tool for businesses to connect with their audience, build brand awareness, and drive real results. Bangalore, known as India’s Silicon Valley, is at the forefront of this digital revolution. In the heart of this tech-savvy city, Tryservice.com is your trusted partner for navigating the dynamic world of social media marketing."
      />{" "}
      <BreadCrumb txt="Social Media " />
      <div className="component-container">
        <div className="component-main">
          <SocialMediaServiceHead />
          <div className="component-mainContent">
            <SocialMediaServiceSubHead />
            <SocialMediaServiceBenefits />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <HomeTestimonial />
      <SocialMediaPackage />
      <SocialMediaFaq />
    </div>
  );
};

export default SocialMediaPage;
