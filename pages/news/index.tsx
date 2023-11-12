import type { NextPage } from "next";
import Link from "next/link";

const News: NextPage = () => {
  const newsPage = [
    { id: "first-news", name: "First News" },
    { id: "second-news", name: "Second News" },
  ];
  return (
    <>
      <h1>News Page</h1>
      <ul>
        {newsPage.map((page) => (
          <li key={page.id}>
            <Link
              href={{ pathname: "/news/[newsId]", query: { newsId: page.id } }}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default News;
