import HomeHeader from "./../components/Homepage/HomeHeader/HomeHeader";
import HomeAbout from "./../components/Homepage/HomeAbout/HomeAbout";
import HomeService from "./../components/Homepage/HomeService/HomeService";
import HomeMarquee from "./../components/Homepage/HomeMarquee/HomeMarquee";
import HomeWorking from "./../components/Homepage/HomeWorking/HomeWorking";
import HomeWhatWe from "./../components/Homepage/HomeWhatWe/HomeWhatWe";
import HomeFocused from "./../components/Homepage/HomeFocused/HomeFocused";
import HomeTestimonial from "./../components/Homepage/HomeTestimonial/HomeTestimonial";
import HomeClients from "./../components/Homepage/HomeClients/HomeClients";
import HomeFaq from "./../components/HomeFaq/HomeFaq";
export const metadata = {
  title: "Digital Marketing Services in Bangalore, India for Small Business",
  description: "Digital Marketing Services in Bangalore for Small Business. For High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking.",
  canonical: "https://tryseoservices.com/",
  keywords: [
    "Marketing Strategy,Analysis,SEO,Marketing",
    "Digital Marketing,Business Solutions,",
  ],
};
export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeService />
      <HomeAbout />
      <HomeMarquee />
      <HomeWorking />
      <HomeFocused />
      <HomeWhatWe />
      <HomeClients />
      <HomeTestimonial />
      <HomeFaq />
    </div>
  );
}
