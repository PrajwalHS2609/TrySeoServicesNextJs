import React from "react";
import "./BlogPage.css";
import Link from "next/link";
import Image from "next/image";
const BlogCard = (props) => {
  return (
    <div className="blogCard">
      <div className="blogImg">
        <Image src={props.img} alt={props.alt} />
      </div>
      <h4 className="blogCardH4">{props.head}</h4>
      <p>{props.para}</p>
      <div className="blogBtn">
        <Link href={props.link}>
          <button>Read More </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
