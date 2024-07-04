import React from "react";

import styles from "./SideArticles.module.css";

export interface SideArticlesProps {
  prop?: string;
}

export function SideArticles({ prop = "default value" }: SideArticlesProps) {
  return (
    <aside className="">
      <h1>New</h1>
      <div>
        <h2>Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>
        <h2>The Downsides of AI Artistry</h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h2>Is VC Funding Drying Up?</h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
}
