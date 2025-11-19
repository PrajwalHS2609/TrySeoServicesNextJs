import React from "react";
import "./ContactUs.css";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const ContactUsAddress = () => {
  return (
    <div className="contactUsAddress">
      <h6>CONTACT DETAILS</h6>
      <h3>Main Office</h3>
      <p>
        Give us a call or drop by anytime, we endeavour to answer all enquiries
        within 24 hours on business days. We will be happy to answer your
        questions.
      </p>
      <li>
        <FaLocationDot className="footerAdd" />
        <p>
          513, 4th C Main Rd, near Bandhan Bank, HRBR Layout 2nd Block, HRBR
          Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
        </p>
      </li>{" "}
      <li>
        {" "}
        <FaPhoneVolume className="footerAdd" />
        <p>
          <a href="tel:6360226773"> +91 6360226773</a>
        </p>
      </li>
      <li>
        {" "}
        <FaEnvelope className="footerAdd" />
        <p>
          <a href="mailto:info@tryservice.com">info@tryservice.com</a>
        </p>
      </li>
    </div>
  );
};

export default ContactUsAddress;
