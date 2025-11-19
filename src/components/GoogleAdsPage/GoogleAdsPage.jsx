import React from "react";
import GoogleAdsService from "./GoogleAdsService/GoogleAdsService";
import GoogleAdsFaq from "./GoogleAdsFaq/GoogleAdsFaq";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import GoogleAdsPackage from "./GoogleAdsPackage/GoogleAdsPackage";
import GoogleAdsServiceHead from "./GoogleAdsService/GoogleAdsServiceHead";
import GoogleAdsServiceBenefits from "./GoogleAdsService/GoogleAdsServiceBenefits";
import GoogleAdsServiceSubHead from "./GoogleAdsService/GoogleAdsServiceSubHead";
import ServiceHeader from "./../ServiceHeader/ServiceHeader";
import ServiceSidebarBrochure from "../ServiceSidebar/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../ServiceSidebar/ServiceSidebarLinks";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBook from "../ServiceSidebar/ServiceBook";

const GoogleAdsPage = () => {
  return (
    <div className="GoogleAdsPage">
      <ServiceHeader
        vid="/Vid/SEOGoogleAds.mp4"
        beforeTitle="We Drive Results with"
        highlight="Precision "
        afterTitle=""
        para="We assists you in ranking your company, products, and services on the first pages of Google search results. Because search engines have become an integral element of the modern consumer’s buying process, an increasing number of businesses are opting to invest in Google Ads."
      />

      <BreadCrumb txt="Google Ads" />
      <div className="component-container">
        <div className="component-main">
          <GoogleAdsServiceHead />
          <div className="component-mainContent">
            <GoogleAdsServiceSubHead />
            <GoogleAdsService />
            <GoogleAdsServiceBenefits />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <GoogleAdsPackage />
      <HomeTestimonial />
      <GoogleAdsFaq />
    </div>
  );
};

export default GoogleAdsPage;
