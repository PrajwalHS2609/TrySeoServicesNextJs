import React from "react";
import ContactUsHeader from "./ContactUsHeader";
import "./ContactUs.css";
import ContactUsAddress from "./ContactUsAddress";
import ContactUsMap from "./ContactUsMap";
import ContactUsForm from "./ContactUsForm";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const ContactUs = () => {
  return (
    <div>
      <ContactUsHeader />
      <BreadCrumb txt="Contact Us" />

      <div className="contactUsWrapper">
        <div className="contactUsContent1">
          <ContactUsAddress />
        </div>
        <div className="contactUsContent2">
          <ContactUsForm />
        </div>
      </div>
      <ContactUsMap />
    </div>
  );
};

export default ContactUs;
