import Head from "next/head";
import React from "react";
import LoginInput from "@/components/user/loginInput";

const Login = () => (
  <>
    <Head>
      <title>Regi | NEXT REALWORLD</title>
      <meta
        name="description"
        content="Please login to use fully-featured next-realworld site. (Post articles, comments, and like, follow etc.)"
      />
    </Head>
    <LoginInput></LoginInput>
  </>
);

export default Login;
