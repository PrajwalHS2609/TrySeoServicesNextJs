import React from "react";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import EmailFaq from "./EmailFaq/EmailFaq";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import EmailPageServicesHead from "./EmailPageServices/EmailPageServicesHead";
import EmailPageServices from "./EmailPageServices/EmailPageServices";
import ServiceHeader from "../ServiceHeader/ServiceHeader";
import ServiceBook from "../ServiceSidebar/ServiceBook";
import ServiceSidebarBrochure from "../ServiceSidebar/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../ServiceSidebar/ServiceSidebarLinks";
import EmailPageServicesSubHead from "./EmailPageServices/EmailPageServicesSubHead";

const EmailPage = () => {
  return (
    <div className="homePageContainer">
      <ServiceHeader
        vid="/Vid/SEOEmailMarketing.mp4"
        beforeTitle="We"
        highlight="Deliver Your Message "
        afterTitle=", Right on Time"
        para="In today’s digital age, businesses in Bangalore are continually seeking innovative ways to connect with their audience, expand their reach, and increase brand visibility. Among the various digital marketing strategies available, email marketing services have proven to be a reliable and effective tool for achieving these goals. Let’s explore the significance and impact of email marketing services in the vibrant city of Bangalore."
      />
      <BreadCrumb txt="Email" />
      <div className="component-container">
        <div className="component-main">
          <EmailPageServicesHead />
          <div className="component-mainContent">
            <EmailPageServicesSubHead/>
            <EmailPageServices />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <HomeTestimonial />
      <EmailFaq />
    </div>
  );
};

export default EmailPage;
