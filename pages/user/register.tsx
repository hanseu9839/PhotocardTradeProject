import Head from "next/head";
import React from "react";
import RegisterInput from "@/components/user/registerInput";

const Login = () => (
  <>
    <Head>
      <title>Regi | NEXT REALWORLD</title>
      <meta
        name="description"
        content="Please login to use fully-featured next-realworld site. (Post articles, comments, and like, follow etc.)"
      />
    </Head>
    <RegisterInput></RegisterInput>
  </>
);

export default Login;
