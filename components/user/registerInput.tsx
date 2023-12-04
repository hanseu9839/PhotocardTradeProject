import React, { useEffect, useState, useRef } from "react";
import api from "../../API/api";

const RegisterInput = () => {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhonenumber, setUserPhonenumber] = useState("");
  const handleUserId = (e: any) => {
    setUserId(e.target.value);
  };
  const handleEmail = (e: any) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setUserPassword(e.target.value);
  };
  const handlePhonenumber = (e: any) => {
    setUserPhonenumber(e.target.value);
  };

  const handleSubmit = async () => {
    await api.member(userId, userPassword, userEmail, userPhonenumber);
  };

  return (
    <>
      <div className="pl-4 pt-28 text-center">
        <p className=" text-5xl italic font-bold text-center">Sign Up</p>
        <div>
          <input
            className="border-2 w-[30%] mt-10 mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="아이디"
            onChange={handleUserId}
            type="text"></input>
        </div>
        <div>
          <input
            className="border-2 w-[20%] mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="이메일"
            onChange={handleEmail}
            type="email"></input>
          <button className="w-[10%]">이메일 인증</button>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="비밀번호"
            onChange={handlePassword}
            type="Password"></input>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="휴대폰번호"
            onChange={handlePhonenumber}
            type="text"></input>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-10 text-xl rounded-xl px-3 py-2"
            placeholder="비밀번호 확인"
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

export default RegisterInput;
