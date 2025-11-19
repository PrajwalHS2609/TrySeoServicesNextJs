"use client";
import React from "react";
import "./../Footer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const FooterService = () => {
  const pathname = usePathname();

  return (
    <div className="footerService">
      <h4>Services</h4>
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
          href={`/blog`}
          className={
            pathname === "/blog"
              ? "active"
              : ""
          }
        >
          Blog{" "}
        </Link>
      </li>
    </div>
  );
};

export default FooterService;
