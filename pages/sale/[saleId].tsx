import type { NextPage } from "next";
import { useRouter } from "next/router";
import SaleInput from "@/components/sale/SaleInput";

const Detail: NextPage = () => {
  const router = useRouter();
  const saleId = router.query.saleId;

  return (
    <>
      <p className="text-xl">{saleId}</p>
      <SaleInput></SaleInput>
    </>
  );
};

export default Detail;
