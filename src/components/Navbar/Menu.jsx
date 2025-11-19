"use client";
import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Link from "next/link";
import menuBar from "@/Img/menu.png";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Menu = () => {
  const pathname = usePathname();

  let [drop, setDrop] = useState(false);
  let dropRefHome = useRef();
  let dropRef = useRef();
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  let handleDropDown = () => {
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      dropRefHome.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      dropRefHome.current.style.display = "none";
      console.log("up");
    }
  };
  return (
    <div className="menuContainer">
      <div className="menuContainerList">
        <li>
          <Link href={`/`} className={pathname === "/" ? "active" : ""}>
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
            className={
              pathname === "/seo-services-in-bangalore" ? "active" : ""
            }
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
              pathname === "/content-writing-service-in-bangalore"
                ? "active"
                : ""
            }
          >
            Content Writing
          </Link>
        </li>
        <li>
          <span>
            Other Services
            <FaChevronDown className="menuNavDropIcon" />
          </span>
          <div className="dropDown" ref={dropRef}>
            <li>
              <Link
                href={`/payment-gateway-service-in-bangalore`}
                className={
                  pathname === "/payment-gateway-service-in-bangalore"
                    ? "active"
                    : ""
                }
              >
                Payment Gateway
              </Link>
            </li>
            <li>
              <Link
                href={`/email-marketing-service-in-bangalore`}
                className={
                  pathname === "/email-marketing-service-in-bangalore"
                    ? "active"
                    : ""
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
                  pathname ===
                  "/sms-and-whatsapp-marketing-services-in-bangalore"
                    ? "active"
                    : ""
                }
              >
                SMS & WhatsApp Marketing
              </Link>
            </li>
          </div>
        </li>
        <li>
          <Link
            href={`/contact-us`}
            className={pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </div>
      {/* ---------------------------respMenu------------------------------ */}
      <div className="respMenuBar">
        <Image src={menuBar} alt="menuBar" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FaX className="closeX" onClick={hideSideBar} />
          <div className="innerMenu">
            <li className="">
              <Link
                id="menuNavLink"
                href={`/`}
                onClick={hideSideBar}
                className={pathname === "/" ? "active" : ""}
              >
                Home
                <FaChevronRight className="menuNavDropIcon" />
              </Link>{" "}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/website-designing-services-in-bangalore`}
                className={
                  pathname === "/website-designing-services-in-bangalore"
                    ? "active"
                    : ""
                }
              >
                Website <FaChevronRight className="menuNavDropIcon" />
              </Link>
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/seo-services-in-bangalore`}
                className={
                  pathname === "/seo-services-in-bangalore" ? "active" : ""
                }
              >
                SEO <FaChevronRight className="menuNavDropIcon" />
              </Link>
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/google-ads-service-in-bangalore`}
                className={
                  pathname === "/google-ads-service-in-bangalore"
                    ? "active"
                    : ""
                }
              >
                Google Ads <FaChevronRight className="menuNavDropIcon" />
              </Link>
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/social-media-marketing-services-in-bangalore`}
                className={
                  pathname === "/social-media-marketing-services-in-bangalore"
                    ? "active"
                    : ""
                }
              >
                Social Media Marketing{" "}
                <FaChevronRight className="menuNavDropIcon" />
              </Link>
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/content-writing-service-in-bangalore`}
                className={
                  pathname === "/content-writing-service-in-bangalore"
                    ? "active"
                    : ""
                }
              >
                Content Writing <FaChevronRight className="menuNavDropIcon" />
              </Link>
            </li>
            <li className="">
              {" "}
              <span>
                Other Service{" "}
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={handleDropDown}
                />
              </span>
              <div className="respDropDown" ref={dropRefHome}>
                <li>
                  <Link
                    id="menuNavLink"
                    onClick={hideSideBar}
                    href={`/payment-gateway-service-in-bangalore`}
                    className={
                      pathname === "/payment-gateway-service-in-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    Payment Gateway{" "}
                    <FaChevronRight className="menuNavDropIcon" />
                  </Link>
                </li>
                <li>
                  <Link
                    id="menuNavLink"
                    onClick={hideSideBar}
                    href={`/email-marketing-service-in-bangalore`}
                    className={
                      pathname === "/email-marketing-service-in-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    Email Marketing{" "}
                    <FaChevronRight className="menuNavDropIcon" />
                  </Link>
                </li>
                <li>
                  <Link
                    id="menuNavLink"
                    onClick={hideSideBar}
                    href={`/sms-and-whatsapp-marketing-services-in-bangalore`}
                    className={
                      pathname ===
                      "/sms-and-whatsapp-marketing-services-in-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    SMS Marketing <FaChevronRight className="menuNavDropIcon" />
                  </Link>
                </li>
              </div>
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                href={`/contact-us`}
                onClick={hideSideBar}
                className={pathname === "/contact-us" ? "active" : ""}
              >
                Contact Us <FaChevronRight className="menuNavDropIcon" />
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
