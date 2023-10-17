import type { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();
  const saleId = router.query.saleId;
  const onPageLoadHandler = () => {
    router.push("/");
  };
  return (
    <>
      <h1>판매페이지</h1>
      <p className="text-xl">{saleId}</p>
      <button onClick={onPageLoadHandler}>Go To home</button>
    </>
  );
};

export default Detail;
