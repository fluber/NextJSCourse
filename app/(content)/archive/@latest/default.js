import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <div className="latest-news">
      <h1>Latest News</h1>
      <NewsList news={latestNews} />:console.warn();
    </div>
  );
}