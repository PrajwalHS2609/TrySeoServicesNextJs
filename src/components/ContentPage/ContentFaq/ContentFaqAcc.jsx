"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "@/components/HomeFaq/HomeFaq.css";

const ContentFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>1. What does content writing service in Bangalore include?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Content writing in Bangalore includes website content, SEO blogs,
              service pages, landing pages, social media content, and marketing
              copy tailored to your business goals.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>2. How does professional content writing help my business?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Professional content improves search rankings, builds trust,
              attracts the right audience, increases engagement, and helps
              convert visitors into leads and customers.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>3. Is SEO included in content writing services?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, SEO is a key part of content writing in Bangalore. Content is
              written with keyword research, search intent, headings, and
              optimization best practices.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>4. How much does content writing in Bangalore cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Pricing depends on content type, word count, research level, and
              frequency. Many agencies offer flexible packages for startups and
              businesses.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>5. Will the content be original and plagiarism-free?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, professional content writing services provide 100% original,
              plagiarism-free content tailored specifically to your brand and
              audience.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>6. How long does it take to deliver content?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Delivery time varies by project size, but most website pages or
              blog articles are delivered within 3–7 working days.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>7. Can content be written for my specific industry?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, content writing services in Bangalore cater to multiple
              industries including healthcare, education, IT, real estate, and
              professional services.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <h5>8. Do you provide revisions after content delivery?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Most content writing services offer free revisions to ensure the
              content meets your expectations and business objectives.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h5>9. Will the content help my website rank on Google?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              When combined with proper SEO strategy, quality content
              significantly improves Google rankings, organic traffic, and
              online visibility.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            <h5>
              10. Why should I choose a Bangalore-based content writing service?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A Bangalore-based service understands local markets, competitive
              landscapes, and global standards, offering content that works both
              locally and internationally.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ContentFaqAcc;
