import React, { useEffect, useState } from "react";

const photoCardList = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const b = localStorage.getItem("json");
    const c: any = JSON.parse(b);
    setData(c);
  }, []);

  console.log(data);

  return (
    <>
      {data && (
        <>
          <div className="p-10 pt-20 [text-align:-webkit-center]">
            <img src={data.image}></img>
            <span>{data.name}</span>
            <span>{data.category}</span>
            <span>{data.select}</span>
            <span>{data.content}</span>
          </div>
          <div className="p-10 pt-20 [text-align:-webkit-center]">
            <img src={data.image}></img>
            <span>{data.name}</span>
            <span>{data.category}</span>
            <span>{data.select}</span>
            <span>{data.content}</span>
          </div>
        </>
      )}
    </>
  );
};
export default photoCardList;
