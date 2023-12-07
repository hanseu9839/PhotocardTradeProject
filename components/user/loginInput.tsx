import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { mutate } from "swr";
import api from "../../API/api";

const LoginInput = () => {
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleID = React.useCallback((e: any) => {
    setUserID(e.target.value);
  }, []);
  const handlePassword = React.useCallback((e: any) => {
    setUserPassword(e.target.value);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, status } = await api.login(userID, userPassword);
      if (status !== 200) {
        setErrors(data.errors);
      }
      if (data?.data) {
        window.localStorage.setItem("user", JSON.stringify(data.data));
        mutate("user", data?.data);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(errors);

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
            className=" bg-black text-white rounded-md px-3 py-1.5 "
            disabled={isLoading}>
            <p className="text-xl font-extralight">Sign up</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginInput;
