import Script from "next/script";
import WebsitePage from "./../../components/WebsitePage/WebsitePage";
export const metadata = {
  title: "Website Designing Services in Bangalore for Small Business",
  description:
    "Website Designing Services in Bangalore for Small Business. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking.",
  canonical:
    "https://tryseoservices.com/website-designing-services-in-bangalore",
  keywords: [
    "Marketing Strategy,Analysis,SEO,Marketing",
    "Digital Marketing,Business Solutions,",
  ],
};
export default function Website() {
  return (
    <>
      <Script
        id="website-designing-services-in-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does website design in Bangalore cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Website design costs in Bangalore depend on features, pages, and customization. Basic websites are affordable, while advanced SEO-optimized sites cost more.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to design a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most websites are completed within 10 to 25 working days, depending on complexity, content readiness, and approvals.",
                },
              },
              {
                "@type": "Question",
                name: "Will my website be mobile-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Professional website design includes fully responsive layouts that work seamlessly on mobile, tablet, and desktop devices.",
                },
              },
              {
                "@type": "Question",
                name: "Is SEO included in website design?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. SEO-friendly structure is included to help your website load faster and perform better in Google search results.",
                },
              },
              {
                "@type": "Question",
                name: "Can the website be customized for my business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Websites are fully customized based on your business type, branding, target audience, and goals.",
                },
              },
              {
                "@type": "Question",
                name: "Can I update my website myself after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Most websites are built on user-friendly platforms that allow easy content updates without technical knowledge.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide support after the website goes live?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Post-launch support and maintenance services are available to keep your website secure and updated.",
                },
              },
              {
                "@type": "Question",
                name: "Can my existing website be redesigned?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Existing websites can be redesigned to improve design, performance, mobile usability, and SEO.",
                },
              },
              {
                "@type": "Question",
                name: "Will my website load fast?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Websites are optimized for speed and performance following Google Core Web Vitals guidelines.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose a local website design company in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A local website design company understands the Bangalore market, audience behavior, and local SEO requirements.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <WebsitePage />
      </div>
    </>
  );
}
