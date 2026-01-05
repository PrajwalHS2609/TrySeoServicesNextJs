"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "@/components/HomeFaq/HomeFaq.css";
const WebsiteAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>1. How much does website design in Bangalore cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Website design costs in Bangalore vary based on features, pages,
              and customization. Basic websites start affordably, while
              advanced, SEO-optimized websites cost more depending on business
              requirements.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>2. How long does it take to design a website?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Most websites are completed within 10–25 working days, depending
              on design complexity, content readiness, and feedback cycles.{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>3. Will my website be mobile-friendly?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. Professional website design in Bangalore includes fully
              responsive design that works smoothly on mobiles, tablets, and
              desktops.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>4. Is SEO included in website design?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO-friendly structure is included. This helps your website load
              faster, rank better on Google, and attract organic traffic.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>5. Can you customize the website for my business?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Absolutely. Website design is fully customized based on your
              business type, branding, target audience, and goals.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>6. Will I be able to update my website myself?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. Most websites are built on user-friendly platforms that allow
              you to easily update text, images, and pages without technical
              skills.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>8. Can you redesign my existing website?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. Existing websites can be redesigned to improve appearance,
              performance, mobile usability, and SEO rankings.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <h5>9. Will my website load fast?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. Websites are optimized for speed, performance, and Google
              Core Web Vitals for a better user experience.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h5>
              10. Why should I choose a local website design company in
              Bangalore?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A local website design company understands the Bangalore market,
              audience behavior, and local SEO, helping your business grow
              faster online.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default WebsiteAcc;
