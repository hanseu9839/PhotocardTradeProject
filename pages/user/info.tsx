import Head from "next/head";
import React from "react";
import Userinfo from "@/components/user/userinfo";

const Info = () => (
  <>
    <Head>
      <title>Regi | NEXT REALWORLD</title>
      <meta
        name="description"
        content="Please login to use fully-featured next-realworld site. (Post articles, comments, and like, follow etc.)"
      />
    </Head>
    <Userinfo></Userinfo>
  </>
);

export default Info;
