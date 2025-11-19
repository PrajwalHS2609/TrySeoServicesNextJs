"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./HomeFaq.css";
import homeFaq from "./../../Img/homePgImgs/homeFaq.jpg";
import Image from "next/image";
const HomeFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <div className="homeFaqHead">
          <h6>F.A.Q</h6>
          <h2>Most Trending & Popular Question</h2>
        </div>
        <div className="homeFaqAcc">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Why should I choose TrySeoService?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Choosing the best SEO Agency means research, research and more
                  research. Checking through reviews, team credentials, and
                  getting proposals and audits.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5> Why is SEO Link Building Important?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Choosing the best SEO Agency means research, research and more
                  research. Checking through reviews, team credentials, and
                  getting proposals and audits.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h5>Why is keyword research so important?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Choosing the best SEO Agency means research, research and more
                  research. Checking through reviews, team credentials, and
                  getting proposals and audits.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h5> Best SEO Practices for High Quality Content?</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Choosing the best SEO Agency means research, research and more
                  research. Checking through reviews, team credentials, and
                  getting proposals and audits.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className="homeFaqContent2">
        <Image src={homeFaq} alt="homeFaq" width={200} height={200} />
      </div>
    </div>
  );
};

export default HomeFaq;
