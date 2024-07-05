import { Article } from "@/components/Article";
import { CategoryArticles } from "@/components/CategoryArticls";
import { NavBar } from "@/components/NavBar";
import { OtherArticles } from "@/components/OtherArticles";
import { fetchArticles, fetchCategoryWithArticles } from "@/utils/fetchArticles";


export default async function Home() {
  const articles = await fetchArticles(process.env.NEXT_API_APPLE as string);
  const sections = ["technology", "food", "education", "business"];
  const categories = await Promise.all(sections.map(fetchCategoryWithArticles));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-10 min-w-screen ">
      <div>
        <NavBar />
        <main className="">
          <Article articles={articles} />
          <OtherArticles articles={articles} />
        </main>

        {categories.map((articles, index) => (
          <CategoryArticles key={sections[index]} articles={articles} />
        ))}
      </div>
    </main>
  );
}
