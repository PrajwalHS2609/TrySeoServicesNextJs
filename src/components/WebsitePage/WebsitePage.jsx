import "./WebsitePage.css";
import BreadCrumb from "./../BreadCrumb/BreadCrumb";
import ServiceHeader from "./../ServiceHeader/ServiceHeader";
import WebsiteServiceHead from "./WebsiteService/WebsiteServiceHead";
import WebsiteServiceSubHead from "./WebsiteService/WebsiteServiceSubHead";
import WebsiteServiceHow from "./WebsiteService/WebsiteServiceHow";
import WebsitePackage from "./WebsitePackage/WebsitePackage";
import WebsiteFaq from "./WebsiteFaq/WebsiteFaq";
import ServiceSidebarLinks from "./../ServiceSidebar/ServiceSidebarLinks";
import ServiceSidebarBrochure from "./../ServiceSidebar/ServiceSidebarBrochure";
import WebsiteServiceBenefits from "./WebsiteService/WebsiteServiceBenefits";
import ServiceBook from "./../ServiceSidebar/ServiceBook";

const WebsitePage = () => {
  return (
    <div className="websitePage">
      <ServiceHeader
        vid="/Vid/SEOWebsiteDesign.mp4"
        beforeTitle="We Craft Your "
        highlight="Digital "
        afterTitle="Presence"
        para="For High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
      />

      <BreadCrumb txt="Website" />
      <div className="component-container">
        <div className="component-main">
          <WebsiteServiceHead />
          <div className="component-mainContent">
            <WebsiteServiceSubHead />
            <WebsiteServiceHow />
            <WebsiteServiceBenefits />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <WebsitePackage />
      <WebsiteFaq />
    </div>
  );
};

export default WebsitePage;
