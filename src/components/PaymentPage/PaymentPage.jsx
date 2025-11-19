import React from "react";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import PaymentFaq from "./PaymentFaq/PaymentFaq";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import PaymentServiceHead from "./PaymentService/PaymentServiceHead";
import PaymentServiceSubHead from "./PaymentService/PaymentServiceSubHead";
import PaymentServiceFactors from "./PaymentService/PaymentServiceFactors";
import ServiceHeader from "../ServiceHeader/ServiceHeader";
import ServiceSidebarBrochure from "../ServiceSidebar/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../ServiceSidebar/ServiceSidebarLinks";
import ServiceBook from "../ServiceSidebar/ServiceBook";

const PaymentPage = () => {
  return (
    <div className="homePageContainer">
      <ServiceHeader
        vid="/Vid/SEOPaymentGateway.mp4"
        beforeTitle="We Simplify Your "
        highlight="Payments "
        afterTitle=""
        para="Look no further! Our payment gateway solutions are tailored to meet your business needs, ensuring secure and seamless transactions. Trust us for a smooth payment experience."
      />{" "}
      <BreadCrumb txt="Payment Gateway" />
      <div className="component-container">
        <div className="component-main">
          <PaymentServiceHead />
          <div className="component-mainContent">
            <PaymentServiceSubHead />
            <PaymentServiceFactors />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <HomeTestimonial />
      <PaymentFaq />
    </div>
  );
};

export default PaymentPage;
