import { Article } from "@/components/Article";
import { CategoryArticles } from "@/components/CategoryArticls";
import { NavBar } from "@/components/NavBar";
import { OtherArticles } from "@/components/OtherArticles";

// Server Component
const fetchCategoryArticles = async () => {
  if (!process.env.NEXT_API_APPLE) {
    throw new Error("Missing NEXT_API_APPLE environment variable");
  }

  const res = await fetch(process.env.NEXT_API_APPLE);
  if (!res.ok) {
    throw new Error("Failed to fetch category articles");
  }
  // console.log(res.json());

  const data = await res.json();
  return data;
};
const fetchCategoryWithArticles = async (section: string) => {
  if (!process.env.NEXT_API_NEWS) {
    throw new Error("Missing NEXT_API_APPLE environment variable");
  }
  console.log(
    `${process.env.NEXT_API_NEWS + section + process.env.NEXT_API_HOST} `
  );

  const res = await fetch(
    `${process.env.NEXT_API_NEWS + section + process.env.NEXT_API_HOST} `
  );
  if (!res.ok) {
    throw new Error("Failed to fetch category articles");
  }
  // console.log(res.json());

  const data = await res.json();
  return data.response.results;
};

export default async function Home() {
  const categoryArticles = await fetchCategoryArticles();
  const categoryWithArticlesTechnology = await fetchCategoryWithArticles(
    "technology"
  );
  const categoryWithArticlesFood = await fetchCategoryWithArticles("food");
  const categoryWithArticlesEducation = await fetchCategoryWithArticles(
    "education"
  );
  const categoryWithArticlesBusiness = await fetchCategoryWithArticles(
    "business"
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-10 min-w-screen ">
      <div>
        <NavBar />
        <main className="">
          <Article articles={categoryArticles} />
          <OtherArticles articles={categoryArticles} />
        </main>
        <CategoryArticles articles={categoryWithArticlesTechnology} />
        <CategoryArticles articles={categoryWithArticlesFood} />
        <CategoryArticles articles={categoryWithArticlesEducation} />
        <CategoryArticles articles={categoryWithArticlesBusiness} />
        {/* <CategoryArticles /> */}
      </div>
    </main>
  );
}
