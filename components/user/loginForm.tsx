import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { mutate } from "swr";
import api from "../../API/user/userApi";

const LoginForm = () => {
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

  return (
    <>
      <form onSubmit={handleSubmit} className="pl-4 pt-28 text-center">
        <fieldset>
          <p className=" text-5xl italic font-bold text-center">Sign Up</p>
          <fieldset>
            <input
              className="border-2 w-[30%] mt-10 text-xl rounded-xl px-3 py-2"
              placeholder="아이디"
              type="text"
              onChange={handleID}
            />
          </fieldset>
          <fieldset>
            <input
              className="border-2 w-[30%] mt-5 text-xl rounded-xl px-3 py-2"
              placeholder="비밀번호"
              type="Password"
              onChange={handlePassword}
            />
          </fieldset>
          <fieldset className="w-[65%] flex justify-end py-4">
            <button
              className="bg-black text-white rounded-md px-3 py-1.5"
              onChange={handlePassword}>
              <p className="text-xl font-extralight">Sign up</p>
            </button>
          </fieldset>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
