'use client'
import React, { useEffect } from "react";

import styles from "./Article.module.css";
import Image from "next/image";
import { SideArticles } from "../SideArticles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export interface ArticleProps {
  articles?: any;
}
gsap.registerPlugin(ScrollTrigger);

export function Article({ articles = "default value" }: ArticleProps) {
  // console.log(articles);
  const mainData = articles.articles[7];
  useEffect(() => {
    const ctx = gsap.context(() => {
      ['featured-img', 'featured-text', 'cta'].forEach((item, index) => {
        gsap.fromTo(
          `.${item}`,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: `.${item}`,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section className="featured">
      <Image
        alt="web3"
        className="featured-img"
        src={mainData.urlToImage}
        width={500}
        height={500}
      />
      <h1 className="featured-text">{mainData.title}</h1>
      <div className="cta">
        <p>
         {mainData.description}
        </p>
        <a href={mainData.url}>Read more</a>
      </div>

    </section>
  );
}
