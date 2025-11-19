import React, { Suspense } from "react";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import SmsService from "./SmsService/SmsService";
import SmsFaq from "./SmsFaq/SmsFaq";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import SmsServiceHead from "./SmsService/SmsServiceHead";
import SeoServiceBook from "../SeoPage/SeoService/SeoServiceBook";
import SmsServiceSubHead from "./SmsService/SmsServiceSubHead";
import ServiceHeader from "./../ServiceHeader/ServiceHeader";
import ServiceSidebarBrochure from "../ServiceSidebar/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../ServiceSidebar/ServiceSidebarLinks";
import ServiceBook from "../ServiceSidebar/ServiceBook";

const SmsPage = () => {
  return (
    <div className="homePageContainer">
      <ServiceHeader
        vid="/Vid/SEOwhatsapp.mp4"
        beforeTitle="We "
        highlight="Bring You Closer"
        afterTitle="to Your Customers"
        para="In the bustling city of Bangalore, where innovation and technology converge, businesses are constantly on the lookout for new and effective ways to connect with their audience. Enter TrySEOServices.com, your digital marketing ally, here to shine a light on how our SMS and WhatsApp Marketing Services in Bangalore are transforming the way businesses engage, inform, and drive growth in this vibrant tech hub."
      />
      <BreadCrumb txt="SMS & WhatsApp" />
      <div className="component-container">
        <div className="component-main">
          <SmsServiceHead />
          <div className="component-mainContent">
            <SmsServiceSubHead />
            <SmsService />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
        <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <HomeTestimonial />
      <SmsFaq />{" "}
    </div>
  );
};

export default SmsPage;
