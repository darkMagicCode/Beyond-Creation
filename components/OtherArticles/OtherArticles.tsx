import React from "react";

import styles from "./OtherArticles.module.css";
import Image from "next/image";

export interface OtherArticlesProps {
  articles?: any;
}

export function OtherArticles({
  articles = "default value",
}: OtherArticlesProps) {
  const mainData = articles.articles.slice(10, 13);

  return (
    <section className="article-container">
      {mainData.map((article: any , index : any) => (
        <div key={index} className=" min-h-[300px]	">
          <Image
          className=" object-cover"
            alt=""
            src={article.urlToImage}
            width={150}
            height={200}
          />
          <div className="article-text">
            <h1>0{index+1}</h1>
            <h3>{article.title}</h3>
            <p>{article.description.split(' ').slice(0, 6).join(' ')}....</p>
          </div>
        </div>
      ))}
   
    </section>
  );
}
