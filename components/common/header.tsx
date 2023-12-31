import React from "react";
import Head from "next/head";

const Header = ({ titleText }: any) => (
  <>
    <Head>
      <title>{titleText} | 포토카드 거래</title>
    </Head>
  </>
);

export default Header;
