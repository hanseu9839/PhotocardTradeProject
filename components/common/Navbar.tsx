import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import NavLink from "./NavLink";
import CustomLink from "./CustomLink";
import { usePageDispatch } from "../../lib/context/PageContext";
import { PHOTOCARD_MENU_BUTTON } from "../../lib/utils/styles";
import { useRouter } from "next/router";
import checkLogin from "@/lib/utils/checkLogin";
import storage from "@/lib/utils/storage";
import Maybe from "./Maybe";

const Navbar = () => {
  const setPage = usePageDispatch();
  const { data: currentUser } = useSWR("user", storage);

  const isLoggedIn: any = checkLogin(currentUser);
  const handleClick = React.useCallback(() => setPage?.(0), []);
  const router = useRouter();

  const handleLogout = (e: any) => {
    e.preventDefault();
    window.localStorage.removeItem("user");
    mutate("user", null);
    alert("로그아웃되었습니다");
    router.push("/");
  };

  return (
    <nav className="p-5 w-full border-b-2">
      <div className="flex w-full">
        <div className="flex-none mr-2 ">
          <CustomLink
            className="pl-4 text-4xl italic font-bold "
            href="/"
            as="/">
            <span onClick={handleClick}>PHOTOCARD</span>
          </CustomLink>
        </div>
        <div className="flex flex-auto">
          <Maybe test={isLoggedIn}>
            <CustomLink
              className={PHOTOCARD_MENU_BUTTON}
              href={`/sale/new`}
              as={`/sale/new`}>
              <span onClick={handleClick}>포카 판매하기</span>
            </CustomLink>
            <div className="flex-auto m-2">
              <ul className="flex justify-end">
                <li>
                  <NavLink
                    href={`/userinfo/${currentUser?.userId}`}
                    as={`/userinfo/${currentUser?.userId}`}>
                    <span onClick={handleClick}>내 정보</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href={`/chatting/${currentUser?.userId}`}
                    as={`/chatting/${currentUser?.userId}`}>
                    <span onClick={handleClick}>채팅</span>
                  </NavLink>
                </li>
                <li>
                  <button
                    className="px-2 text-xl text-black-500"
                    onClick={handleLogout}>
                    로그아웃
                  </button>
                </li>
              </ul>
            </div>
          </Maybe>
          <Maybe test={!isLoggedIn}>
            <div className="flex-auto m-2">
              <ul className="flex justify-end ">
                <li>
                  <NavLink href="/user/login" as="/user/login">
                    <span onClick={handleClick}>로그인</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/user/register" as="/user/register">
                    <span onClick={handleClick}>회원가입</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </Maybe>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
