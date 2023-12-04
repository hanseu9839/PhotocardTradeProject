import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import api from "../../API/api";

const LoginInput = () => {
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const router = useRouter();

  const handleID = (e: any) => {
    setUserID(e.target.value);
  };
  const handlePassword = (e: any) => {
    setUserPassword(e.target.value);
  };
  const handleSubmit = async () => {
    const loginResult: any = await api.login(userID, userPassword);
    const logindata: any = loginResult.data.data;
    localStorage.setItem("accessToken", logindata.accessToken);
    localStorage.setItem("refreshToken", logindata.refreshToken);
    localStorage.setItem("userID", logindata.userId);
    router.push("/");
  };

  return (
    <>
      <div className="pl-4 pt-28 text-center">
        <p className=" text-5xl italic font-bold text-center">Sign Up</p>
        <div>
          <input
            className="border-2 w-[30%] mt-10 mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="아이디"
            onChange={handleID}
            type="text"></input>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-10 text-xl rounded-xl px-3 py-2"
            placeholder="비밀번호"
            onChange={handlePassword}
            type="Password"></input>
        </div>
        <div className="w-[65%] flex justify-end">
          <button
            onClick={handleSubmit}
            className=" bg-black text-white rounded-md px-3 py-1.5 ">
            <p className="text-xl font-extralight">Sign up</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginInput;
