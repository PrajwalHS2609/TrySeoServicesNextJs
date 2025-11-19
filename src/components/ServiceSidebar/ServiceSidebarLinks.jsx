"use client";
import React from "react";
import "./ServiceSidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ServiceSidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="serviceSideBarLinks">
      <li>
        <Link href={`/`}  className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href={`/website-designing-services-in-bangalore`}
          className={
            pathname === "/website-designing-services-in-bangalore"
              ? "active"
              : ""
          }
        >
          Website
        </Link>
      </li>
      <li>
        <Link
          href={`/seo-services-in-bangalore`}
          className={pathname === "/seo-services-in-bangalore" ? "active" : ""}
        >
          SEO
        </Link>
      </li>
      <li>
        <Link
          href={`/google-ads-service-in-bangalore`}
          className={
            pathname === "/google-ads-service-in-bangalore" ? "active" : ""
          }
        >
          Google Ads
        </Link>
      </li>
      <li>
        <Link
          href={`/social-media-marketing-services-in-bangalore`}
          className={
            pathname === "/social-media-marketing-services-in-bangalore"
              ? "active"
              : ""
          }
        >
          Social Media Marketing
        </Link>
      </li>
      <li>
        <Link
          href={`/content-writing-service-in-bangalore`}
          className={
            pathname === "/content-writing-service-in-bangalore" ? "active" : ""
          }
        >
          Content Writing
        </Link>
      </li>
      <li>
        <Link
          href={`/payment-gateway-service-in-bangalore`}
          className={
            pathname === "/payment-gateway-service-in-bangalore" ? "active" : ""
          }
        >
          Payment Gateway
        </Link>
      </li>
      <li>
        <Link
          href={`/email-marketing-service-in-bangalore`}
          className={
            pathname === "/email-marketing-service-in-bangalore" ? "active" : ""
          }
        >
          Email Marketing
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href={`/sms-and-whatsapp-marketing-services-in-bangalore`}
          className={
            pathname === "/sms-and-whatsapp-marketing-services-in-bangalore"
              ? "active"
              : ""
          }
        >
          SMS & WhatsApp Marketing
        </Link>
      </li>
    </div>
  );
};

export default ServiceSidebarLinks;
