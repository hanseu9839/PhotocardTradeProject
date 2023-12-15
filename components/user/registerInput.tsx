import React, { useEffect, useState, useRef, useReducer } from "react";
import api from "../../API/api";
import userReducer from "@/lib/utils/userReducer";
import { useRouter } from "next/router";

const RegisterInput = () => {
  const initialState = {
    userid: "",
    useremail: "",
    password: "",
    phonenumber: "",
  };
  const [userData, dispatch] = useReducer(userReducer, initialState);
  const [passwordcheck, setPasswordCheck] = useState<Boolean>();
  const [userIdcheck, setUserIdCheck] = useState<Boolean>(true);
  const router = useRouter();

  const handleUserId = (e: any) => {
    dispatch({ type: "SET_USERID", text: e.target.value });
  };
  const handleEmail = (e: any) => {
    dispatch({ type: "SET_USEREMAIL", text: e.target.value });
  };

  const handlePassword = (e: any) => {
    dispatch({ type: "SET_PASSWORD", text: e.target.value });
  };

  const handlePhonenumber = (e: any) => {
    dispatch({ type: "SET_PHONENUMBER", text: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (passwordcheck && !userIdcheck) {
        const { data, status } = await api.member(
          userData.userid,
          userData.password,
          userData.useremail,
          userData.phonenumber
        );
        console.log(status);

        router.push("/user/login");
      } else if (!passwordcheck) {
        alert("비밀번호 확인이 필요합니다");
      } else if (userIdcheck) {
        alert("중복확인이 필요합니다");
      }
    } catch (error) {
      if (error.response.data.status == 409) {
        alert("이메일 중복입니다");
        router.push("/user/register");
      }
    }
  };

  const handlePasswordCheck = (e: any) => {
    if (userData.password === e.target.value) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  };

  const handleExist = async () => {
    try {
      const { data, status } = await api.duplicationcheck(userData.userid);
      if (data.result) {
        alert("존재하는 아이디입니다.");
      } else if (!data.result) {
        alert("중복확인이 완료되었습니다.");
        setUserIdCheck(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="pl-4 pt-28 text-center">
        <p className=" text-5xl italic font-bold text-center">Sign Up</p>
        <div>
          <input
            className="border-2 w-[20%] mt-10 mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="아이디"
            onChange={handleUserId}
            type="text"></input>
          <button className="w-[10%]" onClick={handleExist}>
            중복확인
          </button>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="이메일"
            onChange={handleEmail}
            type="email"></input>
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
            className="border-2 w-[30%] mb-10 text-xl rounded-xl px-3 py-2"
            placeholder="비밀번호 확인"
            onChange={handlePasswordCheck}
            type="Password"></input>
        </div>
        <div>
          <input
            className="border-2 w-[30%] mb-4 text-xl rounded-xl px-3 py-2"
            placeholder="휴대폰번호"
            onChange={handlePhonenumber}
            type="text"></input>
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
