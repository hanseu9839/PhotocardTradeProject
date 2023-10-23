import type { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();
  const infoId = router.query.infoId;

  return (
    <>
      <p className="text-xl">{infoId}</p>
    </>
  );
};

export default Detail;
