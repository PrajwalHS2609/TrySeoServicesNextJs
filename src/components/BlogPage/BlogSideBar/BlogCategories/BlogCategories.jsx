"use client"
import React, { useEffect, useState } from "react";
import "./../BlogSideBar.css"
import { client } from "@/sanity/client";
import Link from "next/link";
const CATEGORY_QUERY = `*[_type == "blogCategory"] | order(title asc){
  _id,
  title,
  slug
}`;

export default function BlogCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await client.fetch(CATEGORY_QUERY);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <Link href="/blog">
          <li>All</li>
        </Link>

        {categories
          .filter((category) => category.slug && category.slug.current)
          .map((category) => (
            <Link href={`/category/${category.slug.current}`} key={category._id}>
              <li key={category._id}>{category.title}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
