"use client";
import React from "react";

import "./BlogAuthor.css";
import { PortableText } from "@portabletext/react";
import "./BlogAuthor.css";
import { useEffect } from "react";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { client } from "@/sanity/client";

export default function BlogAuthor() {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"] {
  _id,
  name,
  designation,
 slug,
"bio": bio[]{..., asset->},
  mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }

}`
      )
      .then((data) => {
        console.log("Fetched author:", data); // 🔍 Add this
        setAuthor(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="blogAuthorContainer">
      {author.map((author) => (
        <div key={author._id}>
          <div className="blogAuthorContent">
            <div className="blogAuthorImg">
              {author.mainImage?.asset?.url && (
                <img
                  src={author.mainImage.asset.url}
                  alt={author.name || "Author image"}
                />
              )}
            </div>
            <div className="blogAuthorName">
              <h4>{author.designation}</h4>
              <h3>{author.name}</h3>
            </div>
          </div>
          <div className="blogAuthorContent">
            <p>
              {" "}
              <PortableText value={author.bio} />
            </p>
          </div>
          <div className="blogAuthorSocial">
            <a href="https://www.instagram.com/">
              <FaInstagram className="authorSocialIcon" />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="authorSocialIcon" />
            </a>
            <a href="https://x.com/">
              <FaXTwitter className="authorSocialIcon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
