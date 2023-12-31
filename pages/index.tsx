import type { NextPage } from "next";
import React from "react";
import MainCategory from "@/components/home/MainCategory";
import Header from "@/components/common/header";

const Home: NextPage = () => {
  return (
    <>
      <Header titleText="HOME"></Header>
      <div>
        <MainCategory></MainCategory>
      </div>
    </>
  );
};

export default Home;
