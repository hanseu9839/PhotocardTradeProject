import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const RegisterInput = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const user: any = [
    {
      name: userName,
      email: userEmail,
      password: userPassword,
    },
  ];
  let newjson: any = [];

  const handleSubmit = () => {
    if (localStorage.getItem("user")) {
      JSON.parse(localStorage.getItem("user"));
      let newjson = JSON.parse(localStorage.getItem("user"));
      newjson.push(user);
      console.log(newjson);
      localStorage.setItem("user", JSON.stringify(newjson));
    } else {
      newjson.push(user);
      localStorage.setItem("user", JSON.stringify(newjson));
    }
  };

  return (
    <>
      <div className="pl-4 pt-28 text-center">
        <p className=" text-5xl italic font-bold text-center">Sing Up</p>
        <div>
          <input
            className="border-2 w-[30%] mt-10 mb-4 text-2xl rounded-xl px-3 py-2"
            placeholder="Username"
            onChange={handleUserName}
            type="text"></input>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-4 text-2xl rounded-xl px-3 py-2"
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

export default RegisterInput;
