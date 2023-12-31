import React, { useEffect, useState, useRef, useReducer } from "react";
import api from "../../API/user/userApi";
import userReducer from "@/lib/utils/userReducer";
import { useRouter } from "next/router";
import { ID, EMAIL, PASSWORD, PHONENUMBER } from "@/lib/utils/registerRegex";
import Maybe from "../common/Maybe";

const RegisterForm = () => {
  const initialState = {
    userid: "",
    useremail: "",
    password: "",
    phonenumber: "",
  };
  const [userData, dispatch] = useReducer(userReducer, initialState);
  const [passwordcheck, setPasswordCheck] = useState<Boolean>(true);
  const [userIdcheck, setUserIdCheck] = useState<Boolean>(true);
  const [emailAuthOpen, setEmailAuthOpen] = useState(false);
  const [emailAuthNumber, setEmailAuthNumber] = useState();
  const [idformat, setIdFormat] = useState(true);
  const [emailformat, setEmailFormat] = useState(true);
  const [passwordformat, setPasswordFormat] = useState(true);
  const [phoneformat, setPhoneFormat] = useState(true);
  const router = useRouter();

  const handleUserId = (e: any) => {
    if (ID.test(e.target.value)) {
      setIdFormat(true);
      dispatch({ type: "SET_USERID", text: e.target.value });
    } else if (e.target.value == "") {
      setIdFormat(true);
    } else {
      setIdFormat(false);
    }
  };
  const handleEmail = (e: any) => {
    if (EMAIL.test(e.target.value)) {
      setEmailFormat(true);
      dispatch({ type: "SET_USEREMAIL", text: e.target.value });
    } else if (e.target.value == "") {
      setEmailFormat(true);
    } else {
      setEmailFormat(false);
    }
  };

  const handlePassword = (e: any) => {
    if (PASSWORD.test(e.target.value)) {
      setPasswordFormat(true);
      dispatch({ type: "SET_PASSWORD", text: e.target.value });
    } else if (e.target.value == "") {
      setPasswordFormat(true);
    } else {
      setPasswordFormat(false);
    }
  };

  const handlePhonenumber = (e: any) => {
    if (PHONENUMBER.test(e.target.value)) {
      setPhoneFormat(true);
      dispatch({ type: "SET_PHONENUMBER", text: e.target.value });
    } else if (e.target.value == "") {
      setPhoneFormat(true);
    } else {
      setPhoneFormat(false);
    }
  };

  const handleEmailAuthNumber = (e: any) => {
    setEmailAuthNumber(e.target.value);
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
        alert("아이디 중복확인이 필요합니다");
      }
    } catch (error) {
      if (error.response.data.status == 409) {
        alert("이메일 / 아이디 중복입니다");
        router.push("/user/register");
      }
    }
  };

  const handlePasswordCheck = (e: any) => {
    if (userData.password == e.target.value) {
      setPasswordCheck(true);
    } else if (e.target.value == "") {
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

  const handleEmailAuth = async () => {
    try {
      const { data, status } = await api.emailauth(userData.useremail);
      setEmailAuthOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailAuthComplete = async () => {
    try {
      const { data, status } = await api.emailauthCheck(
        emailAuthNumber,
        userData.useremail
      );
      alert("이메일 인증이 완료되었습니다.");
    } catch (error) {
      alert("이메일 인증이 실패하였습니다. 다시 시도해주세요");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="pl-4 pt-28 text-center">
        <p className=" text-5xl italic font-bold text-center">Sign In</p>
        <fieldset>
          <fieldset>
            <input
              className="border-2 w-[20%] mt-10 text-xl rounded-xl px-3 py-2"
              placeholder="아이디"
              onChange={handleUserId}
              type="text"
              required
            />
            <input
              className="bg-black w-[5%] text-white rounded-lg p-2 m-2"
              onClick={handleExist}
              type="button"
              value="중복확인"
            />
            <Maybe test={!idformat}>
              <p className="text-sm mr-24 text-red-700">
                영소문자/숫자로 구성된 6글자 이상으로 조합해주세요
              </p>
            </Maybe>
          </fieldset>
          <fieldset>
            <input
              className="border-2 w-[20%] mt-4 text-xl rounded-xl px-3 py-2"
              placeholder="이메일"
              onChange={handleEmail}
              type="text"
              required
            />
            <input
              className="bg-black w-[5%] text-sm text-white rounded-lg p-2 m-2"
              onClick={handleEmailAuth}
              type="button"
              value="이메일 인증"
            />
            <Maybe test={!emailformat}>
              <p className="text-sm mr-24 text-red-700">
                이메일 형식을 지켜주세요
              </p>
            </Maybe>
          </fieldset>
          <Maybe test={emailAuthOpen}>
            <fieldset>
              <input
                className="border-2 w-[20%] mt-4 text-xl rounded-xl px-3 py-2"
                placeholder="인증번호 입력"
                onChange={handleEmailAuthNumber}
                required
              />
              <input
                className="bg-black w-[5%] text-white rounded-lg p-2 m-2"
                onClick={handleEmailAuthComplete}
                type="button"
                value="확인"
              />
            </fieldset>
          </Maybe>
          <fieldset>
            <input
              className="border-2 w-[26%] mt-4 text-xl rounded-xl px-3 py-2"
              placeholder="비밀번호"
              onChange={handlePassword}
              required
              type="password"></input>
            {!passwordformat && (
              <p className="text-sm mr-24 text-red-700">
                영문,특수문자,숫자로 구성된 8글자 이상으로 조합해주세요
              </p>
            )}
          </fieldset>
          <fieldset>
            <input
              className="border-2 w-[26%] mt-4 text-xl rounded-xl px-3 py-2"
              placeholder="비밀번호 확인"
              onChange={handlePasswordCheck}
              required
              type="password"></input>
            {!passwordcheck && (
              <p className="text-sm  text-red-700">
                영문,특수문자,숫자로 구성된 8글자 이상으로 조합된 비밀번호와
                다릅니다.
              </p>
            )}
          </fieldset>
          <fieldset>
            <input
              className="border-2 w-[26%] mt-4 text-xl rounded-xl px-3 py-2"
              placeholder="휴대폰번호"
              onChange={handlePhonenumber}
              required
              type="text"></input>
            {!phoneformat && (
              <p className="text-sm  text-red-700">
                (-)을 제외 한, 휴대폰 번호 11자리를 입력해주세요
              </p>
            )}
          </fieldset>
          <fieldset className="w-[63%] flex justify-end">
            <button
              className="bg-black text-white text-xl rounded-md px-3 py-1.5 m-2"
              onClick={handleSubmit}
              type="submit">
              Sign Up
            </button>
          </fieldset>
        </fieldset>
      </form>
    </>
  );
};
export default RegisterForm;
