import type { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  const onPageLoadHandler = () => {
    router.push("/news");
  };
  return (
    <>
      <h1>Detail Page</h1>
      <p className="text-xl">{newsId}</p>
      <button onClick={onPageLoadHandler}>Go To News Page</button>
    </>
  );
};

export default Detail;
