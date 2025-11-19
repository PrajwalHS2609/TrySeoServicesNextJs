"use client";
import React, { useState } from "react";
import BlogSideBar from "./../BlogPage/BlogSideBar/BlogSideBar";
import BlogAuthor from "./../BlogPage/BlogAuthor/BlogAuthor";
import { PortableText, PortableTextBlock } from "next-sanity";
import { portableTextComponents } from "../PortableTextComponents";
import Image from "next/image";
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type PostContentType = {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export default function PostContent({ content }: { content: PostContentType }) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;
  //   const [index, setIndex] = useState(0);

  //   const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  return (
    <div className="slug-container">
      <div className="blog-wrapper1">
        {imageUrl && <img src={imageUrl} alt={content.title}/>}
        <div className="blog-content">
          <h1>{content.title}</h1>
          <>
            <PortableText
              value={content.body}
              components={portableTextComponents}
            />
            {youtubeUrl && (
              <div className="youtube-container">
                <iframe
                  width="100%"
                  height="500"
                  src={
                    youtubeUrl.includes("youtu.be")
                      ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                      : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
                  }
                  title={content.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <BlogAuthor />
          </>
        </div>
      </div>
      <div className="blog-wrapper2">
        <BlogSideBar />
      </div>
    </div>
  );
}
