import React from "react";
import "./BreadCrumb.css";
import { FaHouse } from "react-icons/fa6";
import Link from "next/link";
const BreadCrumb = (props) => {
  return (
    <div className="breadCrumb">
      <h6>
        {" "}
        <Link href={`/`}>
          <FaHouse className="contactHouse" />
          Home
        </Link>{" "}
        /<span>{props.txt}</span>
      </h6>
    </div>
  );
};

export default BreadCrumb;
