import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const LoginInput = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const router = useRouter();
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    const email = data[0][0].email;
    const password = data[0][0].password;
    if (email == userEmail && password == userPassword) {
      router.push("/");
    } else {
      alert("회원 정보가 없습니다");
    }
  };

  return (
    <>
      <div className="pl-4 pt-28 text-center">
        <p className=" text-5xl italic font-bold text-center">Sing Up</p>
        <div>
          <input
            className="border-2 w-[30%] mt-10 mb-4 text-2xl rounded-xl px-3 py-2"
            placeholder="Email"
            onChange={handleEmail}
            type="email"></input>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-10 text-2xl rounded-xl px-3 py-2"
            placeholder="Password"
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
