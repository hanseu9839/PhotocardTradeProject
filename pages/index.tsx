import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import MainCategory from "@/components/home/MainCategory";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME | 포토카드 거래 사이트</title>
      </Head>
      <div>
        <MainCategory></MainCategory>
      </div>
    </>
  );
};

export default Home;
