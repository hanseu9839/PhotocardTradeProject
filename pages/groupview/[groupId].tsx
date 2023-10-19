import type { NextPage } from "next";
import { useRouter } from "next/router";
import MainCategory from "@/components/home/MainCategory";

const Detail: NextPage = () => {
  const router = useRouter();
  const groupId = router.query.groupId;

  const onPageLoadHandler = () => {
    router.push("/");
  };
  return (
    <>
      <MainCategory></MainCategory>
      <h1>dd</h1>
      <p className="text-xl">{groupId}</p>
      <button onClick={onPageLoadHandler}>Go To home</button>
    </>
  );
};

export default Detail;
