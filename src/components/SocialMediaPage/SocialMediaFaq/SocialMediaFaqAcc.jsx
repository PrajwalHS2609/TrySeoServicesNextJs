"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "@/components/HomeFaq/HomeFaq.css";

const SocialMediaFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>
              1. What is Social Media Marketing and how can it help my business
              in Bangalore?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Social Media Marketing helps your business reach local Bangalore
              customers, build brand awareness, generate leads, and increase
              sales through platforms like Instagram, Facebook, and LinkedIn.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>
              2. Which social media platforms are best for businesses in
              Bangalore?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The best platforms depend on your business type. Instagram and
              Facebook work well for local services and B2C brands, while
              LinkedIn is ideal for B2B and professional services.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>3. How much does Social Media Marketing in Bangalore cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The cost varies based on platforms, content volume, and
              advertising budget. Most businesses in Bangalore start with
              affordable monthly packages that scale as results improve.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>
              4. How long does it take to see results from Social Media
              Marketing?{" "}
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Basic engagement improves within a few weeks, while consistent
              leads and brand growth typically take 2–3 months with regular
              posting and optimized ad campaigns.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>
              5. Can Social Media Marketing help generate real leads and
              inquiries?{" "}
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. With targeted ads, local audience reach, and
              conversion-focused content, Social Media Marketing in Bangalore
              can deliver quality leads and inquiries consistently.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>6. Do I need paid ads or is organic posting enough?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Organic posting builds brand trust, but paid ads are essential for
              faster reach, local visibility, and lead generation in a
              competitive market like Bangalore.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>
              7. Is Social Media Marketing suitable for small and local
              businesses?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Absolutely. Local businesses benefit greatly from social media by
              reaching nearby customers, promoting offers, and building
              relationships within the Bangalore community.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <h5>8. What type of content works best on social media?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Educational posts, short videos, customer testimonials, local
              updates, offers, and engaging visuals perform best for Social
              Media Marketing in Bangalore.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h5>9. How do I measure the success of Social Media Marketing?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Success is measured through reach, engagement, leads, website
              visits, ad performance, and return on investment, all tracked
              through detailed monthly reports.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            <h5>
              10. Why should I hire a professional Social Media Marketing agency
              in Bangalore?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A professional agency saves time, ensures consistent posting, runs
              optimized ads, tracks performance, and helps your business grow
              faster with expert strategies.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SocialMediaFaqAcc;
