import React from "react";

import styles from "./Article.module.css";
import Image from "next/image";
import { SideArticles } from "../SideArticles";

export interface ArticleProps {
  articles?: any;
}

export function Article({ articles = "default value" }: ArticleProps) {
  // console.log(articles);
  const mainData = articles.articles[7];
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
