"use client"

import { PortableText, PortableTextBlock } from "next-sanity";
import React, { useState } from "react";
import SanityHeader from "./SanityHeader/SanityHeader";
import { portableTextComponents } from "../PortableTextComponents";

export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: { cells: string[] }[];
};

export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};

export type ServiceContentType = {
  _id: string;
  title: string;
  slug: string | { current: string };
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
};
export default function ServiceContent({
  content,
}: {
  content: ServiceContentType;
}) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  const resolvedSlug =
    typeof content.slug === "string" ? content.slug : content.slug?.current;

  return (
    <div className="slug-container">
      <div className="slugService-container">
        {imageUrl && (
          <SanityHeader
            img={imageUrl}
            alt={content.title}
            head={content.title}
          />
        )}
        <div className="slugService-content">
          <h1>{content.title}</h1>
          {content.body1 && (
            <PortableText
              value={content.body1}
              components={portableTextComponents}
            />
          )}
          {/* ✅ YouTube Video Section */}
          {youtubeUrl && (
            <div className="youtube-container">
              <iframe
                width="100%"
                height="500"
                src={
                  youtubeUrl.includes("youtu.be")
                    ? `https://www.youtube.com/embed/${
                        youtubeUrl.split("/").pop()?.split("?")[0]
                      }`
                    : `https://www.youtube.com/embed/${
                        youtubeUrl.split("v=")[1]?.split("&")[0]
                      }`
                }
                title={content.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {content.body2 && (
            <>
              <PortableText
                value={content.body2}
                components={portableTextComponents}
              />

              {/* ✅ Custom Table */}
              {content.customTable && (
                <div className="custom-table">
                  {content.customTable.title && (
                    <h3>{content.customTable.title}</h3>
                  )}
                  <table className="customTable-table">
                    <thead>
                      <tr>
                        {content.customTable.headers?.map((header, idx) => (
                          <th key={idx}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {content.customTable.rows?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.cells.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
