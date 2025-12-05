import React, { Suspense } from "react";
import "./SeoPage.css";
import SeoService from "./SeoService/SeoService";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import HomeTestimonial from './../Homepage/HomeTestimonial/HomeTestimonial';
import SeoServiceHead from "./SeoService/SeoServiceHead";
import SeoServiceSubHead from "./SeoService/SeoServiceSubHead";
import SeoServiceBenefits from "./SeoService/SeoServiceBenefits";
import SeoPackage from "./SeoPackage/SeoPackage";
import ServiceSidebarBrochure from "./../ServiceSidebar/ServiceSidebarBrochure";
import ServiceSidebarLinks from "./../ServiceSidebar/ServiceSidebarLinks";
import ServiceHeader from "./../ServiceHeader/ServiceHeader";
import ServiceBook from "../ServiceSidebar/ServiceBook";

// import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
const SeoPage = () => {
  return (
    <div className="seoPage">
      <ServiceHeader
        vid="/Vid/SEO-banner.mp4"
        beforeTitle="We"
        highlight="Optimize"
        afterTitle="Your Growth"
        para="Our SEO experts have great innovative, responsive, and analytical skills that are all required to develop that one large plan that provides results-based performance marketing solutions"
      />
      <BreadCrumb txt="SEO" />
      <div className="component-container">
        <div className="component-main">
          <SeoServiceHead />
          <div className="component-mainContent">
            <SeoServiceSubHead />
            <SeoService />
            <SeoServiceBenefits />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <HomeTestimonial />
      <SeoPackage />
    </div>
  );
};

export default SeoPage;
