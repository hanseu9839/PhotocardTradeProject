import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { mutate } from "swr";
import api from "../../API/user/userApi";
import LoginForm from "@/components/user/loginForm";
import Header from "@/components/common/header";

const Login = () => {
  return (
    <>
      <Header titleText="LOGIN"></Header>
      <LoginForm></LoginForm>
    </>
  );
};

export default Login;
