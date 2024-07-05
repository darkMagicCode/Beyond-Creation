import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  post: any;
}

export function Article({ post }: ArticleProps) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between shadow-md p-6 cursor-pointer">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={""} className="text-gray-500">
          {new Date(post.webPublicationDate).toLocaleDateString()}
        </time>
        <Link
          href={post.webUrl}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {post.sectionName}
        </Link>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={post.webUrl}>
            <span className="absolute inset-0" />
            {post.webTitle}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.webTitle}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <Image
          width={40}
          height={40}
          src={"https://dummyimage.com/70x70.jpg?text=T"}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link href={post.webUrl}>
              <span className="absolute inset-0" />
              {post.sectionName}
            </Link>
          </p>
          {/* <p className="text-gray-600">{'post.sectionName'}</p> */}
        </div>
      </div>
    </article>
  );
}
