import type { NextPage } from "next";
import { useRouter } from "next/router";
import SaleInput from "@/components/sale/SaleInput";

const Detail: NextPage = () => {
  const router = useRouter();
  const saleId = router.query.saleId;
  const onPageLoadHandler = () => {
    router.push("/");
  };

  return (
    <>
      <p className="text-xl">{saleId}</p>
      <SaleInput></SaleInput>
    </>
  );
};

export default Detail;
