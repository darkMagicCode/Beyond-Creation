"use client";
import React, { useEffect } from "react";
import styles from "./CategoryArticles.module.css";
import { Article } from "./Article";
import gsap from "gsap";
interface CategoryArticlesProps {
  articles: any;
}

export function CategoryArticles({
  articles = "default value",
}: CategoryArticlesProps) {
  const categoryArticles = articles.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      categoryArticles.forEach((item:any, index:any) => {
        gsap.fromTo(
          `.${categoryArticles[0].sectionName}-${index}`,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: `.${categoryArticles[0].sectionName}-${index}`,
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
  }, [categoryArticles]);
  return (
    <div className="py-6 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {categoryArticles[0].sectionName}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categoryArticles.map((post: any, index: any) => (
            <div key={index} className={`${categoryArticles[0].sectionName}-${index}`}>
              <Article key={post.id} post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
