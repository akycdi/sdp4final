import { NEWS_API_KEY } from "./config";

const p = 'https://api.codetabs.com/v1/proxy?quest='
export const getBitcoinArticles = async () => {
  const response = await fetch(
    `${p}https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};

export const getArticles = async topic => {
  const response = await fetch(
    `${p}https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};
