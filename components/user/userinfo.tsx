import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const Userinfo = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      if (localStorage.getItem("json")) {
        console.log("정보있음");
        const userData = localStorage.getItem("login");
        const contentData = JSON.parse(localStorage.getItem("json"));
        const filter = contentData.filter(
          (data: any) => data[0].user === userData
        );
        setContent(filter);
      }
    }
  }, []);

  console.log(content);
  return <></>;
};

export default Userinfo;
