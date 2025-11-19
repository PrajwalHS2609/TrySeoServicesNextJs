import Image from 'next/image'
import React from 'react'
import { IoDownloadOutline } from 'react-icons/io5'
import website from "@/Img/HomeService/WebsiteDesign.png"
const ServiceSidebarBrochure = () => {
  return (
    <div className="serviceBrochure-container">
      <div className="serviceBrochure-content">
        <Image
          src={website}
          alt="website"
        />
      </div>
      <div className="serviceBrochure-content">
        <a href="/Tryservice.pdf" download>
          <div className="serviceBrochure-item">
            <p>Download Brochure</p>{" "}
            <IoDownloadOutline className="serviceBrochure-icon" />
          </div>
          {/* <div className="serviceBrochure-item"></div> */}
        </a>
      </div>
    </div>
  )
}

export default ServiceSidebarBrochure
