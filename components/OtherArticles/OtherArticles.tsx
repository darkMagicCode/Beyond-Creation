"use client";
import React, { useEffect } from "react";

import styles from "./OtherArticles.module.css";
import Image from "next/image";
import gsap from "gsap";

export interface OtherArticlesProps {
  articles?: any;
}

export function OtherArticles({
  articles = "default value",
}: OtherArticlesProps) {
  const mainData = articles.articles.slice(10, 13);
  useEffect(() => {
    const ctx = gsap.context(() => {
      mainData.forEach((item:any, index:any) => {
        gsap.fromTo(
          `.articles-${index}`,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: `.articles-${index}`,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, [mainData]);
  return (
    <section className="article-container">
      {mainData.map((article: any, index: any) => (
        <div key={index} className={` min-h-[300px] articles-${index}	`}>
          <Image
            className=" object-cover"
            alt=""
            src={article.urlToImage}
            width={150}
            height={200}
          />
          <div className="article-text">
            <h1>0{index + 1}</h1>
            <h3>{article.title}</h3>
            <p>{article.description.split(" ").slice(0, 6).join(" ")}....</p>
          </div>
        </div>
      ))}
    </section>
  );
}
