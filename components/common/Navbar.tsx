import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import CustomLink from "./CustomLink";
import { usePageDispatch } from "../../lib/context/PageContext";
import { PHOTOCARD_MENU_BUTTON } from "../../lib/utils/styles";
import { useRouter } from "next/router";

const Navbar = () => {
  const setPage = usePageDispatch();
  const handleClick = React.useCallback(() => setPage?.(0), []);
  const router = useRouter();
  const saleIdTest = "1234";

  const [userAuth, setUserAuth] = useState();
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setUserAuth(true);
      const data = localStorage.getItem("login");
      setUserEmail(data);
    } else {
      setUserAuth(false);
    }
  }, [setUserEmail]);

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
        <div className="flex-1 m-2">
          {userEmail ? (
            <CustomLink
              className={PHOTOCARD_MENU_BUTTON}
              href={`/sale/${userEmail}`}
              as={`/sale/${userEmail}`}>
              <span onClick={handleClick}>포카 판매하기</span>
            </CustomLink>
          ) : (
            <>
              <CustomLink
                className={PHOTOCARD_MENU_BUTTON}
                href="/user/login"
                as={`/user/login`}>
                <span onClick={handleClick}>포카 판매하기</span>
              </CustomLink>
            </>
          )}
        </div>
        <div className="flex-1">
          <ul className="flex justify-end m-2">
            {userAuth ? (
              <>
                <li>
                  <NavLink href="/user/info" as="/user/info">
                    <span onClick={handleClick}>내 정보</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/chatting/chat" as="/chatting/chat">
                    <span onClick={handleClick}>채팅</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
