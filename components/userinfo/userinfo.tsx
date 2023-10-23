import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const Userinfo = () => {
  const [content, setContent] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      if (localStorage.getItem("json")) {
        console.log("정보있음");
        const loginData = localStorage.getItem("login");
        const contentData = JSON.parse(localStorage.getItem("json"));
        const filter = contentData.filter(
          (data: any) => data[0].user === loginData
        );
        setContent(filter);
        const userData = JSON.parse(localStorage.getItem("user"));
        const filter2 = userData.filter(
          (data: any) => data[0].email === loginData
        );
        setUser(filter2[0][0].name);
      }
    }
  }, []);

  console.log(content);
  console.log(user);
  return (
    <>
      {content.map((item) => item[0].name)}
      {user}
    </>
  );
};

export default Userinfo;
