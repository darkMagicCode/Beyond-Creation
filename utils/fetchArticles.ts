export const fetchArticles = async (url: string) => {
  if (!url) {
    throw new Error("Missing URL environment variable");
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data;
};

export const fetchCategoryWithArticles = async (section: string) => {
  const baseUrl = process.env.NEXT_API_NEWS;
  const host = process.env.NEXT_API_HOST;

  if (!baseUrl || !host) {
    throw new Error(
      "Missing environment variables for fetching category articles"
    );
  }

  const url = `${baseUrl}${section}${host}`;
  const data = await fetchArticles(url);

  return data.response.results;
};
