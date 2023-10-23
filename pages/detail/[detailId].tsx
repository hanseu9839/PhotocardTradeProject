import React from "react";
import { useRouter } from "next/router";
const Detail = () => {
  const router = useRouter();
  const detailId = router.query.detailId;

  return <>{detailId}</>;
};

export default Detail;
