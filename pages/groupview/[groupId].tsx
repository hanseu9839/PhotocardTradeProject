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
    </>
  );
};

export default Detail;
