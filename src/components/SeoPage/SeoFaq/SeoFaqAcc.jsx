"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "@/components/HomeFaq/HomeFaq.css";
const SeoFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>
              1. What are SEO services and why does my business in Bangalore
              need them?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO services help your website rank higher on Google so customers
              can find you easily. For Bangalore businesses, SEO increases
              visibility in a highly competitive market and drives organic
              leads.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>
              2. How long does it take to see results from SEO services in
              Bangalore?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO is a long-term strategy. Most businesses start seeing
              improvements within 3–4 months, while strong rankings and
              consistent leads usually develop in 6–9 months.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>
              3. Are SEO services in Bangalore suitable for small businesses?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. SEO is highly effective for small businesses as it brings
              targeted traffic at a lower cost than paid ads and helps compete
              with larger brands locally.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>
              4. What is included in professional SEO services in Bangalore?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO services typically include keyword research, on-page
              optimization, technical SEO, content creation, local SEO, link
              building, and regular performance reporting.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>5. How does local SEO help my Bangalore-based business?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Local SEO helps your business appear in Google Maps and “near me”
              searches, attracting customers from your surrounding areas who are
              actively looking for your services.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>
              6. Will SEO services help my website get more leads or sales?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. SEO focuses on attracting users who are already searching for
              your products or services, which leads to higher-quality traffic
              and better conversion rates.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>7. Is SEO better than Google Ads for long-term growth?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO provides long-term, sustainable results, while Google Ads stop
              generating traffic once the budget ends. Many businesses use SEO
              for stability and ads for short-term campaigns.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <h5>8. How much do SEO services in Bangalore usually cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO pricing varies based on competition, goals, and website
              condition. Most Bangalore businesses invest in monthly SEO
              packages tailored to their needs and growth plans.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h5>9. Can my existing website be optimized for SEO?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. In most cases, your current website can be optimized through
              technical fixes, content improvements, and keyword targeting
              without needing a complete redesign.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h5>
              10. How do I know if my SEO service provider is delivering
              results?{" "}
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A good SEO agency provides monthly reports showing keyword
              rankings, website traffic, leads, and performance insights,
              ensuring transparency and measurable progress.{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SeoFaqAcc;
