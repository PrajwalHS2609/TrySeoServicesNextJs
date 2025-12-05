import WebsitePage from './../../../components/WebsitePage/WebsitePage';
import FranceBenefits from './../../../components/France/FranceWebsitePage/FranceBenefits/FranceBenefits';
import FranceWebsiteFaq from './../../../components/France/FranceWebsitePage/FranceWebsiteFaq/FranceWebsiteFaq';
import ServiceHeader from '../../../components/ServiceHeader/ServiceHeader';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import WebsiteServiceSubHead from '../../../components/WebsitePage/WebsiteService/WebsiteServiceSubHead';
import ServiceSidebarBrochure from '../../../components/ServiceSidebar/ServiceSidebarBrochure';
import ServiceSidebarLinks from '../../../components/ServiceSidebar/ServiceSidebarLinks';
import WebsitePackage from '../../../components/WebsitePage/WebsitePackage/WebsitePackage';
import WebsiteServiceHead from '../../../components/WebsitePage/WebsiteService/WebsiteServiceHead';
import ServiceBook from '../../../components/ServiceSidebar/ServiceBook';
import FranceHowItWorks from '../../../components/France/FranceWebsitePage/FranceHowItWorks/FranceHowItWorks';

export const metadata = {
  title: "Website Designing Services in Bangalore for Small Business",
  description: "Website Designing Services in Bangalore for Small Business. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking.",
  canonical: "https://tryseoservices.com/website-designing-services-in-bangalore",
  keywords: [
    "Marketing Strategy,Analysis,SEO,Marketing",
    "Digital Marketing,Business Solutions,",
  ],
};
export default function Website(){
    return(
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
            <FranceHowItWorks />
            <FranceBenefits />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <WebsitePackage />
      <FranceWebsiteFaq />
    </div>
    )
}